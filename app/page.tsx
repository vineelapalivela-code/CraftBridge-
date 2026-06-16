import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto py-12 px-4">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Handmade Products
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Handwoven Saree"
            description="Beautiful handcrafted saree made by skilled artisans."
            image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          />

          <Card
            title="Wooden Home Decor"
            description="Eco-friendly wooden decorative items made by local craftsmen."
            image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          />

        </div>

      </section>

      <Footer />
    </>
  );
}