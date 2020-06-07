import React, { useContext } from "react";
import "../../styles/Projects.css";

import DarkModeContext from "../../contexts/DarkModeContext";

const ProjectMarkup = ({ project: { image, title } }) => {
  const darkmode = useContext(DarkModeContext);
  const hover = darkmode.darkmode ? "lt-hover" : "drk-hover";
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";

  return (
    <div className="prjc-item">
      <div className={`prjc-img ${hover}`}>{image}</div>
      <div className={`prjc-title ${clr}`}>{title}</div>
    </div>
  );
};

export default ProjectMarkup;
