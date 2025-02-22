const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");
const Feedback = require("./models/feedbackModel");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Debugging Middleware to log all requests
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// GET API Endpoint
app.get("/api/feedback", async (req, res) => {
    try {
        console.log("GET request received");
        const feedbacks = await Feedback.findAll();
        res.json(feedbacks);
    } catch (error) {
        console.error("Error fetching feedback:", error);
        res.status(500).json({ error: "Failed to fetch feedbacks" });
    }
});

// POST API Endpoint
app.post("/api/feedback", async (req, res) => {
    try {
        console.log("POST request received:", req.body);
        const feedback = await Feedback.create(req.body);
        console.log("Feedback saved:", feedback.toJSON());
        res.status(201).json({ message: "Feedback submitted successfully!", feedback });
    } catch (error) {
        console.error("Error inserting feedback:", error);
        res.status(500).json({ error: "Failed to submit feedback" });
    }
});

// Sync Database and Start Server
sequelize.sync().then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
});
