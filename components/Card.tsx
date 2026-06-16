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

    <div className="border rounded-lg shadow-lg overflow-hidden">

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
          View
        </button>

      </div>

    </div>

  );
}