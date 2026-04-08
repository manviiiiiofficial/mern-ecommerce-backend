const express = require("express");
const app = express();

// DB connection
const connectDB = require("./server/config/db");
connectDB();

// middleware
app.use(express.json());

// ROUTES CONNECT
const apiRoutes = require("./server/routes/apiroutes");
app.use("/api", apiRoutes);

// root check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});