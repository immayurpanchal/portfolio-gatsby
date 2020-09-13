import React from "react"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <span className="title">Mayur Panchal</span>
      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
