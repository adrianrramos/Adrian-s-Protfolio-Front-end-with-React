import React, { useContext } from "react";
import GoBack from "../layout/GoBack";

import "../../styles/Contact.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";

const Contact = () => {
  const darkmode = useContext(DarkModeContext);
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const border = darkmode.darkmode ? "lt-border" : "drk-border";

  return (
    <div>
      <GoBack />
      <div className={`cnt-container ${clr}  ${border}`}>
        <p className="cnt-title">Contact Info</p>
        <p className="cnt-line">
          <i class="fas fa-envelope-square"></i>{" "}
          <a href="mailto:ramosadrian56@gmail.com">ramosadrian56@gmail.com</a>
        </p>
        <p className="cnt-line">
          <i class="fas fa-mobile"></i>{" "}
          <a href="tel:+14157661075">+1 (415) 246 6151</a>
        </p>
        <p className="cnt-line">
          <i class="fas fa-compass"></i> San Francisco, CA
        </p>
      </div>
    </div>
  );
};

export default Contact;
