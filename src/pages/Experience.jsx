import React from "react";
import "../public/css/ExperiencePage.css";
import ExperienceArr from "../components/Experience/ExperienceArray";


const ExperiencePage = () => {
  return (
    <div className="experience-page">

      <h1 className="left-heading">
        My 
        <span className="head-color"> Experiences </span>
      </h1>
      
      <ExperienceArr />
    </div>
  );
};

export default ExperiencePage;
