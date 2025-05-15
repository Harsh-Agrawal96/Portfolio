import React, { useEffect }  from "react";
import "../public/css/ProjectPage.css";
import ProjectArray from "../components/Project/ProjectArr";


const ProjectPage = () => {

  useEffect(() => {
    document.title = 'Projects | Harsh Agrawal Portfolio';
  }, []);

  return (
    <div className="project-page">
      
      <h1 className="left-heading" >
        My 
        <span className="head-color"> Projects </span>
      </h1>

      <ProjectArray />
    </div>
  );
};


export default ProjectPage;
