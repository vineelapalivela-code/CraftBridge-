"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

type Craft = {
  _id: string;
  title: string;
  category: string;
  price: number;
};

export default function Home() {
  const [crafts, setCrafts] = useState<Craft[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/crafts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch crafts");
        }
        return res.json();
      })
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load crafts.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-300">

      <Hero />

      <section className="py-24 bg-[#FFF9F1] dark:bg-transparent transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-orange-700 dark:text-orange-400 mb-16">
            Featured Crafts
          </h2>

          {loading ? (
            <div className="text-center text-2xl text-gray-700 dark:text-gray-300">
              Loading...
            </div>
          ) : error ? (
            <div className="text-center text-xl text-red-600 dark:text-red-400">
              {error}
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {crafts.map((craft) => (
                <Card
                  key={craft._id}
                  id={craft._id}
                  title={craft.title}
                  category={craft.category}
                  price={craft.price}
                />
              ))}
            </div>
          )}

        </div>

      </section>

      <Footer />

    </div>
  );
}