"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !dark;
    setDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <main
      className={`min-h-screen flex items-center justify-center px-6 transition-all duration-300 ${
        dark ? "bg-stone-900" : "bg-[#F6EFD9]"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl shadow-md"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      <div
        className={`w-full max-w-md rounded-2xl shadow-xl p-8 transition-all duration-300 ${
          dark ? "bg-stone-800 text-white" : "bg-white text-stone-900"
        }`}
      >
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-2">
          Welcome Back
        </h1>

        <p className={dark ? "text-stone-300 text-center mb-8" : "text-stone-600 text-center mb-8"}>
          Login to your CraftBridge account
        </p>

        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={email === "" ? "Email is required" : ""}
        />

        <div className="mt-6">
          <Button size="lg">Login</Button>
        </div>
      </div>
    </main>
  );
}