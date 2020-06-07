import React from "react";
import "../styles/Projects.css";

const ProjectMarkup = ({ project: { image, title } }) => {
  return (
    <div className="prjc-item">
      <div className="prjc-img">{image}</div>
      <div className="prjc-title">{title}</div>
    </div>
  );
};

export default ProjectMarkup;
