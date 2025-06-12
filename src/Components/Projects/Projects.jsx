import React, { useState } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Extract technologies used from the description
    const extractTechnologies = (desc) => {
        const techIndex = desc.indexOf("Technologies used:");
        if (techIndex !== -1) {
            return desc.substring(techIndex);
        }
        return "Technologies used: Not specified";
    };

    const handleProjectClick = (service) => {
        if (service.s_name === "Cool Cal by Govini") {
            // Redirect to the hosted site for Cool Cal
            window.open("https://govini2003.github.io/Calculator/coolcal.html", "_blank");
        } else if (service.s_name === "CV By Maya") {
            window.open("https://govini2003.github.io/cv-builder/", "_blank");
        } else {
            // Show modal with full description for other projects
            setSelectedProject(service);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <div id='services' className='services'>
            <div className='services-title'>
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="services-container">
                {Services_Data.map((service, index) => (
                    <div
                        key={index}
                        className='services-format'
                        onClick={() => handleProjectClick(service)}
                    >
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{extractTechnologies(service.s_desc)}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.s_name}</h2>
                        <p>{selectedProject.s_desc}</p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '10px',
                                marginTop: '20px'
                            }}
                        >
                            {selectedProject.s_name === "Vetaa.lk" && (
                                <button
                                    style={{
                                        backgroundColor: '#ff00ff',
                                        color: '#fff',
                                        padding: '8px 16px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        border: 'none'
                                    }}
                                    onClick={() => window.open("https://vetaa.lk", "_blank")}
                                >
                                    Marketing Site
                                </button>
                            )}
                            <button
                                onClick={closeModal}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: 'none'
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
