import React from "react"
import AboutMeContainer from "../AboutMeContainer"
import Technologies from "../Technologies"
import WorkContainer from "../WorkContainer/WorkContainer"
import "./Main.scss"

const profilePic =
  "https://ik.imagekit.io/immayurpanchal/Portfolio/template_share_sayhihalf_avatoon_background_default_viIklWeA9.png"

const Main = () => {
  return (
    <main className="main">
      <article>
        <div className="short-info">
          <h2>
            Hi{" "}
            <span role="img" aria-label="hello">
              ✋
            </span>
            , I’m Mayur, a Full-stack developer based in India.
          </h2>
          <p>
            I have been developing web application for{" "}
            <b>
              {Number(
                new Date().getFullYear() - 2019 + new Date().getMonth() / 12
              ).toFixed(1)}
            </b>{" "}
            years. I also love designing.
            <br />
            <br />
            You can see the photos I took on my Instagram profile. Check out my
            projects on Github profile. I’m much active on Twitter.
          </p>
        </div>
        <div className="profile-pic-container">
          <img src={profilePic} alt="profile-pic" />
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
