import React from "react"
import Header from "../components/Header"
import "./index.scss"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
export default function Home() {
  return (
    <div>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/favicon-16x16.png"
        />
        <link rel="manifest" href="static/site.webmanifest" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
