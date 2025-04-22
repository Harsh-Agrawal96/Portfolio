import React from "react";
import "../public/css/ExperiencePage.css";
import { Experiences } from "../Data/ExperienceData";


const ExperiencePage = () => {
  return (
    <div className="experience-page">

      <h1 className="left-heading">
        My 
        <span className="head-color"> Experiences </span>
      </h1>
      
      {Experiences.map((exp) => (
        <div className="experience-card" key={exp.id}>
          {/* Row 1: Role & Company | Period */}
          <div className="experience-header">
            <div className="experience-role">
              <strong>{exp.role}</strong> @ {exp.company}
            </div>
            <div className="experience-period">{exp.period}</div>
          </div>

          {/* Row 2: Logo | Work Done */}
          <div className="experience-body">
            <div className="experience-logo">
              <img src={exp.logo} alt={`${exp.company} logo`} />
            </div>
            <div className="experience-details">
              {exp.work.map((task, index) => (
                <p key={index}>{task}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePage;
