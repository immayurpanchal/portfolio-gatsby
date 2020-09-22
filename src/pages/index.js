import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import "./index.scss"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Mayur Panchal</title>
        <html lang="en"></html>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
