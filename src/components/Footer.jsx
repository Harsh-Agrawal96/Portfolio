import React, { useState } from "react";
import { FaUser, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import '../public/css/Footer.css';


const Footer = ({ currentPage, handlePageChange }) => {
  return (
    <div className="footer">
      <div className="footer-box">
        <button
          className={`icon-button ${currentPage === "homeAbout" ? "active" : ""}`}
          onClick={() => handlePageChange("homeAbout")}
        >
          <FaUser />
        </button>
        <button
          className={`icon-button ${currentPage === "experience" ? "active" : ""}`}
          onClick={() => handlePageChange("experience")}
        >
          <FaBriefcase />
        </button>
        <button
          className={`icon-button ${currentPage === "skills" ? "active" : ""}`}
          onClick={() => handlePageChange("skills")}
        >
          <SiHyperskill />
        </button>
        <button
          className={`icon-button ${currentPage === "projects" ? "active" : ""}`}
          onClick={() => handlePageChange("projects")}
        >
          <FaProjectDiagram />
        </button>
      </div>
    </div>
  );
};


export default Footer;