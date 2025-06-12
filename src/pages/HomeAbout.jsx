import React, { useEffect } from "react";
import "../public/css/Home.css";
import svg1 from "../Assets/homeFirstSvg.svg";
import svg2 from "../Assets/homeSecondSvg.svg";
import { FaHandPointRight } from "react-icons/fa";
import AutoWriter from "../components/Home/AutoType";
import SocialIcon from "../components/Home/ContactIconContainer";


const HomeAbout = () => {

  useEffect(() => {
    document.title = 'Harsh Agrawal | Portfolio';
  }, []);

  return (
    <div className="home-about-container">

      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-text">
          <p>
            Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
          </p>

          <p>
            I'M
            <strong className="main-text"> HARSH AGRAWAL</strong>
          </p>

          <div className="writer" style={{ paddingTop: 20, textAlign: "left" }}>
            <h2 style={{ fontWeight: "inherit" }}>
              A Software Developer
              <br />
              You can talk me about{' '}
              <AutoWriter />
            </h2>
          </div>
        </div>
        <div className="intro-image" style={{
          display:"flex",
          width:"50%",
          padding:"3%",
          }} >
          <div className="intro-innerdiv">
            <img src={svg1} alt="Developer Illustration" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="intro-section info-section">
        <div className="info-image" style={{
          display:"flex",
          width:"35%"
          }} >
          <div className="info-innerdiv">
            <img src={svg2} alt="Developer Illustration" />
          </div>
        </div>
        <div className="info-text" style={{
          width:"60%"
        }} >

          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="highlightColor1"> INTRODUCE </span> MYSELF
          </h1>

          <p className="info-body">

            <br />
            Hi, I am <span className="highlightColor1">Harsh Agrawal</span>
            from <span className="highlightColor1"> Gwalior MP, India</span>
            <br />
            <br />
            I am currently pursuing my B.Tech in Computer Science from NIT Bhopal (2022-2026)
            <br />
            <br />
            I discovered a passion for programming early on and have been steadily building my skills in
            <i>
              <b className="highlightColor1"> Java, JavaScript, and the MERN Stack. </b>
            </i>
            <br />
            <br />
            I enjoy exploring new 
            <i>
              <b className="highlightColor1"> Web technologies, improving my problem-solving abilities, </b> and
              applying them in practical environments like{" "}
              <b className="highlightColor1">
                internship work and open-source contributions.
              </b>
            </i>

            <br />
          </p>

          <p>
            Beyond coding, I like spending time on...
          </p>
            <ul>
              <li>
                <FaHandPointRight /> Playing Games
              </li>
              <li>
                <FaHandPointRight /> Cooking
              </li>
              <li>
                <FaHandPointRight /> Travelling
              </li>
            </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h1>FIND ME ON</h1>
        <p>
          Get in <span className="main-text">touch </span>with me
        </p>
        
        <SocialIcon />
      </section>
    </div>
  )
};


export default HomeAbout;