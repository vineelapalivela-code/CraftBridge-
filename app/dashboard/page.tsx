import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-100 to-orange-50">

        <section className="max-w-6xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold text-center text-orange-700">
            Artisan Dashboard
          </h1>

          <p className="text-center text-gray-700 mt-5 text-lg">
            Manage your products, track sales, and grow your handmade business.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-orange-600">🛍 Products</h2>
              <p className="mt-3 text-gray-600">
                View and manage all your handcrafted products.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-orange-600">📦 Orders</h2>
              <p className="mt-3 text-gray-600">
                Track incoming customer orders easily.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-orange-600">📈 Analytics</h2>
              <p className="mt-3 text-gray-600">
                Monitor sales and product performance.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}