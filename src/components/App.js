import React from "react";

import Home from "./pages/Home";

import "../styles/App.css";
import "../styles/DarkMode.css";

import { DarkModeStore } from "../contexts/DarkModeContext";

export const App = () => {
  return (
    <DarkModeStore>
      <Home />
    </DarkModeStore>
  );
};
