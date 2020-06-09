import React from "react";

const ButtonLink = ({ styles, linkTo, children }) => {
  return (
    <a
      className={styles}
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
