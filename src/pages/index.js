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
        <meta
          name="description"
          content="Mayur Panchal's portfolio. Checkout my social media links and let's get in touch."
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600&display=swap"
          rel="preload"
          as="font"
          crossorigin
        ></link>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
