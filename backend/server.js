const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const rateLimit = require("express-rate-limit");

const craftRoutes = require("./routes/crafts");
const errorHandler = require("./middleware/errorHandler");
const app = express();   // ⭐ ADD THIS LINE

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: "Too many requests. Please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/crafts", craftRoutes);
app.use("/api/auth", authLimiter, authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 CraftBridge Backend is Running!");
});
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});