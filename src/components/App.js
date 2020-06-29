import React, { useEffect } from "react";

import Home from "./pages/Home";

import "../styles/App.css";
import "../styles/DarkMode.css";

import { DarkModeStore } from "../contexts/DarkModeContext";

export const App = () => {
  useEffect(() => {
    window.location.pathname === "/oinker" &&
      window.location.replace("https://socialchimp-5c8f3.web.app/");

    window.location.pathname === "/countrywiki" &&
      window.location.replace(
        "https://rest-countries-api-react-app-b48anob8w.now.sh/"
      );

    window.location.pathname === "/unban" &&
      window.location.replace(
        "https://github.com/ramos-codes/hive-blockchain-project"
      );
  }, []);

  return (
    <DarkModeStore>
      <Home />
    </DarkModeStore>
  );
};
