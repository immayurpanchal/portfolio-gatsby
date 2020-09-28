import React from "react"
import AboutMeContainer from "../AboutMeContainer"
import Technologies from "../Technologies"
import WorkContainer from "../WorkContainer/WorkContainer"
import "./Main.scss"
import { graphql, useStaticQuery } from "gatsby"

const Main = () => {
  const {
    allPortfolioJson: { edges },
  } = useStaticQuery(graphql`
    {
      allPortfolioJson {
        edges {
          node {
            id
            personal {
              profilePic
              firstName
              lastName
              designation
              firstJobYear
              paragraph1
              paragraph2
              country
            }
          }
        }
      }
    }
  `)

  const personal = edges.filter(edge => edge.node.personal)[0].node.personal

  return (
    <main className="main">
      <article>
        <div className="short-info">
          <h2>
            Hi{" "}
            <span role="img" aria-label="hello">
              ✋
            </span>
            {`, I’m ${personal.firstName}, a ${personal.designation} based in ${personal.country}.`}
          </h2>
          <p>
            {personal.paragraph1}
            <b>
              {Number(
                new Date().getFullYear() -
                  parseInt(personal.firstJobYear) +
                  new Date().getMonth() / 12
              ).toFixed(1)}
            </b>{" "}
            years.
            <br />
            <br />
            {personal.paragraph2}
          </p>
        </div>
        <div className="profile-pic-container">
          <img src={personal.profilePic} alt="profile-pic" />
        </div>
      </article>
      <article className="clearfix" style={{ paddingTop: "100px" }}>
        <WorkContainer />
        <Technologies />
        <AboutMeContainer />
      </article>
    </main>
  )
}

export default Main
