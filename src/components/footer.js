import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-side">
        <h2>left side</h2>
        <p>contact details?</p>
      </div>
      <div className="center">
        <h2>center</h2>
        <p>Logo maybe? Icon?</p>
      </div>
      <div className="right-side">
        <h2>right side</h2>
        <p>social medias?</p>
        <p>check out my repo <a href="https://github.com/ashvin-moro/personal-website">here</a></p>
      </div>
    </div>
  )
}

export default Footer