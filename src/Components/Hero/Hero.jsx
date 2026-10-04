import './Hero.css';
import profileImg from '../../assets/ProfileImg.jpeg';
import resume from '../../assets/cv_Govini Rajapakse.pdf';

const Hero = () => (
    <section id="home" className="hero section-shell">
        <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> Software engineer in the making</p>
            <h1>
                Building thoughtful
                <span> digital experiences.</span>
            </h1>
            <p className="hero-intro">
                I&apos;m Govini Rajapakse, a final-year student at IIT and a software engineer
                who enjoys turning ideas into useful, well-crafted products.
            </p>
            <div className="hero-meta">
                <span>Based in Galle, Sri Lanka</span>
                <span className="meta-divider" />
                <span>Open to opportunities</span>
            </div>
            <div className="hero-action">
                <a className="button button-primary" href="#contact">
                    Get in touch <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href={resume} download="Govini-Rajapakse-CV.pdf">
                    Download CV <span aria-hidden="true">↓</span>
                </a>
            </div>
        </div>
        <div className="hero-visual">
            <div className="hero-image-frame">
                <img src={profileImg} alt="Govini Rajapakse — software engineering undergraduate and full-stack developer" />
            </div>
        </div>
    </section>
);

export default Hero;
