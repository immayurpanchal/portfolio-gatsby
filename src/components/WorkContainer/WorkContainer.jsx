import React from "react"
import Work from "../Work/Work"
import { graphql, useStaticQuery } from "gatsby"

const WorkContainer = () => {
  const {
    allPortfolioJson: { edges },
  } = useStaticQuery(graphql`
    {
      allPortfolioJson {
        edges {
          node {
            id
            workList {
              title
              description
              imgUrl
              projectUrl
            }
          }
        }
      }
    }
  `)

  const workList = edges.filter(edge => edge.node.workList)[0].node.workList

  return (
    <div>
      <div className="section-heading" id="work">
        WORK
      </div>
      {workList &&
        workList.map((work, index) => (
          <Work work={work} isOdd={index % 2 === 1} key={index} />
        ))}
    </div>
  )
}

export default WorkContainer
