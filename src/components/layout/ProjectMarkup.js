import React, { useContext, useState } from "react";

import "../../styles/Projects.css";

import DarkModeContext from "../../contexts/DarkModeContext";
import Portal from "./Portal";
import ModalMarkup from "./ModalMarkup";

const ProjectMarkup = ({ project: { image, title, id }, project }) => {
  const [open, setOpen] = useState(false);

  const darkmode = useContext(DarkModeContext);
  const hover = darkmode.darkmode ? "lt-hover" : "drk-hover";
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="prjc-item">
      <div className={`prjc-imgdiv ${hover}`} onClick={() => setOpen(!open)}>
        <img src={image} alt="project preview" className="prjc-image" />
      </div>
      <div className={`prjc-title ${clr}`}>{title}</div>
      {open && (
        <Portal>
          <ModalMarkup project={project} closeModal={handleClose} />
        </Portal>
      )}
    </div>
  );
};

export default ProjectMarkup;
