"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setDark(false);
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setDark(true);
  }
}

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-200 transition duration-300 flex items-center justify-center shadow-md"
    >
      {dark ? (
        <Sun
          className="text-yellow-500"
          size={22}
        />
      ) : (
        <Moon
          className="text-orange-700"
          size={22}
        />
      )}
    </button>
  );
}