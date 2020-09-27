import React from "react"
import "./AboutMe.scss"

const AboutMe = ({ heading, details }) => {
  return (
    <div className="about-me">
      <div className="section-heading">{heading.toUpperCase()}</div>
      {details &&
        details.map((info, index) => (
          <div className="about-detail-wrapper" key={index}>
            <div className="about-title">{info.title}</div>
            <div className="about-description">{info.description}</div>
          </div>
        ))}
    </div>
  )
}

export default AboutMe
