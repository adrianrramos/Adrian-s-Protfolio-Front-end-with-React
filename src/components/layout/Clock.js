import React, { Fragment, useEffect, useState, useContext } from "react";
import dayjs from "dayjs";

import DarkModeContext from "../../contexts/DarkModeContext";

const Clock = () => {
  const darkmode = useContext(DarkModeContext);

  const darkmodeToggle = darkmode.darkmode ? (
    <i className="toggle far fa-moon"></i>
  ) : (
    <i class="fas fa-moon"></i>
  );
  const [time, setTime] = useState(dayjs().format("H:mm:ss"));

  useEffect(() => {
    const interval = setInterval(
      () => setTime(dayjs().format("HH:mm:ss")),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Fragment>
      <p>
        {time}
        <span
          className="drk-toggle"
          onClick={() => darkmode.onDarkModeToggle()}
        >
          {darkmodeToggle}
        </span>
      </p>
    </Fragment>
  );
};

export default Clock;
