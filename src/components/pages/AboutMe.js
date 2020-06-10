import React, { Fragment, useContext } from "react";
import GoBack from "../layout/GoBack";
import { Link } from "react-router-dom";

import "../../styles/AboutMe.css";
import "../../styles/DarkMode.css";

import DarkModeContext from "../../contexts/DarkModeContext";

const AboutMe = () => {
  const darkmode = useContext(DarkModeContext);
  const clr = darkmode.darkmode ? "lt-clr" : "drk-clr";
  const border = darkmode.darkmode ? "lt-border" : "drk-border";
  const fill = darkmode.darkmode ? "#657b83" : "#66a6a5";

  return (
    <Fragment>
      <GoBack />
      <div className={`abt-containers ${clr}`}>
        <div className={`abt-panel1 ${border}`}>
          <p>FRONT-END DEVELOPER</p>
        </div>
        <div className="abt-panel2">
          <p id="abt-bodyText">
            Bay-Area native, frontend web developer, with a hunger for work. I
            focus on producing the best work I can to the best of my abilities.
            I am always energetic and eager to learn new skills. Think I might
            be a right fit for the team?{" "}
            <Link to="/contact" className="abt-link">
              Contact me
            </Link>
          </p>
          <strong>Tools I've Learned and Used on my Journey:</strong>
          <p className="tools-header">Development</p>
          <div className="abt-grid">
            <p className="tool-item">
              <i className="tool-icon fab fa-react"></i> React.js
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-js-square"></i> JavaScript
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-html5"></i> HTML
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
              MongoDb
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-node-js"></i> Node.js
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-python"></i> Python
            </p>
          </div>
          <p className="tools-header">Workflow</p>
          <div className="abt-grid">
            <p className="tool-item">
              <i className="tool-icon fab fa-github"></i> GitHub
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-git-alt"></i> Git
            </p>
            <p className="tool-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
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
                    <path d="M85.90552,5.38025c-0.02825,0.00096 -0.05578,0.00865 -0.08398,0.0105c-0.06967,0.00453 -0.13513,0.0267 -0.20471,0.03674c-0.26383,0.03795 -0.51598,0.11484 -0.76111,0.23096c-0.0423,0.01994 -0.08954,0.0144 -0.13123,0.03674l-69.875,37.625c-0.22375,0.12123 -0.42153,0.27321 -0.59839,0.44617c-0.03682,0.03589 -0.05977,0.08279 -0.09448,0.12073c-0.17559,0.19255 -0.31737,0.40697 -0.43042,0.64038c-0.03827,0.07859 -0.07438,0.15354 -0.10498,0.23621c-0.10805,0.29148 -0.18284,0.59297 -0.18372,0.91333v0.00525v0.00525v80.625c0,0.23717 0.03485,0.47476 0.09448,0.69812c0.08058,0.29872 0.22358,0.5716 0.39893,0.82409c0.041,0.05938 0.08522,0.11173 0.13123,0.16797c0.19585,0.23906 0.41867,0.45703 0.69287,0.61939c0.00482,0.00287 0.01091,0.00241 0.01575,0.00525c0.00445,0.0026 0.00602,0.00791 0.0105,0.0105l69.84351,40.29675c0.00337,0.00199 0.00712,0.00327 0.0105,0.00525c0.0034,0.002 0.00709,0.00326 0.0105,0.00525l0.0105,0.00525c0.12149,0.06997 0.25135,0.1083 0.37793,0.15747c0.08945,0.0347 0.17574,0.08546 0.2677,0.11023h0.00525c0.22898,0.06145 0.45681,0.09448 0.68762,0.09448h0.00525c0.22821,0 0.45946,-0.03087 0.68237,-0.08923c0.04559,-0.01201 0.08632,-0.03812 0.13123,-0.05249c0.16719,-0.05348 0.33589,-0.11242 0.49341,-0.19946l72.5625,-40.3125c0.01129,-0.00628 0.01508,-0.01983 0.02625,-0.02625c0.02496,-0.01428 0.05413,-0.01636 0.07874,-0.03149c0.24691,-0.15369 0.45347,-0.3552 0.63513,-0.57214c0.04705,-0.05625 0.08397,-0.1137 0.12598,-0.17322c0.15993,-0.22516 0.28814,-0.46574 0.37268,-0.72962c0.01098,-0.03441 0.02714,-0.06491 0.03674,-0.09973c0.06371,-0.23014 0.10498,-0.46858 0.10498,-0.71387v-80.625c0,-0.01867 -0.01012,-0.03391 -0.0105,-0.05249c-0.0072,-0.2966 -0.07517,-0.57962 -0.17322,-0.85034c-0.03449,-0.09538 -0.07085,-0.18295 -0.11548,-0.27295c-0.10867,-0.22071 -0.24468,-0.42016 -0.40942,-0.60364c-0.04055,-0.04509 -0.06675,-0.09948 -0.11023,-0.14173c-0.18566,-0.1806 -0.39284,-0.33913 -0.62988,-0.46191l-72.5625,-37.625c-0.11089,-0.05759 -0.23051,-0.08492 -0.34644,-0.12598c-0.06596,-0.02351 -0.12662,-0.04992 -0.19421,-0.06824c-0.25938,-0.07004 -0.52683,-0.11402 -0.7926,-0.10498zM88.6875,12.48218l63.9541,33.15808l-26.28711,13.1488l-37.66699,-20.08801zM83.3125,12.56616v26.13489l-37.60925,20.05652l-23.93555,-13.05432zM86,43.36218l34.60156,18.45032l-34.60156,18.45032l-34.60156,-18.45032zM155.875,50.03894v71.92737l-26.875,-13.4375v-45.05761zM18.8125,50.21741l24.1875,13.1908v6.4668c0,1.48619 1.204,2.6875 2.6875,2.6875c1.4835,0 2.6875,-1.20131 2.6875,-2.6875v-3.57983l34.9375,18.62878v42.28088l-34.9375,-18.62878v-6.45105c0,-1.48619 -1.204,-2.6875 -2.6875,-2.6875c-1.4835,0 -2.6875,1.20131 -2.6875,2.6875v6.4668l-24.1875,13.1908zM123.625,66.29517v43.89233c0,0.13426 0.05452,0.249 0.07349,0.37793c0.02823,0.19342 0.04656,0.38457 0.11548,0.56689c0.0615,0.16212 0.16175,0.2956 0.25195,0.44092c0.09063,0.14784 0.16948,0.29603 0.2887,0.42517c0.1301,0.14065 0.28887,0.24143 0.44617,0.35169c0.10856,0.07632 0.1874,0.1803 0.30969,0.24145l27.69385,13.84692l-64.11682,35.61987v-30.37085v-46.76355zM45.6875,77.9375c-1.4835,0 -2.6875,1.20131 -2.6875,2.6875v10.75c0,1.48619 1.204,2.6875 2.6875,2.6875c1.4835,0 2.6875,-1.20131 2.6875,-2.6875v-10.75c0,-1.48619 -1.204,-2.6875 -2.6875,-2.6875zM115.8512,109.91455c-0.34803,0.03137 -0.69434,0.13433 -1.02356,0.30969c-1.30881,0.69875 -1.80898,2.32351 -1.10754,3.63232l2.53003,4.74512c0.48375,0.90569 1.41312,1.42249 2.37256,1.42249c0.42463,0 0.8592,-0.09994 1.26501,-0.31494c1.30881,-0.69875 1.80373,-2.32876 1.10229,-3.63757l-2.53003,-4.74512c-0.52406,-0.97959 -1.56467,-1.50609 -2.60876,-1.41199zM45.698,113.24243l37.6145,20.05652v28.67542l-61.70227,-35.59887zM104.64978,115.88794c-0.34795,0.03086 -0.69501,0.13043 -1.02356,0.30444c-1.30881,0.69875 -1.8063,2.32876 -1.10755,3.63757l2.53003,4.74512c0.48644,0.90569 1.41837,1.42248 2.37781,1.42248c0.42463,0 0.85395,-0.10263 1.25977,-0.31494c1.30881,-0.69875 1.8063,-2.32876 1.10755,-3.63757l-2.53003,-4.74512c-0.52608,-0.97959 -1.57017,-1.50458 -2.61401,-1.41199zM93.45361,121.85608c-0.34824,0.03137 -0.69434,0.13433 -1.02356,0.30969c-1.3115,0.69875 -1.80629,2.32876 -1.10754,3.63757l2.53003,4.73987c0.48375,0.90569 1.41312,1.42249 2.37256,1.42249c0.42463,0 0.8592,-0.09994 1.26501,-0.31494c1.30881,-0.69875 1.80373,-2.32876 1.10229,-3.63757l-2.53003,-4.74511c-0.52205,-0.9796 -1.56404,-1.50609 -2.60876,-1.41199z"></path>
                  </g>
                </g>
              </svg>
              Webpack
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-npm"></i> NPM
            </p>
          </div>
          <p className="tools-header">Business</p>
          <div className="abt-grid">
            <p className="tool-item">
              <i className="tool-icon fab fa-slack"></i> Slack
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-trello"></i> Trello
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-mailchimp"></i> Mailchimp
            </p>
            <p className="tool-item">
              <i className="tool-icon fab fa-google"></i> Services
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
