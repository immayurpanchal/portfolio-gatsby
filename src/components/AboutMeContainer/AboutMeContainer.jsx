import React from "react"
import AboutMe from "../AboutMe"
import "./AboutMeContainer.scss"

const AboutMeContainer = ({ aboutMe }) => {
  return (
    <div className="about-me-container" id="about">
      {aboutMe.map(({ title, details }) => (
        <AboutMe title={title} details={details} />
      ))}
    </div>
  )
}

export default AboutMeContainer
