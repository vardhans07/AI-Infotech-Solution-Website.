import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Header from "./Header";
import Footer from "./Footer";
import './styles.css';

function App() {
    const [feedback, setFeedback] = useState({ name: "", email: "", mobile: "", message: "" });

    const handleChange = (e) => setFeedback({ ...feedback, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:5000/api/feedback", feedback);
            alert("Feedback submitted successfully!");
            setFeedback({ name: "", email: "", mobile: "", message: "" });
        } catch (error) {
            alert("Error submitting feedback");
            console.error("Error:", error);
        }
    };

    return (
        <Router>
            {/* Pass the logo path directly from public folder */}
            <Header logo="/images/logo.jpg" searchBar={false} />
            
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/feedback" element={<Feedback onSubmit={handleSubmit} onChange={handleChange} formData={feedback} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
