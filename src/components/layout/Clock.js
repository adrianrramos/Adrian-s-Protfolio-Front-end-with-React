import React, { Fragment, useEffect, useState } from "react";
import dayjs from "dayjs";

const Clock = () => {
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
      <h1>{time}</h1>
    </Fragment>
  );
};

export default Clock;
