export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24 py-12">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-orange-500">
          CraftBridge
        </h2>

        <p className="mt-4 text-gray-400">
          Connecting artisans with customers worldwide.
        </p>

        <div className="flex justify-center gap-10 mt-8 text-lg">

          <a href="#" className="hover:text-orange-400">
            About
          </a>

          <a href="#" className="hover:text-orange-400">
            Products
          </a>

          <a href="#" className="hover:text-orange-400">
            Contact
          </a>

        </div>

        <p className="mt-8 text-gray-500">
          © 2026 CraftBridge. All rights reserved.
        </p>

      </div>

    </footer>
  );
}