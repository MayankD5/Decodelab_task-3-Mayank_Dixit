const express = require("express");
require("./config/db");

const studentRoutes = require("./routes/students");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Student Management REST API with MySQL");
});

// Student Routes
app.use("/students", studentRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});