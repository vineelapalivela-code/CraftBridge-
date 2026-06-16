import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-16 px-8 bg-orange-50">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-10">
          Featured Handmade Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Handmade Pottery"
            description="Beautiful handcrafted pottery made with love."
            image="https://picsum.photos/300/200?1"
          />

          <Card
            title="Woven Bags"
            description="Traditional bags crafted by skilled artisans."
            image="https://picsum.photos/300/200?2"
          />

          <Card
            title="Wooden Decor"
            description="Eco-friendly wooden home decoration."
            image="https://picsum.photos/300/200?3"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}