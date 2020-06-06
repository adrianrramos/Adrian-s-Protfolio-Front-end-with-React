import React from "react";
import { Link } from "react-router-dom";
import Clock from "../layout/Clock";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="home-header">
        <h1 className="fullname">Adrian Ramos</h1>
        <Clock />
      </div>
      <div className="grid-container">
        <Link to="/projects" className="gridItem projects">
          <p className="gridItem-text">Projects</p>
        </Link>
        <Link to="/aboutme" className="gridItem">
          <p className="gridItem-text">About Me</p>
        </Link>
        <a
          href="https://github.com/ramos-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="gridItem"
        >
          <p className="gridItem-text">GitHub</p>
        </a>
        <Link to="contact" className="gridItem">
          <p className="gridItem-text">Contact</p>
        </Link>
        <a
          href="https://www.linkedin.com/in/adrian-ramos-7aa653192/"
          target="_blank"
          rel="noopener noreferrer"
          className="gridItem"
        >
          <p className="gridItem-text">LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
