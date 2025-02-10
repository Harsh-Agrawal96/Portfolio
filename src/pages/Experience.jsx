import React from "react";
import "../public/css/ExperiencePage.css";
import image1 from "../public/images/intern1.jpg"
import image2 from "../public/images/intern2.jpg"

const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Tech Corp",
    period: "Jan 2022 - Present",
    logo: image2,
    work: [
      "Developed scalable REST APIs for high-traffic applications.",
      "Optimized database queries to improve performance by 30%.",
      "Implemented authentication & security measures.",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "InnovateX",
    period: "Jun 2020 - Dec 2021",
    logo: image1,
    work: [
      "Built microservices architecture for cloud-based applications.",
      "Designed efficient data models for NoSQL databases.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      {experiences.map((exp) => (
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
