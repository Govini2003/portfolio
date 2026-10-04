import './About.css';

const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Java',
    'Spring Boot',
    'Python',
    'Flutter',
    'MongoDB',
    'SQL',
];

const About = () => (
    <section id="about" className="about section-shell">
        <div className="section-heading">
            <p className="section-kicker">A little about me</p>
            <h2>Curious mind. <span>Practical builder.</span></h2>
        </div>
        <div className="about-layout">
            <div className="about-story">
                <p className="about-lead">
                    I&apos;m a final-year student at IIT with a growing passion for software
                    engineering and building products that make everyday tasks simpler.
                </p>
                <p className="about-description">
                    I enjoy working across the stack, learning new tools, and collaborating
                    with people who care about making thoughtful, reliable software.
                </p>
                <div className="experience-card">
                    <span className="experience-mark" aria-hidden="true">✳</span>
                    <div>
                        <p className="experience-label">Experience</p>
                        <h3>Software Engineer Intern</h3>
                        <p className="experience-detail">Alphageekx <span>·</span> Internship</p>
                    </div>
                    <span className="experience-arrow" aria-hidden="true">↗</span>
                </div>
            </div>
            <div className="about-toolkit">
                <div className="toolkit-heading">
                    <h3>Tools I work with</h3>
                    <span>Always learning</span>
                </div>
                <div className="skill-list">
                    {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
                </div>
                <div className="about-note">
                    <span className="note-line" />
                    <p>From a first sketch to a polished release, I like being part of the whole process.</p>
                </div>
            </div>
        </div>
    </section>
);

export default About;
