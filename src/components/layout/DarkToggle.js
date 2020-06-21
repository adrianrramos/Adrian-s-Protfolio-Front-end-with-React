import React, { useContext } from "react";

import DarkModeContext from "../../contexts/DarkModeContext";

const Clock = () => {
  const darkmode = useContext(DarkModeContext);

  const darkmodeToggle = darkmode.darkmode ? (
    <i className="toggle far fa-moon"></i>
  ) : (
    <i className="fas fa-moon"></i>
  );

  return (
    <p>
      <span className="drk-toggle" onClick={() => darkmode.onDarkModeToggle()}>
        {darkmodeToggle}
      </span>
    </p>
  );
};

export default Clock;
