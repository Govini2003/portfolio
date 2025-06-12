import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);

        try {
            const submissionData = { ...formData, access_key: "d226e471-1af6-42b3-94d7-be8b3b498407" };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            const res = await response.json();

            if (res.success) {
                alert(res.message);
                setFormData({ name: "", email: "", message: "" }); // Reset form after success
            } else {
                alert("Error submitting form. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An error occurred. Please check your internet connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Feel free to contact me</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>govinirajapakse2003@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>+94-701711372</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>Galle, Sri Lanka</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
                    
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
                    
                    <label>Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
                    
                    <button type="submit" className="contact-submit" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Contact;
