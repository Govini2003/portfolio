import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        if (email) {
            // Here you can add the logic to send the email to your server or API
            console.log(`Subscribed with email: ${email}`);
            alert(`Thank you for subscribing with ${email}`);
            setEmail(''); // Clear the input after subscription
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>I am a second year Software Engineering student at University of Westminster.</p>
                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input 
                            type="email" 
                            placeholder='Enter your email' 
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Govini Rajapakse. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;