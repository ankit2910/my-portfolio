import "./FooterStyle.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
// import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                <div>
                    <p>Bankey Bazar</p>
                    <p>Gaya, Bihar</p>
                    <p>India, 824217</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                +91-8102910716
                </h4>                
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                an.kit810716@gmail.com
                </h4>                
            </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>Hello!! This is Ankit Kumar.</p>
          <p>Lets connect with me.</p>
          <div className="social">
            <a href="https://www.instagram.com/ankit_ak42/" target="_blank" rel="noreferrer"><FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
            <a href="https://www.facebook.com/profile.php?id=100056043160664" target="_blank" rel="noreferrer"><FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
            <a href="https://www.linkedin.com/in/ankit-kumar-a850a8200/" target="_blank" rel="noreferrer"><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
            <a href="https://github.com/ankit2910" target="_blank" rel="noreferrer"><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
