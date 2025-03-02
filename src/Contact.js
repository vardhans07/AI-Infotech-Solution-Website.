import React, { useState } from "react";
import "./styles.css";
import Heading from "./heading"; // Reuse your Heading component

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <Heading
              subtitle="GET IN TOUCH"
              title="Contact AI Infotech Solutions Classes"
            />
            <p className="hero-tagline">
              We’re here to help. Reach out with any questions or inquiries!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Feedback Form Section */}
      <section className="contact-details">
        <div className="container">
          <div className="contact-row">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Our Contact Details</h3>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:wavare.d@gmail.com" className="contact-link">
                    wavare.d@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <p>
                  <strong>Mobile:</strong>{" "}
                  <a href="tel:9136671577" className="contact-link">
                    9136671577
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>
                  <strong>Address:</strong>{" "}
                  <span className="contact-address">
                    Plot no 35, Sector 05, Ghansoli, Navi Mumbai, 400701
                  </span>
                </p>
              </div>
            </div>

            {/* Feedback Form */}
            <div className="contact-feedback">
              <h3>Send Us Your Feedback</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Your Mobile"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                />
                <button type="submit">Submit Feedback</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
