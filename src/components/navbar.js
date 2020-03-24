import React, { useState } from "react"
import "./navbar.css"
import SmoothScroll from "smooth-scroll"
import personalLogo from "../assets/personal-logo.png"

let sections = [
  {
    title: "About Me",
    href: "#about-me",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Experience",
    href: "#work-experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Blog",
    href: "#blog",
  },
]

const NavBar = () => {
  const [header, setHeader] = useState("navigation")
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600,
    easing: 'easeInOutCubic'
  });

  window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY !== 0) {
      setHeader("navigation-down")
    }
    else {
      setHeader("navigation")
    }
  })

  return (
    <div className={header}>
      <div className="logo-container">
        <a href="#home">
          <img src={personalLogo} alt="personal logo"></img>
        </a>
      </div>
      <div className="links-container">
        {sections.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.href}>{item.title} <span id="arrow">></span>
              </a>
            </div>)
        })}
      </div>
    </div>
  )
}

export default NavBar