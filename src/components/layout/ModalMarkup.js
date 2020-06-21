import React, { useContext, Fragment } from "react";
import ButtonLink from "./ButtonLink";
import Carousel from "./Carousel";

import "../../styles/ModalMarkup.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";

const ModalMarkup = ({
  project: { title, description, demo, sourceCode, previewGifs },
  closeModal,
}) => {
  const darkmode = useContext(DarkModeContext);
  const bkg = darkmode.darkmode ? "lt-bkg" : "drk-bkg";
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const btnHover = darkmode.darkmode ? "lt-btnHover" : "drk-btnHover";

  const sourceCodeLinks = sourceCode.backend ? (
    <Fragment>
      <ButtonLink
        styles={`link-btn ${clr} ${btnHover}`}
        linkTo={sourceCode.frontend}
      >
        Frontend Code
      </ButtonLink>
      <ButtonLink
        styles={`link-btn ${clr} ${btnHover}`}
        linkTo={sourceCode.backend}
      >
        Backend Code
      </ButtonLink>
    </Fragment>
  ) : (
    <ButtonLink
      styles={`link-btn ${clr} ${btnHover}`}
      linkTo={sourceCode.frontend}
    >
      Source Code
    </ButtonLink>
  );
  return (
    <Fragment>
      <div className="modal-bkg" onClick={() => closeModal()}>
        <div
          className={`modal-container ${clr} ${bkg}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-content">
            <Carousel gifs={previewGifs} />
            <div className="modal-body">
              <div className="modal-txt">
                <p className="modal-title">{title}</p>
                <p className="modal-desc">{description}</p>
              </div>
              <div className="modal-links">
                {sourceCodeLinks}
                {demo && (
                  <ButtonLink
                    styles={`link-btn ${clr} ${btnHover}`}
                    linkTo={demo}
                  >
                    Demo
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalMarkup;
