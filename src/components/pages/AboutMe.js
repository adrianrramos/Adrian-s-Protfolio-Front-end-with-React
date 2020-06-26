import React, { useContext } from "react";

import "../../styles/AboutMe.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";

const AboutMe = () => {
  const darkmode = useContext(DarkModeContext);
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const border = darkmode.darkmode ? "lt-border" : "drk-border";
  const fill = darkmode.darkmode ? "#657b83" : "#66a6a5";

  return (
    <div className={`abt-containers ${clr}`}>
      <div className={`abt-panel1 ${border}`}>
        <p>FRONT-END DEVELOPER</p>
      </div>
      <div className="abt-panel2">
        <p id="abt-bodyText">
          Bay-Area native, frontend web developer, with a hunger for work. I
          focus on producing the best work I can to the best of my abilities. I
          am always energetic and eager to learn new skills. Think I might be a
          right fit for the team? Contact me ASAP
        </p>
        <strong>Tools I've Learned and Used on my Journey:</strong>
        <div className="abt-grid">
          <p className="tool-item">
            <i className="tool-icon fab fa-react"></i> React
          </p>
          <p className="tool-item">
            <i className="tool-icon fab fa-js-square"></i> JavaScript
          </p>
          <p className="tool-item">
            <i className="tool-icon fab fa-html5"></i> HTML
          </p>
          <p className="tool-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 172 172"
              className={`tool-icon svg ${fill}`}
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={`${fill}`}>
                  <path d="M154.8,13.76h-137.6c-1.90232,0 -3.44,1.54112 -3.44,3.44v137.6c0,1.89888 1.53768,3.44 3.44,3.44h137.6c1.90232,0 3.44,-1.54112 3.44,-3.44v-137.6c0,-1.89888 -1.53768,-3.44 -3.44,-3.44zM99.76,90.9708h-17.2v53.5092h-13.76v-53.5092h-17.2v-11.8508h48.16zM103.61624,141.42528v-14.30352c0,0 7.81224,5.88928 17.18624,5.88928c9.374,0 9.0128,-6.13008 9.0128,-6.96944c0,-8.89584 -26.56024,-8.89584 -26.56024,-28.6036c0,-26.80104 38.7,-16.22648 38.7,-16.22648l-0.4816,12.74176c0,0 -6.49128,-4.32752 -13.82192,-4.32752c-7.33064,0 -9.976,3.48472 -9.976,7.21024c0,9.6148 26.80104,8.65504 26.80104,28.00504c0.00344,29.80416 -40.86032,16.58424 -40.86032,16.58424z"></path>
                </g>
              </g>
            </svg>
            TypeScript
          </p>

          <p className="tool-item">
            <i className="tool-icon fab fa-css3-alt"></i> CSS
          </p>
          <p className="tool-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 172 172"
              className={`tool-icon svg ${fill}`}
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={`${fill}`}>
                  <path d="M3.58333,17.91667l21.5,14.33333v71.66667l-21.5,-14.33333z"></path>
                  <path d="M168.41667,71.66667l-21.5,14.33333v46.58333l21.5,-14.33333z"></path>
                  <path d="M168.41667,21.5l-21.5,14.33333v25.08333l21.5,-14.33333z"></path>
                  <path d="M125.41667,17.91667l-21.5,14.33333v71.66667l21.5,-14.33333z"></path>
                  <path d="M3.58333,43l60.91667,39.41667v-25.08333l-60.91667,-39.41667z"></path>
                  <path d="M125.41667,43l-60.91667,39.41667v-25.08333l60.91667,-39.41667z"></path>
                  <path d="M125.41667,93.16667l-60.91667,39.41667v-25.08333l60.91667,-39.41667z"></path>
                  <path d="M168.41667,121.83333l-60.91667,39.41667v-25.08333l60.91667,-39.41667z"></path>
                  <path d="M107.5,135.32458l-43,-27.82458v25.08333l43,27.82458z"></path>
                </g>
              </g>
            </svg>
            Material-UI
          </p>
          <p className="tool-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 172 172"
              style={{ fill: "#000000" }}
              className={`tool-icon svg ${fill}`}
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={`${fill}`}>
                  <path d="M28.66667,132.58333l54.5885,-102.35433c1.15025,-2.15717 4.26058,-2.11775 5.3535,0.07167l18.89133,37.78267z"></path>
                  <path d="M28.66667,132.55467l19.87317,-122.54642c0.51958,-3.20708 4.82675,-3.90225 6.33175,-1.02125l38.29508,73.401z"></path>
                  <path d="M28.69533,132.53317l0.71667,-0.56258l62.81225,-51.38858l-17.716,-33.95567z"></path>
                  <path d="M28.66667,132.58333l95.55317,-92.13825c2.00308,-1.93142 5.34633,-0.79192 5.75483,1.96008l13.35867,90.17817l-53.75,31.32908c-2.18225,1.2255 -4.84467,1.2255 -7.02692,0z"></path>
                </g>
              </g>
            </svg>
            Firebase
          </p>
          <p className="tool-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 172 172"
              style={{ fill: "#000000" }}
              className={`tool-icon svg`}
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={`${fill}`}>
                  <path d="M150.5,61.99167c0,73.45833 -64.5,95.675 -64.5,95.675c0,0 -64.5,-22.21667 -64.5,-95.675c0,-8.95833 0.71667,-16.48333 1.43333,-22.575c1.075,-8.95833 7.16667,-16.125 15.76667,-18.275c11.10833,-3.225 28.66667,-6.80833 47.3,-6.80833c18.63333,0 36.19167,3.58333 47.65833,6.80833c8.6,2.15 14.69167,9.675 15.76667,18.275c0.35833,6.09167 1.075,13.975 1.075,22.575z"></path>
                  <path d="M86,25.08333c17.55833,0 34.04167,3.58333 44.79167,6.45c4.3,1.075 7.16667,4.65833 7.88333,9.31667c0.71667,6.80833 1.075,13.975 1.075,21.14167c0,55.9 -41.20833,78.475 -53.75,83.85c-12.54167,-5.73333 -53.75,-28.30833 -53.75,-83.85c0,-7.16667 0.35833,-14.33333 1.075,-21.14167c0.35833,-4.65833 3.58333,-8.24167 7.88333,-9.31667c10.75,-2.86667 27.23333,-6.45 44.79167,-6.45M86,14.33333c-18.63333,0 -36.19167,3.58333 -47.65833,6.80833c-8.24167,2.15 -14.69167,9.675 -15.40833,18.275c-0.71667,6.09167 -1.43333,13.975 -1.43333,22.575c0,73.45833 64.5,95.675 64.5,95.675c0,0 64.5,-22.21667 64.5,-95.675c0,-8.95833 -0.71667,-16.48333 -1.43333,-22.575c-1.075,-8.95833 -7.16667,-16.125 -15.76667,-18.275c-11.10833,-3.225 -28.66667,-6.80833 -47.3,-6.80833z"></path>
                  <path d="M82.41667,100.33333h7.16667v28.66667h-7.16667z"></path>
                  <path d="M86,35.83333c0,0 -21.5,17.91667 -21.5,46.58333c0,18.63333 11.825,30.45833 17.91667,35.83333l3.58333,-10.75l3.58333,10.75c6.09167,-5.375 17.91667,-17.2 17.91667,-35.83333c0,-28.66667 -21.5,-46.58333 -21.5,-46.58333z"></path>
                  <path d="M86,35.83333c0,0 -21.5,17.91667 -21.5,46.58333c0,18.63333 11.825,30.45833 17.91667,35.83333l3.58333,-10.75z"></path>
                </g>
              </g>
            </svg>
            MongoDB
          </p>
          <p className="tool-item">
            <i className="tool-icon fab fa-node-js"></i> Node.js
          </p>
          <p className="tool-item">
            <i className="tool-icon fab fa-python"></i> Python
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
