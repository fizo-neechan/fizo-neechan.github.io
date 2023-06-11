import React from 'react'
import profilePic from '../assets/profilepic.png'
import ProgressBar from './ProgressBar'


const About = () => {

    const skills = [
        {
            name: "JavaScript",
            percentage: "90%"
        },
        {
            name: "Python",
            percentage: "90%"
        },
        {
            name: "React",
            percentage: "60%"
        },
        {
            name: "TensorFlow",
            percentage: "80%"
        },
        {
            name: "Numpy, Keras",
            percentage: "90%"
        },
        {
            name: "OpenCV",
            percentage: "95%"
        }
    ]
    
    // const skillBars = 
    // console.log(skillBars)
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
        <div className="bevel-shadow" id="skills">
            <div>
                <h3 className="inset">Skills</h3>
            </div>

            <div className="progress">
                {skills.map(function(skill,i){
                    return (
                        <ProgressBar skillname={skill.name} percentage={skill.percentage}/>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default About;
