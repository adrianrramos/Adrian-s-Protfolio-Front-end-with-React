import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Clock from "../layout/Clock";

import DarkModeContext from "../../contexts/DarkModeContext";

import "../../styles/Home.css";
import "../../styles/DarkMode.css";

const Home = () => {
  const darkmode = useContext(DarkModeContext);
  const bkg = darkmode.darkmode ? "lt-bkg" : "drk-bkg";
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const hover = darkmode.darkmode ? "lt-hover" : "drk-hover";

  useEffect(() => {
    if (darkmode.darkmode) {
      document.body.classList.remove("drk-bkg");
      document.body.classList.add(bkg);
    } else {
      document.body.classList.remove("lt-bkg");
      document.body.classList.add(bkg);
    }
  }, [bkg]);

  return (
    <div className="page-container">
      <div className={`home-header ${clr}`}>
        <p className="fullname">Adrian Ramos</p>
        <Clock />
      </div>
      <div className={`grid-container ${clr}`}>
        <Link to="/projects" className={`gridItem  ${hover}`} id="projects">
          <p className="gridItem-text">Projects</p>
        </Link>
        <Link to="/aboutme" className={`gridItem  ${hover}`} id="smallBox1">
          <p className="gridItem-text">About Me</p>
        </Link>
        <a
          href="https://github.com/ramos-codes"
          target="_blank"
          rel="noopener noreferrer"
          className={`gridItem  ${hover}`}
          id="smallBox2"
        >
          <i className="fab fa-github gridItem-text"></i>
        </a>
        <Link to="contact" className={`gridItem  ${hover}`} id="smallBox3">
          <p className="gridItem-text">Contact</p>
        </Link>
        <a
          href="https://www.linkedin.com/in/adrian-ramos-7aa653192/"
          target="_blank"
          rel="noopener noreferrer"
          className={`gridItem  ${hover}`}
          id="smallBox4"
        >
          <i className="fab fa-linkedin gridItem-text"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
