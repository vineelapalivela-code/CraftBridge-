type CardProps = {
  title: string;
  category: string;
  price: number;
};

export default function Card({
  title,
  category,
  price,
}: CardProps) {

  let image = "";

  if (title === "Handmade Vase") {
    image =
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800";
  }

  if (title === "Wooden Lamp") {
    image =
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800";
  }

  if (title === "Handwoven Basket") {
    image =
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800";
  }

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-orange-700">
          {title}
        </h2>

        <p className="mt-2 text-gray-600">
          {category}
        </p>

        <p className="mt-4 text-2xl font-bold text-green-600">
          ₹{price}
        </p>

        <button className="mt-6 w-full bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700">
          View Product
        </button>

      </div>

    </div>
  );
}