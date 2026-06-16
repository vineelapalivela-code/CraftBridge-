export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 py-28 text-center">
      <h1 className="text-6xl font-extrabold text-orange-700">
        Discover Handmade Treasures
      </h1>

      <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
        Support talented artisans and explore unique handcrafted products from
        around the world.
      </p>

      <button className="mt-10 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
        Explore Collection
      </button>
    </section>
  );
}