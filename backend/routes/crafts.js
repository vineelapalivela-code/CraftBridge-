const express = require("express");
const router = express.Router();

// In-memory data (Week 4 only)
let crafts = [
  {
    id: 1,
    title: "Handmade Vase",
    category: "Pottery",
    price: 500,
  },
  {
    id: 2,
    title: "Wooden Lamp",
    category: "Woodwork",
    price: 1200,
  },
  {
    id: 3,
    title: "Handwoven Basket",
    category: "Weaving",
    price: 800,
  },
];

// =======================
// GET ALL CRAFTS
// =======================
router.get("/", (req, res) => {
  res.status(200).json(crafts);
});

// =======================
// SEARCH CRAFTS
// Example:
// /api/crafts/search?q=wood
// =======================
router.get("/search", (req, res) => {
  const query = req.query.q?.toLowerCase();

  if (!query) {
    return res.status(400).json({
      message: "Search query is required",
    });
  }

  const results = crafts.filter(
    (craft) =>
      craft.title.toLowerCase().includes(query) ||
      craft.category.toLowerCase().includes(query)
  );

  res.status(200).json(results);
});

// =======================
// GET CRAFT BY ID
// =======================
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const craft = crafts.find((c) => c.id === id);

  if (!craft) {
    return res.status(404).json({
      message: "Craft not found",
    });
  }

  res.status(200).json(craft);
});

// =======================
// CREATE NEW CRAFT
// =======================
router.post("/", (req, res) => {
  const { title, category, price } = req.body;

  if (!title || !category || !price) {
    return res.status(400).json({
      message: "Please provide title, category, and price.",
    });
  }

  const newCraft = {
    id: crafts.length + 1,
    title,
    category,
    price,
  };

  crafts.push(newCraft);

  res.status(201).json({
    message: "Craft added successfully!",
    craft: newCraft,
  });
});

// =======================
// UPDATE CRAFT
// =======================
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const { title, category, price } = req.body;

  const craft = crafts.find((c) => c.id === id);

  if (!craft) {
    return res.status(404).json({
      message: "Craft not found",
    });
  }

  craft.title = title || craft.title;
  craft.category = category || craft.category;
  craft.price = price || craft.price;

  res.status(200).json({
    message: "Craft updated successfully!",
    craft,
  });
});

// =======================
// DELETE CRAFT
// =======================
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const craftIndex = crafts.findIndex((c) => c.id === id);

  if (craftIndex === -1) {
    return res.status(404).json({
      message: "Craft not found",
    });
  }

  crafts.splice(craftIndex, 1);

  res.status(204).send();
});

module.exports = router;