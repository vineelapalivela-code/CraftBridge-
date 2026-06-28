export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">

        <h1 className="text-6xl md:text-7xl font-extrabold text-orange-700 leading-tight">
          Discover Handmade
          <br />
          Treasures
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-gray-700">
          Support talented artisans and explore unique handcrafted
          products from around the world.
        </p>

        <button className="mt-10 px-8 py-4 bg-orange-600 text-white rounded-full text-lg font-semibold hover:bg-orange-700 transition">
          Explore Collection
        </button>

      </div>
    </section>
  );
}