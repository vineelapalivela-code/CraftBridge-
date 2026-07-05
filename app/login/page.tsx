"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-300">

      <main className="flex items-center justify-center px-6 pt-28 pb-20">

        <div className="max-w-6xl w-full bg-white dark:bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2 transition-colors duration-300">

          {/* LEFT SIDE */}

          <div className="hidden lg:flex flex-col justify-center bg-orange-600 text-white p-16">

            <h1
              className="text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Welcome
              <br />
              Back.
            </h1>

            <p className="mt-8 text-lg leading-9 text-orange-100">
              Continue your journey of discovering beautiful handmade creations
              crafted by talented artisans from around the world.
            </p>

            <img
              src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=1000&auto=format&fit=crop&q=80"
              alt="Craft"
              className="mt-12 rounded-3xl h-80 object-cover shadow-xl"
            />

          </div>

          {/* RIGHT SIDE */}

          <div className="p-10 md:p-16 flex flex-col justify-center">

            <h2
              className="text-5xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sign In
            </h2>

            <p className="text-gray-500 dark:text-gray-300 mt-3">
              Login to your CraftBridge account
            </p>

            <form className="mt-10 space-y-6">

              {/* Email */}

              <div>

                <label className="font-semibold text-gray-700 dark:text-gray-200">
                  Email Address
                </label>

                <div className="mt-2 flex items-center border border-gray-300 dark:border-gray-700 rounded-2xl px-4 py-4 focus-within:border-orange-500">

                  <Mail
                    className="text-orange-600"
                    size={20}
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="ml-3 w-full outline-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="font-semibold text-gray-700 dark:text-gray-200">
                  Password
                </label>

                <div className="mt-2 flex items-center border border-gray-300 dark:border-gray-700 rounded-2xl px-4 py-4 focus-within:border-orange-500">

                  <Lock
                    className="text-orange-600"
                    size={20}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="ml-3 w-full outline-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff
                        className="text-gray-500 dark:text-gray-300"
                        size={20}
                      />
                    ) : (
                      <Eye
                        className="text-gray-500 dark:text-gray-300"
                        size={20}
                      />
                    )}
                  </button>

                </div>

              </div>

              {/* Remember */}

              <div className="flex justify-between items-center">

                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">

                  <input type="checkbox" />

                  Remember Me

                </label>

                <a
                  href="#"
                  className="text-orange-600 hover:underline"
                >
                  Forgot Password?
                </a>

              </div>

              {/* Button */}

              <button
                className="w-full bg-orange-600 hover:bg-orange-700 transition text-white py-4 rounded-full text-lg font-semibold shadow-lg"
              >
                Login
              </button>

            </form>

            <p className="mt-8 text-center text-gray-500 dark:text-gray-300">

              Don't have an account?

              <span className="text-orange-600 font-semibold cursor-pointer ml-2">
                Sign Up
              </span>

            </p>

          </div>

        </div>

      </main>

    </div>
  );
}