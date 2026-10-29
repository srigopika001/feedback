const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default Route
app.get("/", (req, res) => {
    res.send("Feedback Server Running");
});

// POST Route
app.post("/api/feedback", (req, res) => {
    const feedbackData = req.body;

    console.log("Received Feedback:", feedbackData);

    res.status(200).json({
        message: "Feedback received successfully!"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});