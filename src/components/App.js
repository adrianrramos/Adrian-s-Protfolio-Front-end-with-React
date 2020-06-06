import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </BrowserRouter>
  );
};
