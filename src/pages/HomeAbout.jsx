
import React from "react";
import "../public/css/Home.css";
import homeLogo from "./home-main.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter';
import { FaHandPointRight } from "react-icons/fa";


const HomeAbout = () => {
  return (
    <div className="home-about-container">

      {/* Intro Section */}
      <section className="info-section">
        <div className="intro-text">
          <p>
            Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
          </p>

          <p>
            I'M
            <strong className="main-name"> HARSH AGRAWAL</strong>
          </p>

          <div style={{ paddingTop: 20, textAlign: "left" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#64ffda" }}>
              A{' '}
              <span style={{ color: "#fff", fontWeight: 'bold' }}>
                <Typewriter
                  words={['Software Developer', 'Blockchain Developer', 'Full Stack Developer']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
        </div>
        <div className="intro-image">
          <img src={homeLogo} alt="Developer Illustration" />
        </div>
      </section>

      {/* About Me Section */}
      <section className="info-section">
        <div className="info-image">
          <img src={homeLogo} alt="Developer Illustration" />
        </div>
        <div className="about-text">

          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>

          <p className="home-about-body">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />
            I am fluent in classics like
            <i>
              <b className="purple"> C++, Javascript and MERN Stack. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products </b> and
              also interested in{" "}
              <b className="purple">
                Algorithms
              </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple"> {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
              &nbsp; like
            <i>
              <b className="purple"> React.js</b>
            </i>
            <br />
            <br />
            Hi Everyone, I am <span className="purple">Arvind Sharma </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science from NIT Bhopal (2022-2026)
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <ul>
              <li className="about-activity">
                <FaHandPointRight /> Writing Blogs on Medium 
              </li>
              <li className="about-activity">
                <FaHandPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <FaHandPointRight /> Travelling
              </li>
            </ul>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h1>FIND ME ON</h1>
        <p>
          Get in <span className="purple">touch </span>with me
        </p>
        <div className="contact-icons">
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  )
};

export default HomeAbout;