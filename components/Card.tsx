type CardProps = {
  title: string;
  description: string;
  image: string;
};

export default function Card({
  title,
  description,
  image,
}: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-orange-700">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <button className="mt-5 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
          View Product
        </button>
      </div>
    </div>
  );
}