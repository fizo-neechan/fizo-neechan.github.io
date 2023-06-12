import React from 'react'

import LogoReact from '../assets/logos/atom.png'
import LogoBootstrap from '../assets/logos/bootstrap.png'
import LogoCss from '../assets/logos/css-3.png'
import LogoHtml from '../assets/logos/html.png'
import LogoIllustrator from '../assets/logos/icons8-adobe-illustrator-48.png'
import LogoLightroom from '../assets/logos/icons8-adobe-lightroom-48.png'
import LogoPhotoshop from '../assets/logos/icons8-adobe-photoshop-48.png'
import LogoPremiere from '../assets/logos/icons8-adobe-premiere-pro-48.png'
import LogoDjango from '../assets/logos/icons8-django-48.png'
import LogoDocker from '../assets/logos/icons8-docker-48.png'
import LogoExpress from '../assets/logos/icons8-express-js-250.png'
import LogoFlask from '../assets/logos/icons8-flask-250.png'
import LogoJavascript from '../assets/logos/icons8-javascript-48.png'
import LogoLinux from '../assets/logos/icons8-linux-48.png'
import LogoMongodb from '../assets/logos/icons8-mongodb-48.png'
import LogoPostgres from '../assets/logos/icons8-postgres-48.png'
import LogoPython from '../assets/logos/icons8-python-48.png'
import LogoNodejs from '../assets/logos/nodejs-icon.svg'
import LogoFigma from '../assets/logos/icons8-figma-48.png'



const Skills = () => {

    const skills = [
        {
            name: "Front End",
            logos: [LogoHtml, LogoCss, LogoBootstrap, LogoReact]
        },
        {
            name: "Back End",
            logos: [LogoJavascript, LogoPython, LogoNodejs, LogoDocker, LogoFlask, LogoExpress, LogoDjango]
        },
        {
            name: "Databases",
            logos: [LogoPostgres, LogoMongodb]
        },
        {
            name: "Tools",
            logos: [LogoLinux, LogoIllustrator, LogoPhotoshop, LogoLightroom, LogoPremiere, LogoFigma]
        }
    ]


  return (
    <div className="bevel-shadow" id="skills">
        <div>
            <h2 className="inset">&lt;skills/&gt;</h2>
        </div>

        <div className="skills">
            {skills.map(skill => (
                <div className='container'>
                    <div className='label'>
                        <h3>{skill.name}</h3>
                    </div>
                    <div className='logos'>
                        {skill.logos.map(logo => (<img className='skill-logo' src={logo} alt="logo"/>))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
