"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          href="/"
          className="text-4xl font-black text-orange-700 tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          CraftBridge
        </Link>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">

          <Link
            href="/"
            className="hover:text-orange-600 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-orange-600 transition"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-orange-600 transition"
          >
            Dashboard
          </Link>

          <DarkModeToggle />

          <Link
            href="/login"
            className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition shadow-md"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}