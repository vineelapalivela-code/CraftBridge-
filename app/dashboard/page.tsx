"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState } from "react";
import Link from "next/link";
import {
  Package,
  PlusCircle,
  Palette,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/crafts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          price: Number(price),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setMessage("✅ Craft added successfully!");

      setTitle("");
      setCategory("");
      setPrice("");

    } catch (err: any) {
      setMessage("❌ " + err.message);
    }

    setLoading(false);
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black pt-32 pb-24 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h1 className="text-5xl font-extrabold text-orange-700 dark:text-orange-400">
              Artisan Dashboard
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Manage your handmade creations and grow your artisan journey.
            </p>

          </div>
                    {/* Dashboard Cards */}

          <div className="grid md:grid-cols-3 gap-8">

            {/* Total Crafts */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center mb-6">

                <Package
                  className="text-orange-600 dark:text-orange-400"
                  size={32}
                />

              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Total Crafts
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-3 leading-7">
                View all handcrafted products listed on the platform.
              </p>

            </div>

            {/* Add Craft */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-6">

                <PlusCircle
                  className="text-green-600 dark:text-green-400"
                  size={32}
                />

              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Add New Craft
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-3 leading-7">
                Showcase your newest handmade masterpiece to the world.
              </p>

            </div>

            {/* Categories */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center mb-6">

                <Palette
                  className="text-yellow-600 dark:text-yellow-400"
                  size={32}
                />

              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Craft Categories
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-3 leading-7">
                Pottery, Weaving, Woodwork, Paintings and many more handmade collections.
              </p>

            </div>

          </div>
                    {/* Welcome Section */}

          <div className="mt-16 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 transition-colors duration-300">

            <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400">
              Welcome to CraftBridge 👋
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-8">

              CraftBridge is a platform that connects talented artisans with
              people who appreciate authentic handmade products. Whether you
              create pottery, paintings, woven baskets, wooden décor, handmade
              jewelry, or unique home décor, this marketplace helps your
              creativity reach the world.

            </p>

            <Link
              href="/"
              className="inline-flex items-center mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl transition font-semibold shadow-lg"
            >
              Browse Crafts

              <ArrowRight
                className="ml-2"
                size={20}
              />

            </Link>

          </div>

          {/* Add Craft Form */}

          <div className="mt-16 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 transition-colors duration-300">

            <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400 text-center">
              Add New Craft
            </h2>

            <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
              Fill in the details below to add a new handmade product.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >              {/* Craft Title */}

              <div>

                <label className="font-semibold text-gray-700 dark:text-white">
                  Craft Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Handmade Vase"
                  required
                  className="mt-2 w-full border rounded-xl p-4 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none focus:border-orange-500"
                />

              </div>

              {/* Category */}

              <div>

                <label className="font-semibold text-gray-700 dark:text-white">
                  Category
                </label>

                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Pottery"
                  required
                  className="mt-2 w-full border rounded-xl p-4 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none focus:border-orange-500"
                />

              </div>

              {/* Price */}

              <div>

                <label className="font-semibold text-gray-700 dark:text-white">
                  Price (₹)
                </label>

                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="899"
                  required
                  className="mt-2 w-full border rounded-xl p-4 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none focus:border-orange-500"
                />

              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                {loading ? "Adding Craft..." : "Add Craft"}
              </button>

              {message && (

                <div className="text-center font-semibold text-green-600 dark:text-green-400">

                  {message}

                </div>

              )}

            </form>
            </div>

        </div>

      </main>

      <Footer />

    </ProtectedRoute>
  );
}