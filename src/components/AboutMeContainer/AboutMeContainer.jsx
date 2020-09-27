import React from "react"
import AboutMe from "../AboutMe"
import "./AboutMeContainer.scss"
import { useStaticQuery, graphql } from "gatsby"

const AboutMeContainer = () => {
  const {
    portfolioJson: { aboutMe },
  } = useStaticQuery(graphql`
    {
      portfolioJson {
        aboutMe {
          heading
          details {
            title
            description
          }
        }
      }
    }
  `)

  return (
    <div className="about-me-container" id="about">
      {aboutMe &&
        aboutMe.map(({ heading, details }) => (
          <AboutMe heading={heading} details={details} key={heading} />
        ))}
    </div>
  )
}

export default AboutMeContainer
