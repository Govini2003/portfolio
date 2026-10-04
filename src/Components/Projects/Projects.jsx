import './Projects.css';
import projects from '../../assets/services_data';

const Projects = () => (
    <section id="projects" className="projects">
        <div className="section-shell">
            <div className="projects-heading">
                <div className="section-heading">
                    <p className="section-kicker">Selected work</p>
                    <h2>Projects I&apos;ve <span>worked on.</span></h2>
                </div>
                <p className="projects-summary">
                    A selection of experiments, coursework, and products built with curiosity and care.
                </p>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>
                        <div className="project-card-top">
                            <span className="project-number">{project.number}</span>
                            {project.url && <span className="project-external" aria-label="External project">↗</span>}
                        </div>
                        <h3>{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-technologies" aria-label="Technologies">
                            {project.technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>
                        {project.url && (
                            <a
                                className="project-link"
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View project <span aria-hidden="true">↗</span>
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
