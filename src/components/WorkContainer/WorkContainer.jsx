import React from "react"
import Work from "../Work/Work"

const WorkContainer = props => {
  const { workList } = props
  return (
    <div>
      <div className="section-heading" id="work">
        WORK
      </div>
      {workList.map((work, index) => (
        <Work work={work} isOdd={index % 2 === 1} />
      ))}
    </div>
  )
}

export default WorkContainer
