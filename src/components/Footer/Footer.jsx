import React from "react"
import "./Footer.scss"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const {
    allPortfolioJson: { edges },
  } = useStaticQuery(graphql`
    {
      allPortfolioJson {
        edges {
          node {
            id
            socialLinks {
              profileUrl
              imageUrl
              alt
            }
          }
        }
      }
    }
  `)

  const socialIcons = edges.filter(edge => edge.node.socialLinks)[0].node
    .socialLinks

  return (
    <footer className="footer" id="contact">
      <hr />
      <div className="footer-detail">
        <span className="copyright">{`© Copyright ${new Date().getFullYear()} | Mayur Panchal`}</span>
        <div className="social-icons">
          {socialIcons &&
            socialIcons.map(icon => (
              <a
                href={icon.profileUrl}
                rel="noreferrer"
                target="_blank"
                key={icon.alt}
              >
                <div className="icon">
                  <img src={icon.imageUrl} alt={icon.alt} />
                </div>
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
