import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "../components/images/image-slideshow";

export default function Home() {
  return (
    <>
 <header className="relative min-h-screen flex flex-col lg:flex-row items-stretch bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-full min-h-[400px] lg:min-h-screen">
          <ImageSlideshow />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 sm:p-8 lg:p-12 text-center lg:text-left min-h-[400px] lg:min-h-screen">
          <div className="mb-8 lg:mb-12 max-w-md lg:max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              Taste & share food from all over the world
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Link 
              to="/meals" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base"
            >
              Explore Meals
            </Link>
            <Link 
              to="/community" 
              className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              How it works
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                NextLevel Food is a platform for foodies to share their favorite
                recipes with the world. It's a place to discover new dishes,
                and to connect with other food lovers.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                NextLevel Food is a place to discover new dishes, and to connect
                with other food lovers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
              Why NextLevel Food?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Share Recipes</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Share your favorite recipes with food lovers around the world and discover amazing new dishes.
                </p>
              </div>
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Global Community</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Connect with food enthusiasts from different cultures and learn about diverse cuisines.
                </p>
              </div>
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Quality Content</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Discover high-quality, tested recipes that will take your cooking to the next level.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
 
    </>
  );
}
