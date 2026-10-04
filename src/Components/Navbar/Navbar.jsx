import { useState } from 'react';
import './Navbar.css';

const navigation = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <a className="nav-brand" href="#home" aria-label="Govini Rajapakse home">
                <span>Govini Rajapakse</span>
            </a>
            <button
                className={`nav-menu-toggle${menuOpen ? ' is-open' : ''}`}
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
            </button>
            <nav className={`nav-menu${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
                {navigation.map(({ label, href }) => (
                    <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                        {label}
                    </a>
                ))}
                <a className="nav-contact-link" href="#contact" onClick={() => setMenuOpen(false)}>
                    Let&apos;s talk <span aria-hidden="true">↗</span>
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
