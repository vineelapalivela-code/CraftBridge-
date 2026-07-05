"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-300">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 dark:bg-orange-900 rounded-full blur-3xl opacity-30 -translate-x-20 -translate-y-20"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 dark:bg-orange-800 rounded-full blur-3xl opacity-30 translate-x-24 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 font-semibold mb-6">
              ✨ Handmade with Passion
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">

              Discover

              <span className="text-orange-600 dark:text-orange-400">
                {" "}Handmade{" "}
              </span>

              Treasures

            </h1>

            <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 leading-8 max-w-xl">

              Discover beautiful handcrafted products created by talented
              artisans. Every piece tells a story, celebrates creativity,
              and supports local craftsmanship.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <Link
                href="/dashboard"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg"
              >
                Explore Crafts
              </Link>

              <Link
                href="/about"
                className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
              >
                Learn More
              </Link>

            </div>

            {/* FEATURES */}

            <div className="mt-12 flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 font-medium">

              <div className="flex items-center gap-2">
                <span className="text-2xl">🧵</span>
                <span>Handmade Products</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span>Eco-Friendly</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                <span>Support Local Artisans</span>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

           <img
              src="/images/391_1a2770c9-2cc9-432e-936c-c4598424180e.webp"
              alt="Handmade Ceramic Vases"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 transition-colors duration-300">

              <p className="text-orange-600 dark:text-orange-400 font-bold text-lg">
                🎨 Crafted with Care
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Every product is unique and made by skilled artisans.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}