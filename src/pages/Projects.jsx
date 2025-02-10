import React from "react";
import "../public/css/ProjectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import image1 from "../public/images/flashcard.png"
import image2 from "../public/images/doctorBooking.png"

const projects = [
  {
    id: 1,
    image: image1,
    title: "Flashcard learning app",
    description: [
      "This is the first paragraph desaksfnfjlaskdfj lasdjfaisdljf iasjfd ailjwfi asndfiowaj fiawu9f sjioasdf noij cribing Project 1, highlighting its key features.",
      "Here is the second paragraph explaining the challenges faced and solutions implemented.",
    ],
    techStack: "React, Node.js, MongoDB",
    liveLink: "https://example.com/live1",
    repoLink: "https://github.com/example/repo1",
  },
  {
    id: 2,
    image: image2,
    title: "Project 2",
    description: [
      "Project 2 is focused on delivering unique functionalities to improve user experience.",
      "This paragraph elaborates on how innovative approaches were applied in Project 2."
    ],
    techStack: "Vue, Express, MySQL",
    liveLink: "https://example.com/live2",
    repoLink: "https://github.com/example/repo2",
  }
];

const ProjectPage = () => {

  return (
    <div className="project-page">
      {projects.map((project) => (
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
