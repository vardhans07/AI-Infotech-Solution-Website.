import React, { useState } from "react";
import "./styles.css";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Feedback submitted successfully!");
        console.log(result);
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert("Error submitting feedback: " + result.error);
        console.error("Error:", result.error);
      }
    } catch (error) {
      alert("Network error: " + error.message);
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-page">
      <section className="feedback-hero">
        <div className="container">
          <h1 className="feedback-title">We Value Your Feedback</h1>
          <p className="feedback-subtitle">Let us know how we can improve!</p>
        </div>
      </section>
      <section className="feedback-form-section">
        <div className="container">
          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="feedback-input"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="feedback-input"
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your Mobile"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              className="feedback-input"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="feedback-textarea"
            />
            <button type="submit" className="feedback-button" disabled={loading}>
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
