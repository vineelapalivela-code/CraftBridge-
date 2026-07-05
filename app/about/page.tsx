"use client";

import Footer from "@/components/Footer";
import { HeartHandshake, Leaf, Sparkles } from "lucide-react";

export default function About() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black pt-28 transition-colors duration-300">

        {/* Hero */}

        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full font-semibold">
                🌿 About CraftBridge
              </span>

              <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Every Handmade Craft
                <span className="text-orange-600 dark:text-orange-400"> Has a Story</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300">

                CraftBridge is a platform created to celebrate handmade
                artistry. We believe every handcrafted product reflects
                creativity, patience, and passion.

                Our goal is to connect talented artisans with people who
                appreciate authentic craftsmanship.

              </p>

            </div>

            {/* Right */}

            <div>

              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1200&auto=format&fit=crop&q=80"
                alt="Artisan making pottery"
                className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
              />

            </div>

          </div>

        </section>

        {/* Story */}

        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 transition-colors duration-300">

            <h2 className="text-4xl font-bold text-orange-700 dark:text-orange-400 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 text-lg leading-9">

              CraftBridge was built with one simple vision:
              to provide artisans with a space where their handmade creations
              can reach people who truly value craftsmanship.

              Instead of mass-produced products, we celebrate unique pieces
              that preserve tradition, inspire creativity, and support local
              communities.

            </p>

          </div>

        </section>

        {/* Values */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

              <Sparkles
                size={45}
                className="text-orange-600"
              />

              <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                Handmade Quality
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-8">

                Every craft is carefully created with dedication,
                ensuring uniqueness and authenticity.

              </p>

            </div>

            {/* Card */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

              <Leaf
                size={45}
                className="text-green-600"
              />

              <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                Sustainable Choices
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-8">

                Supporting eco-friendly materials and responsible
                handcrafted production.

              </p>

            </div>

            {/* Card */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

              <HeartHandshake
                size={45}
                className="text-pink-600"
              />

              <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                Empowering Artisans
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-8">

                Helping talented makers share their creativity
                with the world.

              </p>

            </div>

          </div>

        </section>

        {/* Closing */}

        <section className="max-w-6xl mx-auto px-6 pb-24">

          <div className="bg-orange-600 dark:bg-orange-700 rounded-3xl text-white p-12 text-center shadow-xl transition-colors duration-300">

            <h2 className="text-4xl font-bold">
              Crafted with Passion ❤️
            </h2>

            <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto text-orange-100">

              Every handcrafted product carries the dedication,
              creativity, and tradition of the artisan who made it.
              By choosing handmade, you help preserve timeless skills
              and celebrate authentic craftsmanship.

            </p>

          </div>

        </section>

      </main>

      {/* Footer */}

      <Footer />

    </>
  );
}