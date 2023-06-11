import React from 'react'
import ProjectCard from './ProjectCard'

import {LuFlaskConical} from 'react-icons/lu'
import {SiTensorflow, SiCss3, SiNumpy, SiPandas, SiJavascript, SiPython, SiYolo, SiDrone, SiSfml} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {FaNodeJs, FaReact} from 'react-icons/fa'
import {TbBrandCpp} from 'react-icons/tb'

import investing from '../assets/investing.svg'
import portfolio from '../assets/profile-circle-svgrepo-com.svg'
import tictactoe from '../assets/tictactoe-svgrepo-com.svg'
import gate from '../assets/gate-svgrepo-com.svg'
import drone from '../assets/drone-quadcopter-svgrepo-com.svg'
import clusters from '../assets/network.png'



const Projects = () => {
    const projects = [
        {
            displayImg: investing,
            title: "Stock Market Predictor",
            subtitle: "SIMP Website",
            githubLink: "github.com/fizo-neechan",
            tech: [
                {
                    icon: <LuFlaskConical  className="btn-icon"/>,
                    label: 'Flask'
                },
                {
                    icon: <SiTensorflow  className="btn-icon"/>,
                    label: 'TensorFlow'
                },
                {
                    icon: <AiFillHtml5  className="btn-icon"/>,
                    label: 'HTML'
                },
                {
                    icon: <SiCss3  className="btn-icon"/>,
                    label: 'CSS'
                }
            ]
        },
        {
            displayImg: portfolio,
            title: "Portfolio",
            subtitle: "React Website",
            githubLink: "github.com/fizo-neechan",
            tech: [
                {
                    icon: <FaReact  className="btn-icon"/>,
                    label: 'React'
                },
                {
                    icon: <AiFillHtml5  className="btn-icon"/>,
                    label: 'HTML'
                },
                {
                    icon: <SiCss3  className="btn-icon"/>,
                    label: 'CSS'
                }
            ]
        },
        {
            displayImg: drone,
            title: "Aerial Flight Detection System",
            subtitle: "Custom object detection model",
            githubLink: "github.com/fizo-neechan",
            tech: [
                {
                    icon: <SiPython  className="btn-icon"/>,
                    label: 'Python'
                },
                {
                    icon: <SiYolo  className="btn-icon"/>,
                    label: 'Yolo-v7'
                },
                {
                    icon: <SiDrone  className="btn-icon"/>,
                    label: 'Dronekit'
                }
            ]
        },
        {
            displayImg: gate,
            title: "Automated Gate Entry/Exit System",
            subtitle: "Single Page web-application with barcode reader",
            githubLink: "github.com/fizo-neechan",
            tech: [
                {
                    icon: <FaNodeJs  className="btn-icon"/>,
                    label: 'Node.js'
                },
                {
                    icon: <SiJavascript  className="btn-icon"/>,
                    label: 'JavaScript'
                },
                {
                    icon: <AiFillHtml5  className="btn-icon"/>,
                    label: 'HTML'
                },
                {
                    icon: <SiCss3  className="btn-icon"/>,
                    label: 'CSS'
                }
            ]
        },

        {
            displayImg: tictactoe,
            title: "Tic-Tac-Toe playing AI",
            subtitle: "ANN developed from scratch",
            githubLink: "github.com/fizo-neechan",
            tech: [
                {
                    icon: <SiSfml className="btn-icon"/>,
                    label: 'SFML'
                },
                {
                    icon: <TbBrandCpp  className="btn-icon"/>,
                    label: 'C++'
                }
            ]
        },
        {
            displayImg: clusters,
            title: "Visualization of datasets and clusters",
            subtitle: "Scratch implementation",
            githubLink: "github.com/fizo-neechan",
            tech: [
                {
                    icon: <SiPython className="btn-icon"/>,
                    label: 'Python'
                },
                {
                    icon: <SiNumpy  className="btn-icon"/>,
                    label: 'Numpy'
                },
                {
                    icon: <SiPandas  className="btn-icon"/>,
                    label: 'Pandas'
                }
            ]
        },
        
    ]

  return (
    <section id="projects">
        <div className="section-content">
            <div>
                <div><h2 className="inset">&lt;projects/&gt;</h2></div>
                <div className="projects">
                    {projects.map(project => (
                        <ProjectCard details={project}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
