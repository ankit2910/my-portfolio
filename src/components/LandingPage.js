import "./LandingPage.css"

import React from 'react'

import IntroImg from "../images/intro_bg.jfif"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M A Full Stack Developer</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
