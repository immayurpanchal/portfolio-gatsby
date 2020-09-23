import React from "react"
import "./Technology.scss"

const Technology = ({ title, imageUrl }) => {
  return (
    <div className="technology">
      <img loading="lazy" src={imageUrl} alt={title || ""} />
      <span>{title}</span>
    </div>
  )
}

export default Technology
