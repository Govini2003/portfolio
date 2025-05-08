import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
const About = () => {
  return (
    <div id='about' className='about'>

        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
        <div className="about-para">
        <p>I have worked on several projects using below languages. Through these projects, I have gained hands-on experience in web and mobile development, databases, backend services, and frontend frameworks.</p>
        </div>

        <div className="about-skills">
        <div className="about-skill"><p>JavaScript</p><hr style ={{width:"50%"}}/></div>
        <div className="about-skill"><p>Java</p><hr style ={{width:"65%"}}/></div>
        <div className="about-skill"><p>Python</p><hr style ={{width:"70%"}}/></div>
        <div className="about-skill"><p>HTML & CSS</p><hr style ={{width:"90%"}}/></div>
        <div className="about-skill"><p>PHP</p><hr style ={{width:"70%"}}/></div>
        <div className="about-skill"><p>React JS</p><hr style ={{width:"50%"}}/></div>
        <div className="about-skill"><p>Flutter</p><hr style ={{width:"40%"}}/></div>
        <div className="about-skill"><p>Node JS</p><hr style ={{width:"30%"}}/></div>

        </div>
        </div>
        </div>
        
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HACKATHONS PARTICIPATED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        </div>

    </div>
  )
}

export default About
