import React from "react";
import "../styles/Projects.css";

const ProjectMarkup = ({ project: { image, title } }) => {
  return (
    <div>
      <div>{image}</div>
      <div>{title}</div>
    </div>
  );
};

export default ProjectMarkup;
