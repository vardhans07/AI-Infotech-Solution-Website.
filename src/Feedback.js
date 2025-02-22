import React, { useState } from "react";
import "./styles.css";

function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert("Feedback submitted successfully!");
                console.log(result);
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
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                required 
            />
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                required 
            />
            <input 
                type="text" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                placeholder="Mobile" 
                required 
            />
            <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message" 
                required 
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Feedback;
