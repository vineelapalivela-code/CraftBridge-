import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-orange-50 via-amber-100 to-orange-50 min-h-screen">

        <section className="max-w-5xl mx-auto text-center py-20 px-6">

          <h1 className="text-5xl font-extrabold text-orange-700">
            About CraftBridge
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            CraftBridge is a digital marketplace dedicated to empowering
            talented artisans by connecting them directly with customers.
            We celebrate handmade craftsmanship while making unique,
            authentic products accessible to everyone.
          </p>

        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">

          <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition">

            <div className="text-5xl mb-4">🧶</div>

            <h2 className="text-2xl font-bold text-orange-600">
              Support Artisans
            </h2>

            <p className="mt-3 text-gray-600">
              Give talented local artisans a platform to showcase and sell
              their handcrafted creations.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition">

            <div className="text-5xl mb-4">🎨</div>

            <h2 className="text-2xl font-bold text-orange-600">
              Handmade Quality
            </h2>

            <p className="mt-3 text-gray-600">
              Every product is crafted with creativity, tradition, and
              attention to detail.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition">

            <div className="text-5xl mb-4">🤖</div>

            <h2 className="text-2xl font-bold text-orange-600">
              AI Recommendations
            </h2>

            <p className="mt-3 text-gray-600">
              AI helps customers discover handmade products based on their
              interests and shopping preferences.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}