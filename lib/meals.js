import fs from "node:fs";
// import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { sql } from '@vercel/postgres';

const db = sql("https://vercel.com/marwaahmedfouads-projects/full-stack-project/stores/blob/store_lHYA5WRKZh5tx854/browser?file_url=https%253A%252F%252Flhya5wrkzh5tx854.public.blob.vercel-storage.com%252Fmeals-bEWKuQOW0VwqQvxjvtKI314k2xKJIV.db");

// export async function getMeals() {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     return db.prepare('SELECT * FROM meals').all();
// }


export async function createTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS meals (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image VARCHAR(255)
      );
    `;
  } catch (error) {
    console.error('Error creating table:', error);
    throw error;
  }
}

export async function getMeals() {
  try {
    const meals = await sql`SELECT * FROM meals;`;
    return meals.rows;
  } catch (error) {
    console.error('Error getting meals:', error);
    throw error;
  }
}

export async function saveMeal(title, description, image) {
  try {
    const result = await sql`
      INSERT INTO meals (title, description, image)
      VALUES (${title}, ${description}, ${image})
      RETURNING *;
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error saving meal:', error);
    throw error;
  }
}
































// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const meals = db.prepare("SELECT * FROM meals").all();
//   const countStmt = db.prepare("SELECT COUNT(*) AS count FROM meals");
//   const { count } = countStmt.get();
//   console.log(`Total meals before seeding: ${count}`);
//   console.log(meals);
//   return meals;
// }

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// export async function saveMeal(meal) {
//   meal.slug = slugify(meal.title, { lower: true });
//   meal.instructions = xss(meal.instructions);
//   // Handle image
//   const extention = meal.image.name.split(".").pop();
//   const fileName = `${meal.slug}.${extention}`;
//   // Path relative to project root
//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   const bufferedImage = await meal.image.arrayBuffer();
//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error("saving image failed");
//     }
//   });
//   meal.image = `/images/${fileName}`;
//   db.prepare(
//     `INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES 
//     (@title, @slug, @image, @summary, @instructions, @creator, @creator_email)`
//   ).run(meal);
// }

export async function deleteMeal(slug) {
  const meal = getMeal(slug);
  if (!meal) {
    throw new Error("Meal not found");
  }

  // Delete the image file if it exists
  if (meal.image) {
    const imagePath = `public${meal.image}`;
    try {
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  }

  // Delete the meal from the database
  db.prepare("DELETE FROM meals WHERE slug = ?").run(slug);
}

// export async function saveMeal(meal) {
//   meal.slug = slugify(meal.title, { lower: true });
//   meal.instructions = xss(meal.instructions);
//   // Handle image upload
//   const extension = meal.image.name.split('.').pop();
//   const fileName = `${meal.slug}.${extension}`;

//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   const bufferedImage = await meal.image.arrayBuffer();

//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error("Saving image failed");
//     }
//   });

//   meal.image = `/images/${fileName}`;

//   db.prepare(
//     `INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES
//     (@title, @slug, @image, @summary, @instructions, @creator, @creator_email)`
//   ).run(meal);
// }
