import React, { useContext, useEffect } from "react";
import DarkToggle from "../layout/DarkToggle";

import DarkModeContext from "../../contexts/DarkModeContext";

import "../../styles/Home.css";
import "../../styles/DarkMode.css";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

const Home = () => {
  const darkmode = useContext(DarkModeContext);
  const bkg = darkmode.darkmode ? "lt-bkg" : "drk-bkg";
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";

  useEffect(() => {
    if (darkmode.darkmode) {
      document.body.classList.remove("drk-bkg");
      document.body.classList.add(bkg);
    } else {
      document.body.classList.remove("lt-bkg");
      document.body.classList.add(bkg);
    }
  }, [darkmode.darkmode, bkg]);

  return (
    <div className="page-container">
      <div className={`home-header ${clr}`}>
        <p className="fullname">Adrian Ramos</p>
        <DarkToggle />
      </div>
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
