export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-semibold">CraftBridge</h2>

        <p className="text-gray-400 mt-2">
          Connecting artisans with customers worldwide.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>

        <p className="text-sm text-gray-500 mt-5">
          © 2026 CraftBridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}