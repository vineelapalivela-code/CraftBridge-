"use client";

import { signIn } from "next-auth/react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { setIsLoggedIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

localStorage.setItem("token", data.token);
setIsLoggedIn(true);

alert("Login Successful!");

// Tell the navbar to update immediately
window.dispatchEvent(new Event("authChanged"));

router.push("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  } finally {
    setLoading(false);
  }
};

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

            <form onSubmit={handleLogin} className="mt-10 space-y-6">

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

                <Link
                  href="#"
                  className="text-orange-600 hover:underline"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 transition text-white py-4 rounded-full text-lg font-semibold shadow-lg disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-full border border-gray-300 dark:border-gray-700 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="font-medium text-gray-700 dark:text-white">
                  Sign in with Google
                </span>
              </button>
            </div>

            <p className="mt-8 text-center text-gray-500 dark:text-gray-300">

              Don't have an account?

              <span className="text-orange-600 font-semibold cursor-pointer ml-2">
                Sign Up
              </span>

            </p>

          </div>

        </div>

            </main>

      {/* Footer */}

      <footer className="border-t border-orange-200 dark:border-gray-800 bg-white/60 dark:bg-gray-950/60 backdrop-blur-md">

        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-center md:text-left">

            <h3
              className="text-lg font-semibold text-orange-600"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              CraftBridge
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Connecting artisans with the world, one handmade creation at a
              time.
            </p>

          </div>

          <div className="flex items-center gap-6 text-sm">

            <Link
              href="#"
              className="text-gray-500 hover:text-orange-600 transition"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:text-orange-600 transition"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:text-orange-600 transition"
            >
              Contact
            </Link>

          </div>

        </div>

        <div className="border-t border-orange-200 dark:border-gray-800 py-4 text-center text-sm text-gray-500 dark:text-gray-400">

          © 2026 CraftBridge • Made with ❤️ for artisans.

        </div>

      </footer>

    </div>
  );
}