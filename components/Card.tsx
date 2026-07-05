import { Heart, Star } from "lucide-react";

type CardProps = {
  id: string;
  title: string;
  category: string;
  price: number;
};

export default function Card({
  id,
  title,
  category,
  price,
}: CardProps) {

  let image =
    "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=900&auto=format&fit=crop&q=80";

  if (title === "Handmade Vase") {
    image =
       "/images/images (1).jfif";
  }

  if (title === "Wooden table") {
  image = "/images/images (5).jfif";
}

  if (title === "Wooden Lamp") {
    image = "/images/images (3).jfif";
  }

  if (title === "Handwoven Basket") {
    image = "/images/images (2).jfif";
  }

  if (title === "Clay Pot") {
    image = "/images/images.jfif";
  }
async function deleteCraft() {
  const ok = confirm(`Delete "${title}"?`);

  if (!ok) return;

  try {
    const res = await fetch(`http://localhost:5000/api/crafts/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Delete failed");
    }

    alert("Craft deleted successfully!");

    window.location.reload();

  } catch (err) {
    alert("Unable to delete craft.");
  }
}

async function editCraft() {

  const newTitle = prompt("New Title", title);

  if (!newTitle) return;

  const newCategory = prompt("New Category", category);

  if (!newCategory) return;

  const newPrice = prompt("New Price", String(price));

  if (!newPrice) return;

  try {

    const res = await fetch(`http://localhost:5000/api/crafts/${id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: newTitle,
        category: newCategory,
        price: Number(newPrice),
      }),

    });

    if (!res.ok) {
      throw new Error("Update failed");
    }

    alert("Craft updated!");

    window.location.reload();

  } catch (err) {

    alert("Unable to update craft.");

  }

}
console.log(title);
  return (
    <div className="group bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

      {/* IMAGE */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
        />

        <button className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-orange-100 transition">

          <Heart
            size={20}
            className="text-orange-600"
          />

        </button>

      </div>

      {/* CONTENT */}

      <div className="p-7">

        <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">

          {category}

        </span>

        <h2
          className="mt-3 text-2xl font-bold text-gray-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h2>

        <div className="flex items-center gap-1 mt-4">

          <Star
            size={18}
            fill="#f59e0b"
            color="#f59e0b"
          />

          <Star
            size={18}
            fill="#f59e0b"
            color="#f59e0b"
          />

          <Star
            size={18}
            fill="#f59e0b"
            color="#f59e0b"
          />

          <Star
            size={18}
            fill="#f59e0b"
            color="#f59e0b"
          />

          <Star
            size={18}
            fill="#f59e0b"
            color="#f59e0b"
          />

          <span className="ml-2 text-gray-500">
            (4.9)
          </span>

        </div>

<div className="mt-6">

  <h3 className="text-3xl font-bold text-orange-700 mb-5">
    ₹{price}
  </h3>

  <div className="flex gap-3">

    <button
      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full font-semibold"
    >
      View
    </button>

    <button
      onClick={editCraft}
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold"
    >
      Edit
    </button>

    <button
      onClick={deleteCraft}
      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold"
    >
      Delete
    </button>

  </div>

</div>

      </div>

    </div>
  );
}