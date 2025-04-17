
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { FaLinux, FaGithub } from "react-icons/fa";
import { DiWindows } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { SiJira, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "../public/css/SkillPage.css";

const SkillPage = () => {
  const scrollRef = useRef(null);

  return (
    <div className="skill-page">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <IconDiv
          name="HTML"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />
        <IconDiv
          name="CSS"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />
        <IconDiv
          name="Tailwind CSS"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />
          <IconDiv
          name="Material UI"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
        />

        <IconDiv
          name="Javascript"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <IconDiv
          name="ReactJs"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />

        <IconDiv
          name="Figma"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        />

        <IconDiv
          name="ExpresJs"
          exp="yes"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        />

        <IconDiv
          name="NodeJs"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />

        <IconDiv
          name="MongoDB"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        />

        <IconDiv
          name="Firebase"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
        />

        <IconDiv
          name="MySQL"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        />
        <IconDiv
          name="Java"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        />

        <IconDiv
          name="Git"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        />

        <IconDiv
          name="C"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        />

        <IconDiv
          name="Canva"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
        />
        <IconDiv
          name="Docker"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        />
      </div>

      <h2 className="section-title">Development Tools</h2>
      <div className="dev-tools-container">
        <div className="dev-tools-row" ref={scrollRef}>

          <div class="stock-ticker" >
            <ul>
              <li>
                <div className="tool-icon"><FaLinux /></div>
              </li>
              <li>
                <div className="tool-icon"><DiWindows /></div>
              </li>
              <li>
                <div className="tool-icon"><FaGithub /></div>
              </li>
              <li>
                <div className="tool-icon"><IoLogoVercel /></div>
              </li>
              <li>
                <div className="tool-icon"><VscVscode /></div>
              </li>
              <li>
                <div className="tool-icon"><SiJira  /></div>
              </li>
              <li>
                <div className="tool-icon"><SiIntellijidea  /></div>
              </li>
            </ul>
            <ul id="Second-half" aria-hidden="true">
              <li>
                <div className="tool-icon"><FaLinux /></div>
              </li>
              <li>
                <div className="tool-icon"><DiWindows /></div>
              </li>
              <li>
                <div className="tool-icon"><FaGithub /></div>
              </li>
              <li>
                <div className="tool-icon"><IoLogoVercel /></div>
              </li>
              <li>
                <div className="tool-icon"><VscVscode /></div>
              </li>
              <li>
                <div className="tool-icon"><SiJira  /></div>
              </li>
              <li>
                <div className="tool-icon"><SiIntellijidea  /></div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

const IconDiv = ({ name, exp, url }) => {

   return (
        <Box padding="1rem">
            <Box display="flex" flexDirection={"column"}
                alignItems="center"
                textAlign={"center"}
            >
                {exp ?
                    <img src={url} width="50px" alt={name} style={{ filter: "saturate(20)" }} /> :
                    <img src={url} width="50px" alt={name} />
                }

                <Typography
                    pt="0.5rem"
                    fontFamily="Poppins"
                    color="#FFFFFF"
                >{name}</Typography>
            </Box>
        </Box>
    );
}

export default SkillPage;
