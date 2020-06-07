import React, { Fragment } from "react";
import ProjectMarkup from "../layout/ProjectMarkup";
import "../styles/Projects.css";
import GoBack from "../layout/GoBack";

const dumbyProjectData = [
  { image: "PROJECT IMAGE", title: "PROJECT TITLE", id: 1 },
  { image: "PROJECT IMAGE", title: "PROJECT TITLE", id: 2 },
  { image: "PROJECT IMAGE", title: "PROJECT TITLE", id: 3 },
  { image: "PROJECT IMAGE", title: "PROJECT TITLE", id: 4 },
  { image: "PROJECT IMAGE", title: "PROJECT TITLE", id: 5 },
  { image: "PROJECT IMAGE", title: "PROJECT TITLE", id: 6 },
];

const prjcMarkup = dumbyProjectData.map(project => (
  <ProjectMarkup project={project} />
));

const Projects = () => {
  return (
    <Fragment>
      <GoBack />
      <div className="prjc-container">
        <div className="prjc-header">
          <p>PROJECTS</p>
        </div>
        <div className="prjc-list">{prjcMarkup}</div>
      </div>
    </Fragment>
  );
};

export default Projects;
