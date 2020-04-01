import React from 'react';
import "./home-container.css"

let containers = [
  {
    title: "Home",
    class: "home-container",
    id: "home"
  },
  {
    title: "About Me",
    class: "about-container",
    id: "about-me"
  },
  {
    title: "Portfolio",
    class: "portfolio-container",
    id: "portfolio"
  },
  {
    title: "Experience",
    class: "work-container",
    id: "work-experience"
  },
  {
    title: "Contact",
    class: "contact-container",
    id: "contact"
  },
  {
    title: "Blog",
    class: "blog-container",
    id: "blog"
  },
]

const Home = () => {
  return (
    <div className="containers">
      {containers.map((item, index) => {
        return (
          <div className={item.class} id={item.id} key={index}>
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default Home;
