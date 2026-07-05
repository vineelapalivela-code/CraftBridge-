import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D1E16] text-white mt-24">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2
            className="text-4xl font-bold text-orange-300"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            CraftBridge
          </h2>

          <p className="mt-5 text-gray-300 leading-8">
            Discover handcrafted treasures created with passion by talented
            artisans. Every purchase supports creativity and traditional
            craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-300 mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>
              <Link href="/" className="hover:text-orange-300 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-orange-300 transition">
                About
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                className="hover:text-orange-300 transition"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/login" className="hover:text-orange-300 transition">
                Login
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-orange-300 mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex gap-3">
              <MapPin className="text-orange-300 mt-1" size={18} />
              <p>Hyderabad, India</p>
            </div>

            <div className="flex gap-3">
              <Phone className="text-orange-300 mt-1" size={18} />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-orange-300 mt-1" size={18} />
              <p>support@craftbridge.com</p>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-orange-300 mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-orange-600 hover:bg-orange-500 transition p-3 rounded-full"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="#"
              className="bg-orange-600 hover:bg-orange-500 transition p-3 rounded-full"
            >
              <FaFacebook size={22} />
            </a>

            <a
              href="#"
              className="bg-orange-600 hover:bg-orange-500 transition p-3 rounded-full"
            >
              <FaTwitter size={22} />
            </a>

          </div>

          <p className="mt-6 text-gray-300 leading-7">
            Join our community and stay updated with the latest handmade
            collections and artisan stories.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400">

          <p>
            © {new Date().getFullYear()} CraftBridge. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link href="#" className="hover:text-orange-300 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-orange-300 transition">
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}