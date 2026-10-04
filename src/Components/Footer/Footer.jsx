import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner section-shell">
            <a className="footer-brand" href="#home">Govini Rajapakse<span>.</span></a>
            <p>Software engineer in the making · Galle, Sri Lanka</p>
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Govini Rajapakse</span>
                <a href="https://github.com/Govini2003" target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href="mailto:govinirajapakse2003@gmail.com">Email <span aria-hidden="true">↗</span></a>
            </div>
        </div>
    </footer>
);

export default Footer;
