const express = require("express");
require("./config/db");

const app = express();

app.use(express.json());

const studentRoutes = require("./routes/students");

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Student REST API");
});

// Student Routes
app.use("/students", studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});