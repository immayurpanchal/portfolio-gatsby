import React from "react"
import "./Footer.scss"

const socialIcons = [
  {
    profileUrl: "https://twitter.com/immayurpanchal",
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/twitter-seeklogo.com_n76COVB9n6.svg",
    alt: "Twitter",
  },
  {
    profileUrl: "https://facebook.com/immayurpanchal",
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/facebook-2_GorFqYO6yy.svg",
    alt: "Facebook",
  },
  {
    profileUrl: "https://instagram.com/immayurpanchal",
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/instagram-2016_Yx6Zx-gv_s.svg",
    alt: "Instagram",
  },
  {
    profileUrl: "https://github.com/immayurpanchal",
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/github-1_ma2qvGuCN.svg",
    alt: "Github",
  },
]

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <hr />
      <div className="footer-detail">
        <span className="copyright">© Copyright 2020 | Mayur Panchal</span>
        <div className="social-icons">
          {socialIcons.map(icon => (
            <a href={icon.profileUrl}>
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
