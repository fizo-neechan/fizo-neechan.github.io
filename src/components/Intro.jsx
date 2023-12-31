import React from 'react'
import {BiDownload} from 'react-icons/bi'
import {HiOutlineMailOpen} from 'react-icons/hi'

const Intro = () => {
  return (
    <section id="welcome">
        <div className="section-content">
            <div className="main">
                <h1 className="inset">&lt;fizo-neechan/&gt;</h1>
                <h3>Welcome to my portfolio.</h3>
                <p>Web developer | Student</p>
                <div id='cta'>
                    <a href="#about-me" id="res" download={'../assets/Resume/Muhammad Faizan Haq - CV.pdf'}>
                        <BiDownload className='btn-icon'/>
                        <span>
                            Resume
                        </span>
                    </a>
                    <a href="#contact" id="contact-btn">
                        <HiOutlineMailOpen className='btn-icon'/>
                        <span>
                            Contact
                        </span>
                    </a>
                </div>
            </div>
            <div className="inset" id="hero-tag">
                <h6>&lt;/&gt;</h6>
            </div>
        </div>
    </section>
  )
}

export default Intro;
