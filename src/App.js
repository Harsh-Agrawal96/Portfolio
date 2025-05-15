import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './App.css'
import HomeAbout from "./pages/HomeAbout";
import ExperiencePage from "./pages/Experience";
import ProjectPage from "./pages/Projects";
import SkillPage from "./pages/Skills"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [currentPage, setCurrentPage] = useState("homeAbout");

  const renderPage = () => {
    switch (currentPage) {
      case "homeAbout":
        return <HomeAbout />;
      case "experience":
        return <ExperiencePage />;
      case "projects":
        return <ProjectPage />;
      case "skills":
        return <SkillPage />;
      default:
        return <HomeAbout />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <NavBar />
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
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
