import React from "react";
import "../styles/GoBack.css";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <div className="gb-container">
      <div className="gb-box">
        <Link to="/" className="gb-link">
          <i class="fas fa-arrow-left gb-arrow"></i>
          Back
        </Link>
      </div>
    </div>
  );
};

export default GoBack;
