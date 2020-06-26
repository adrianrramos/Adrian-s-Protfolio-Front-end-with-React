import React, { useContext } from "react";
import ProjectMarkup from "../layout/ProjectMarkup";

import prjcData from "../../projectsData.json";

import "../../styles/Projects.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";
import Contact from "./Contact";

const prjcMarkup = prjcData.projects.map(project => {
  return <ProjectMarkup project={project} key={project.id} />;
});

const Projects = () => {
  const darkmode = useContext(DarkModeContext);
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const border = darkmode.darkmode ? "lt-border" : "drk-border";

  return (
    <div className="contact-and-prjc">
      <Contact />
      <div className="prjc-container">
        <div className={`prjc-header ${clr} ${border}`}>
          <p id="prjc-title-text">PROJECTS</p>
        </div>
        <div className="prjc-display">{prjcMarkup}</div>
      </div>
    </div>
  );
};

export default Projects;
