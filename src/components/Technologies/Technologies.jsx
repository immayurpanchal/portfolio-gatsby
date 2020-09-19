import React from "react"
import "./Technologies.scss"
import Technology from "../Technology"

const Technologies = ({ technologies }) => {
  return (
    <div style={{ marginTop: "70px" }}>
      <div className="section-heading">TECHNOLOGIES</div>
      <div className="technology-wrapper">
        {technologies.map(({ title, imageUrl }) => (
          <Technology title={title} imageUrl={imageUrl} key={title} />
        ))}
      </div>
    </div>
  )
}

export default Technologies
