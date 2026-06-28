const express = require("express");
const cors = require("cors");
require("dotenv").config();

const craftRoutes = require("./routes/crafts");
const errorHandler = require("./middleware/errorHandler");
const app = express();   // ⭐ ADD THIS LINE

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/crafts", craftRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 CraftBridge Backend is Running!");
});
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});