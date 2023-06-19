import "./MyWorkCardStyle.css"

import React from 'react'
// import { NavLink } from 'react-router-dom'

const MyWorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="img" /> {/*here src used from WorkData.js file as a props. WorkData.js file will act like API.*/ }
        <h2 className="project-title">{props.title}</h2>
        <div className="proj-details">
            <p>{props.text}</p>
            <div className="proj-btns">
                <a href="https://chit-chat-gjue.onrender.com/" target="_blank" rel="noreferrer" className="btn">View</a>
                <a href="https://github.com/ankit2910/mern-chat-app" target="_blank" rel="noreferrer" className="btn">Source</a>
            </div>
        </div>
    </div>
  )
}

export default MyWorkCard
