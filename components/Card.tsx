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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-orange-700">
          {title}
        </h2>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg">
          Explore
        </button>

      </div>
    </div>
  );
}