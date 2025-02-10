import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import './App.css'
import About from "./pages/About";
import ExperiencePage from "./pages/Experience";
import ProjectPage from "./pages/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "experience":
        return <ExperiencePage />;
      case "projects":
        return <ProjectPage />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ scale: 0.5, y: "50%", opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          // exit={{ scale: 0.5, y: "50%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <div className="footer">
        <div className="footer-box">
          <button
            className={`icon-button ${currentPage === "about" ? "active" : ""}`}
            onClick={() => handlePageChange("about")}
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
            className={`icon-button ${currentPage === "projects" ? "active" : ""}`}
            onClick={() => handlePageChange("projects")}
          >
            <FaProjectDiagram />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
