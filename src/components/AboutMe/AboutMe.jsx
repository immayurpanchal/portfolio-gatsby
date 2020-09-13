import React from "react"
import "./AboutMe.scss"

const AboutMe = ({ title, details }) => {
  return (
    <div className="about-me">
      <div className="section-heading">{title.toUpperCase()}</div>
      {details &&
        details.map(info => (
          <div className="about-detail-wrapper">
            <div className="about-title">{info.title}</div>
            <div className="about-description">{info.description}</div>
            <br />
          </div>
        ))}
    </div>
  )
}

export default AboutMe
