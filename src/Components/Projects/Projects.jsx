import React, { useState } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    //Extract technologies used from the description
    const extractTechnologies = (desc) => {
        const techIndex = desc.indexOf("Technologies used:");
        if (techIndex !== -1) {
            return desc.substring(techIndex);
        }
        return "Technologies used: Not specified";
    };

    const handleProjectClick = (service) => {
        if (service.s_name === "Cool Cal by Govini") {
            //Redirect to the hosted site for Cool Cal
            window.open("https://govini2003.github.io/Calculator/coolcal.html", "_blank");
        } else {
            //Show modal with full description for other projects
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
                {Services_Data.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className='services-format'
                            onClick={() => handleProjectClick(service)}
                        >
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{extractTechnologies(service.s_desc)}</p> {/* Show only technologies */}
                            <div className='services-readmore'>
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal for showing full description */}
            {showModal && selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.s_name}</h2>
                        <p>{selectedProject.s_desc}</p> {/* Show full description */}
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
