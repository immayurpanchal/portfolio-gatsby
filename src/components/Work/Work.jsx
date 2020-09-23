import React from "react"
import "./Work.scss"

const Work = ({ work, isOdd }) => {
  const { title, description, imgUrl, projectUrl } = work
  return (
    <div className="work" style={isOdd ? { flexDirection: "row-reverse" } : {}}>
      <div className="work-info-wrapper">
        <div className="work-title">{title}</div>
        <div className="work-description">{description}</div>
      </div>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        <div className="work-image-container">
          <img className="work-image" src={imgUrl} alt="test" />
        </div>
      </a>
    </div>
  )
}

export default Work
