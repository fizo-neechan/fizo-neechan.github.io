import React from 'react'
import {BsGithub} from 'react-icons/bs'

const ProjectCard = (props) => {
  return (
    <div className="card bevel-shadow">
        <div className="card-content">
            <div className="card-img">
                <img src={props.details.displayImg} alt='Project'/>
            </div>

            <div className="card-details">
                <div className="card-heading">
                    <h3>{props.details.title}</h3>
                </div>
                <div className="card-subhead">
                    <h4>{props.details.subtitle}</h4>
                </div>
                <div className="card-links">
                    <a className='github'  href={props.details.githubLink}>
                        <BsGithub className='btn-icon'/>
                        <span>Github</span>
                    </a>
                </div>
                <div className="card-tech">
                    {props.details.tech.map(i => (
                        <a href='#'>
                            {i.icon}
                            <span>{i.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
