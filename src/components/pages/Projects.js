import React, { Fragment } from "react";
import ProjectMarkup from "../layout/ProjectMarkup";
import GoBack from "../layout/GoBack";
import "../styles/Projects.css";

const dumbyProjectData = [
  { image: "PROJECT IMAGE", title: "FIREBASE & REACT: twitter clone", id: 1 },
  { image: "PROJECT IMAGE", title: "COMING SOON", id: 2 },
  { image: "PROJECT IMAGE", title: "RESTful API + REACT: countries", id: 3 },
  { image: "PROJECT IMAGE", title: "NODEjs + MongoDb: review app", id: 4 },
  { image: "PROJECT IMAGE", title: "COMING SOON", id: 5 },
  { image: "PROJECT IMAGE", title: "COMING SOON", id: 6 },
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
        <div className="prjc-display">{prjcMarkup}</div>
      </div>
    </Fragment>
  );
};

export default Projects;
