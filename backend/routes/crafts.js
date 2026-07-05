const express = require("express");
const router = express.Router();
const Craft = require("../models/Craft");



// =======================
// GET ALL CRAFTS
// =======================
router.get("/", async (req, res) => {
  try {
    const crafts = await Craft.find();

    res.status(200).json(crafts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch crafts",
      error: error.message,
    });
  }
});
// =======================
// SEARCH CRAFTS
// Example:
// /api/crafts/search?q=wood
// =======================
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const crafts = await Craft.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } }
      ]
    });

    res.status(200).json(crafts);

  } catch (error) {
    res.status(500).json({
      message: "Search failed",
      error: error.message,
    });
  }
});

// =======================
// GET CRAFT BY ID
// =======================
router.get("/:id", async (req, res) => {
  try {
    const craft = await Craft.findById(req.params.id);

    if (!craft) {
      return res.status(404).json({
        message: "Craft not found",
      });
    }

    res.status(200).json(craft);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch craft",
      error: error.message,
    });
  }
});

// =======================
// CREATE NEW CRAFT
// =======================
router.post("/", async (req, res) => {
  try {
    const { title, category, price } = req.body;

    if (!title || !category || !price) {
      return res.status(400).json({
        message: "Please provide title, category, and price.",
      });
    }

    const newCraft = await Craft.create({
      title,
      category,
      price,
    });

    res.status(201).json({
      message: "Craft added successfully!",
      craft: newCraft,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create craft",
      error: error.message,
    });
  }
});

// =======================
// UPDATE CRAFT
// =======================
router.put("/:id", async (req, res) => {
  try {
    const { title, category, price } = req.body;

    const craft = await Craft.findByIdAndUpdate(
      req.params.id,
      { title, category, price },
      { new: true, runValidators: true }
    );

    if (!craft) {
      return res.status(404).json({
        message: "Craft not found",
      });
    }

    res.status(200).json({
      message: "Craft updated successfully!",
      craft,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update craft",
      error: error.message,
    });
  }
});

// =======================
// DELETE CRAFT
// =======================
router.delete("/:id", async (req, res) => {
  try {
    const craft = await Craft.findByIdAndDelete(req.params.id);

    if (!craft) {
      return res.status(404).json({
        message: "Craft not found",
      });
    }

    res.status(200).json({
      message: "Craft deleted successfully!",
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete craft",
      error: error.message,
    });
  }
});
module.exports = router;