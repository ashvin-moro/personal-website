import React from "react"
import "./footer.css"
import facebookIcon from "../assets/facebook-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"
import resumeIcon from "../assets/resume-icon.png"
import githubIcon from "../assets/github-icon.png"
import signature from "../assets/signature.png"
import resume from "../assets/Resume.pdf"

let leftSide = [
  {
    href: resume,
    src: resumeIcon,
    class: "resume-icon"
  },
  {
    href: "https://www.linkedin.com/in/ashvin-moro-00b57a18a/",
    src: linkedinIcon,
    class: "linkedin-icon"
  },
  {
    href: "https://github.com/ashvin-moro",
    src: githubIcon,
    class: "github-icon"
  },
  {
    href: "https://www.facebook.com/ashvin.moro.1",
    src: facebookIcon,
    class: "facebook-icon"
  },
  {
    href: "https://www.instagram.com/ashvinmoro/",
    src: instagramIcon,
    class: "instagram-icon"
  }
]

let center = {
  signaturesrc: signature,
  repotext1: "this website was built in React as a side project,",
  repotext2: "check out the repository ",
  href: "https://github.com/ashvin-moro/personal-website",
  imgclass: "signature-img"
}

let rightSide = [
  {
    content: "ashvinmoro.com",
  },
  {
    content: "Hamilton, ON",
  },
  {
    content: "(365) 888-2001",
  },
  {
    content: "moroashvin@gmail.com",
  }
]

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-side">
        {rightSide.map((obj, index) => {
          return (
            <div key={index}>
              <p>{obj.content}</p>
            </div>
          )
        })}
      </div>
      <div className="center">
        <img src={signature} alt="personal signature" className={center.imgclass}></img>
        <p>{center.repotext1}</p>
        <p>{center.repotext2}<a href={center.href} target="_blank" rel="noopener noreferrer">here!</a></p>
      </div>
      <div className="right-side">
        {leftSide.map((obj, index) => {
          return (
            <div className={obj.class} key={index}>
              <a href={obj.href} target="_blank" rel="noopener noreferrer">
                <img src={obj.src} alt={obj.alt}></img>
              </a>
            </div>)
        })}
        <p>please reach out to me for references!</p>
      </div>
    </div>
  )
}

export default Footer