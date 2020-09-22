import React from "react"
import AboutMeContainer from "../AboutMeContainer"
import Technologies from "../Technologies"
import WorkContainer from "../WorkContainer/WorkContainer"
import "./Main.scss"

const profilePic =
  "https://ik.imagekit.io/immayurpanchal/Portfolio/aamir-khan_bZ9jJZtvy.jpg"

const workList = [
  {
    title: "Recipe Maker",
    description:
      "Front-End development with Google Sign In support and GraphQL",
    imgUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/Screenshot_2020-09-13_at_10.52.30_AM_AAmYm1_ML.png",
    projectUrl: "https://recipe-maker.netlify.app/",
  },
  {
    title: "Natours",
    description: "Front-End Development, Back-End Development ",
    imgUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/Screenshot_2020-09-13_at_10.54.58_AM_lBoTqGreh.png",
    projectUrl: "https://frontend-natours.netlify.app/",
  },
  {
    title: "Viu Browser",
    description:
      "Performance Enhancement, Front-End development using React.js ",
    imgUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/Screenshot_2020-09-13_at_11.24.08_AM_pwBS_QdE6.png",
    projectUrl: "https://viu.com",
  },
]

const technologies = [
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/html5_WJr9bD_iv.svg",
    title: "HTML5",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/css-3_RdJJBQ6rQV6.svg",
    title: "CSS3",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/react-2_UjTufr1hg5T.svg",
    title: "React",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/redux_3nE_4qozrJv.svg",
    title: "Redux",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/sass-1_NtLGxy_ywxd.svg",
    title: "SASS",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/gatsby_3AvWwkJAxR.svg",
    title: "Gatsby",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/bootstrap-icon_ufk2ZEiVzR.svg",
    title: "Bootstrap",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/graphql_hixDO1mIjx.svg",
    title: "GraphQL",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/docker_iqTdL38ZQFD.svg",
    title: "Docker",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/python-5_apoo-Lw7b0.svg",
    title: "Python",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/apollo-graphql-compact_xCceYyYnm-.svg",
    title: "Apollo GraphQL",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/jenkins-1_QKU3cuWJHd.svg",
    title: "Jenkins",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/javascript_fjn8ELUtKj.svg",
    title: "Javascript",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/kubernets_8C22b76pt_.svg",
    title: "Kubernetes",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/git-icon_1ulIkDDswI.svg",
    title: "Git",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/next-js_a3uYFzALGn.svg",
    title: "Next.js",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/mongodb-icon_pmP10krzHN.svg",
    title: "MongoDB",
  },
  {
    imageUrl:
      "https://ik.imagekit.io/immayurpanchal/Portfolio/heroku_1SD9t4i-_N.svg",
    title: "Heroku",
  },
]

const aboutMe = [
  {
    title: "main skills",
    details: [
      {
        title: "Web and user interface design",
        description: "Websites, web experiences, ...",
      },
      {
        title: "Front-End Development",
        description: "Responsive websites, Performance enhancement, ...",
      },
      {
        title: "Back-End Development",
        description: "Back-End Development",
      },
    ],
  },
  {
    title: "education",
    details: [
      {
        title:
          "Dhirubhai Ambani Institute of Information and Communication Technology",
        description: "M. Sc. (IT)",
      },
      {
        title: "INSB BCA College",
        description: "BCA",
      },
    ],
  },
  {
    title: "values",
    details: [
      {
        title: "Good design is good business",
        description: "It’s not only about beauty, it has to work.",
      },
      {
        title: "Never not learning",
        description: "There’s always something new to learn.",
      },
      {
        title: "Get to the root of the problem",
        description: "To come up with the best solution.",
      },
      {
        title: "Keep it simple",
        description: "Why make it complicated?",
      },
    ],
  },
  {
    title: "use tool",
    details: [
      {
        title: "",
        description:
          "VSCode, Notion, Figma, Sketch, iTerm 2, Slack, Jira, Trello, GSuite, Zeplin",
      },
    ],
  },
]

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
        <WorkContainer workList={workList} />
        <Technologies technologies={technologies} />
        <AboutMeContainer aboutMe={aboutMe} />
      </article>
    </main>
  )
}

export default Main
