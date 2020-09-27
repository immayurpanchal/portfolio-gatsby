import React from "react"
import "./Technologies.scss"
import Technology from "../Technology"
import { useStaticQuery } from "gatsby"

const Technologies = () => {
  const {
    allPortfolioJson: { edges },
  } = useStaticQuery(graphql`
    {
      allPortfolioJson {
        edges {
          node {
            id
            technologies {
              imageUrl
              title
            }
          }
        }
      }
    }
  `)

  const [technologies] = edges
    .map(node => node.node.technologies)
    .filter(item => item !== null)

  return (
    <div style={{ marginTop: "70px" }}>
      <div className="section-heading">TECHNOLOGIES</div>
      <div className="technology-wrapper">
        {technologies &&
          technologies.map(({ title, imageUrl }) => (
            <Technology title={title} imageUrl={imageUrl} key={title} />
          ))}
      </div>
    </div>
  )
}

export default Technologies
