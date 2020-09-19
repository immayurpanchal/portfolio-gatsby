import React, { useState, useEffect } from "react"
import sun from "./img/sun.svg"
import moon from "./img/moon.svg"
import "./Header.scss"

const Header = () => {
  const [isDark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!isDark)
  }

  useEffect(() => {
    if (isDark) {
      document.querySelector("html").classList.remove("light")
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
      document.querySelector("html").classList.add("light")
    }
  }, [isDark])

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
          onClick={toggleTheme}
          className="theme"
        />
      </nav>
    </header>
  )
}

export default Header
