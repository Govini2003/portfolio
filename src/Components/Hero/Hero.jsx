import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
// Import your resume file
import resume from '../../assets/cv_Govini Rajapakse.pdf'

const Hero = () => {
  const handleResumeClick = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'cv_Govini Rajapakse.pdf'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="profile"/>
        <h1><span>I'm Govini Rajapakse,</span> from Sri Lanka</h1>
        <p>I am a Software Engineering undergraduate at the University of Westminster. I am from Galle. I studied at Sanghamitta College, Galle</p>


        <div className="hero-action">
            <div className='hero-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect With Me
                </AnchorLink>
            </div>
            <div className="hero-resume" onClick={handleResumeClick}>
                My resume
            </div>
        </div>
    </div>
  )
}

export default Hero
