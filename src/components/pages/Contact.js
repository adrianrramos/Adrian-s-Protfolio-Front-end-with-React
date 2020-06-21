import React, { useContext } from "react";

import "../../styles/Contact.css";
import "../../styles/Home.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";

const Contact = () => {
  const darkmode = useContext(DarkModeContext);
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";

  return (
    <div className={`cnt-container ${clr}  `}>
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
        <i class="far fa-file-pdf"></i>{" "}
        <a
          href="https://goo.gl/maps/LGaVpHA5KXjsZ9fT6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </p>
      <p className="cnt-line">
        <i className="fab fa-github cnt-icon"></i>
        {"  "}
        <a
          href="https://github.com/ramos-codes"
          target="_blank"
          rel="noopener noreferrer"
          id="smallBox2"
        >
          Github
        </a>
      </p>
      <p className="cnt-line">
        <i className="fab fa-linkedin cnt-icon"></i>
        {"  "}
        <a
          href="https://www.linkedin.com/in/adrian-ramos-7aa653192/"
          target="_blank"
          rel="noopener noreferrer"
          id="smallBox4"
        >
          LinkedIn
        </a>
      </p>
      <p className="cnt-line">
        <i class="fas fa-compass"></i>{" "}
        <a
          href="https://goo.gl/maps/LGaVpHA5KXjsZ9fT6"
          target="_blank"
          rel="noopener noreferrer"
        >
          San Francisco, CA
        </a>
      </p>
    </div>
  );
};

export default Contact;
