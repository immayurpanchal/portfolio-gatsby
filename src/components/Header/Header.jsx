import React, { useState } from "react"
import sun from "../img/sun.svg"
import moon from "../img/moon.svg"
import "./Header.scss"

const Header = () => {
  const [isDark, setDark] = useState(false)

  return (
    <header className="header">
      <span className="title">Mayur Panchal</span>
      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <img
          src={isDark ? sun : moon}
          alt="theme"
          onClick={() => setDark(!isDark)}
          className="theme"
        />
      </nav>
    </header>
  )
}

export default Header
