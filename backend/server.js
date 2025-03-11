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
    user: "rajpatil1664@gmail.com",
    pass: "iejlkosgoehrzciw",
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
    console.log("Feedback saved (full object):", feedback.toJSON());
    console.log("Raw createdAt (type):", typeof feedback.createdAt, feedback.createdAt);

    // Format createdAt with fallback
    let formattedCreatedAt;
    const createdAtValue = feedback.createdAt;
    console.log("createdAtValue:", createdAtValue); // Raw value check

    if (!createdAtValue || isNaN(new Date(createdAtValue).getTime())) {
      console.error("Invalid or missing createdAt:", createdAtValue);
      formattedCreatedAt = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "long",
        timeStyle: "short",
      }); // Use current time as fallback
    } else {
      formattedCreatedAt = new Date(createdAtValue).toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "long",
        timeStyle: "short",
      });
    }
    console.log("Formatted createdAt:", formattedCreatedAt);

    // Send Email Notification
    const mailOptions = {
      from: "rajpatil1664@gmail.com",
      to: "rajpatil1664@gmail.com",
      subject: "New Feedback Submission",
      text: `
        New feedback received at ${formattedCreatedAt}:
        Name: ${req.body.name}
        Email: ${req.body.email}
        Mobile: ${req.body.mobile}
        Message: ${req.body.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Notification email sent");

    res.status(201).json({
      message: "Feedback submitted successfully!",
      feedback: feedback.toJSON(),
      createdAt: formattedCreatedAt,
    });
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
