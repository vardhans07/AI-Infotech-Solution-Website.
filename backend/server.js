const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");
const Feedback = require("./models/feedbackModel");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Debugging Middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your email", // Replace with your Gmail
    pass: "app password", // Replace with your App Password
  },
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

// POST API Endpoint with Email Notification
app.post("/api/feedback", async (req, res) => {
  try {
    console.log("POST request received:", req.body);
    const feedback = await Feedback.create(req.body);
    console.log("Feedback saved:", feedback.toJSON());

    // Send Email Notification
    const mailOptions = {
      from: "your-email@gmail.com",
      to: "your mail",
      subject: "New Feedback Submission",
      text: `
        New feedback received at ${feedback.createdAt}:
        Name: ${req.body.name}
        Email: ${req.body.email}
        Mobile: ${req.body.mobile}
        Message: ${req.body.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Notification email sent");

    res.status(201).json({ message: "Feedback submitted successfully!", feedback });
  } catch (error) {
    console.error("Error inserting feedback or sending email:", error);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

// Sync Database and Start Server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced successfully!");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => {
    console.error("Database sync failed:", err);
    process.exit(1);
  });
