import React from "react";
import { Link } from "react-router-dom";
import Clock from "../layout/Clock";
import "../styles/Home.css";

// TODO: fix coloring

const Home = () => {
  return (
    <div className="page-container">
      <div className="home-header">
        <p className="fullname">Adrian Ramos</p>
        <Clock />
      </div>
      <div className="grid-container">
        <Link to="/projects" className="gridItem " id="projects">
          <p className="gridItem-text">Projects</p>
        </Link>
        <Link to="/aboutme" className="gridItem " id="smallBox1">
          <p className="gridItem-text">About Me</p>
        </Link>
        <a
          href="https://github.com/ramos-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="gridItem "
          id="smallBox2"
        >
          <i className="fab fa-github gridItem-text"></i>
        </a>
        <Link to="contact" className="gridItem " id="smallBox3">
          <p className="gridItem-text">Contact</p>
        </Link>
        <a
          href="https://www.linkedin.com/in/adrian-ramos-7aa653192/"
          target="_blank"
          rel="noopener noreferrer"
          className="gridItem "
          id="smallBox4"
        >
          <i className="fab fa-linkedin gridItem-text"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
