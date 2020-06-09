import React, { useContext } from "react";

import "../../styles/Projects.css";

import DarkModeContext from "../../contexts/DarkModeContext";
import { Link } from "react-router-dom";

const ProjectMarkup = ({ project: { image, title, id } }) => {
  const darkmode = useContext(DarkModeContext);
  const hover = darkmode.darkmode ? "lt-hover" : "drk-hover";
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";

  return (
    <div className="prjc-item">
      <div className={`prjc-imgdiv ${hover}`}>
        <Link to={`/project/${id}`}>
          <img src={image} alt="project preview" className="prjc-image" />
        </Link>
      </div>
      <div className={`prjc-title ${clr}`}>{title}</div>
    </div>
  );
};

export default ProjectMarkup;
