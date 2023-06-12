import React from 'react'
import profilePic from '../assets/profilepic.png'
// import ProgressBar from './ProgressBar'
import Skills from './Skills'


const About = () => {

    return (
    <section id="about-me">
        <div className="section-content">
            <div className='about-me-content'>
                <div>
                    <h2 className="inset">&lt;about-me/&gt;</h2>
                </div>
                <p>
                    Passionate computer science undergraduate with a focus on computer vision and machine learning. Skilled in Python, OpenCV, TensorFlow, Torch, and Yolo. Experienced in developing AI projects, including tic-tac-toe playing AI and unsupervised learning models. Currently working on object detection and drone control for the SUAS competition. Also involved in Pakistan stock market analysis and web development.
                </p>
                <p>
                    Dedicated to continuous learning and leveraging technology to solve real-world problems. Seeking opportunities to contribute to innovative projects and further develop my skills in the field. Let's create something amazing together!
                </p>
            </div>
            <div id="profilepic">
                <img src={profilePic} alt="profile"/>
            </div>
        </div>
        <Skills/>
    </section>
  )
}

export default About;
