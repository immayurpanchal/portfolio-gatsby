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
        <title>Mayur Panchal</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
