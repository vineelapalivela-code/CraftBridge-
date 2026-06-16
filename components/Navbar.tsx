import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-orange-600 hover:text-orange-700 transition"
        >
          CraftBridge
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">

          <Link
            href="/"
            className="text-gray-700 font-semibold hover:text-orange-600 hover:bg-orange-100 px-3 py-2 rounded-lg transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-700 font-semibold hover:text-orange-600 hover:bg-orange-100 px-3 py-2 rounded-lg transition-all duration-300"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            className="text-gray-700 font-semibold hover:text-orange-600 hover:bg-orange-100 px-3 py-2 rounded-lg transition-all duration-300"
          >
            Dashboard
          </Link>

          <Link
            href="/login"
            className="text-gray-700 font-semibold hover:text-orange-600 hover:bg-orange-100 px-3 py-2 rounded-lg transition-all duration-300"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}
