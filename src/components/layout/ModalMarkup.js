import React, { useContext, Fragment } from "react";

import "../../styles/ModalMarkup.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";
import GoBack from "./GoBack";

const ModalMarkup = ({
  project: { title, description, demo, sourceCode, previewGifs },
}) => {
  const darkmode = useContext(DarkModeContext);
  const staticBkg = darkmode.darkmode ? "lt-stbkg" : "drk-stbkg";
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const shadow = darkmode.darkmode ? "lt-shadow" : "drk-shadow";

  const sourceCodeLinks = sourceCode.backend ? (
    <Fragment>
      <a
        className={`link-btn ${shadow}`}
        href={sourceCode.frontend}
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Code
      </a>
      <a
        className={`link-btn ${shadow}`}
        href={sourceCode.backend}
        target="_blank"
        rel="noopener noreferrer"
      >
        Backend Code
      </a>
    </Fragment>
  ) : (
    <a
      className={`link-btn ${shadow}`}
      href={sourceCode.frontend}
      target="_blank"
      rel="noopener noreferrer"
    >
      Source Code
    </a>
  );

  return (
    <Fragment>
      <GoBack />
      <div className="modal-bkg">
        <div className={`modal-container ${clr} ${staticBkg}`}>
          <div className="modal-content">
            <div className="gif-carousel">
              <img
                src={previewGifs.desktop}
                className="gif"
                alt="desktop demo preview"
              />
            </div>
            <div className="modal-body">
              <p className="modal-desc">{description}</p>
              {sourceCodeLinks}
              {demo && (
                <a
                  className={`link-btn ${shadow}`}
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalMarkup;
