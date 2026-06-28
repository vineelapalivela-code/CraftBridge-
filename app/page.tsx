"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

type Craft = {
  id: number;
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
    <>
      <Navbar />

      <Hero />

      <section className="py-24 bg-[#FFF9F1]">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-orange-700 mb-16">
      Featured Crafts
    </h2>

{loading ? (
  <div className="text-center text-2xl">
    Loading...
  </div>
) : error ? (
  <div className="text-center text-red-600 text-xl">
    {error}
  </div>
) : (
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {crafts.map((craft) => (
      <Card
        key={craft.id}
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
    </>
  );
}