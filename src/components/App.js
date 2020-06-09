import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import "../styles/App.css";
import "../styles/DarkMode.css";

import { DarkModeStore } from "../contexts/DarkModeContext";

export const App = () => {
  return (
    <BrowserRouter>
      <DarkModeStore>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </DarkModeStore>
    </BrowserRouter>
  );
};
