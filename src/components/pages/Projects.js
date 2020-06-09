import React, { Fragment, useContext } from "react";
import ProjectMarkup from "../layout/ProjectMarkup";
import GoBack from "../layout/GoBack";

import prjcData from "../../projectsData.json";

import "../../styles/Projects.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";

const prjcMarkup = prjcData.projects.map(project => {
  return <ProjectMarkup project={project} key={project.id} />;
});

const Projects = () => {
  const darkmode = useContext(DarkModeContext);
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const border = darkmode.darkmode ? "lt-border" : "drk-border";

  return (
    <Fragment>
      <GoBack />
      <div className="prjc-container">
        <div className={`prjc-header ${clr} ${border}`}>
          <p>PROJECTS</p>
        </div>
        <div className="prjc-display">{prjcMarkup}</div>
      </div>
    </Fragment>
  );
};

export default Projects;
