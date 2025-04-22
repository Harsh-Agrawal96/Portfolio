import React from "react";
import "../public/css/ProjectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Projects } from "../Data/ProjectData";



const ProjectPage = () => {

  return (
    <div className="project-page">
      
      <h1 className="left-heading">
        My 
        <span className="head-color"> Projects </span>
      </h1>


      {Projects.map((project) => (
        <div className="project-card" key={project.id}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-details">
            <h2>{project.title}</h2>
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className="techs"><strong>Tech Stack:</strong> {project.techStack}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="button live-link">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                Demo
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="button repo-link" >
              <FontAwesomeIcon icon={faGithub} className="icon" />
                Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
