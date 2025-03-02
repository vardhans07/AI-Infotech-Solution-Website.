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
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
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
          <Heading subtitle="GET IN TOUCH" title="Contact Infotech Classes" />
          <p>We’re here to help. Reach out with any questions or inquiries!</p>
        </div>
      </section>

      {/* Contact Info and Feedback Form Section */}
      <section className="contact-details">
        <div className="container">
          <div className="contact-row">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Our Contact Details</h3>
              <p><strong>Email:</strong> wavare.d@gmail.com</p>
              <p><strong>Mobile No:</strong> 9136671577</p>
              <p><strong>Address:</strong> Plot no 35,Sector 05,Ghansoli,Navi Mumbai,4000701</p>
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
