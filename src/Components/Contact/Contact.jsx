import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: 'd226e471-1af6-42b3-94d7-be8b3b498407',
                }),
            });
            const result = await response.json();

            if (result.success) {
                alert(result.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Your message could not be sent. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('An error occurred. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact section-shell">
            <div className="contact-copy">
                <p className="section-kicker">Have a project in mind?</p>
                <h2>Let&apos;s make something <span>meaningful.</span></h2>
                <p className="contact-intro">
                    I&apos;m always happy to talk about ideas, opportunities, or interesting challenges.
                    Send a note and I&apos;ll get back to you.
                </p>
                <a className="contact-email" href="mailto:govinirajapakse2003@gmail.com">
                    govinirajapakse2003@gmail.com <span aria-hidden="true">↗</span>
                </a>
                <p className="contact-location">Galle, Sri Lanka <span>·</span> Available worldwide</p>
            </div>
            <form onSubmit={onSubmit} className="contact-form">
                <div className="form-field">
                    <label htmlFor="contact-name">Your name</label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="contact-email">Email address</label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="jane@example.com"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Tell me a little about what you have in mind..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="button button-primary contact-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send message'}
                    <span aria-hidden="true">↗</span>
                </button>
            </form>
        </section>
    );
};

export default Contact;
