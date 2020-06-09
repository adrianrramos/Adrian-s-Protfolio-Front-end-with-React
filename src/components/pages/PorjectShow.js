import React from "react";
import ProjectModal from "../layout/ProjectModal";
import prjcData from "../../projectsData.json";

const PorjectShow = ({ match }) => {
  const id = match.params.id;

  const project = prjcData.projects.filter(prjc => prjc.id === id);

  return (
    <div>
      <ProjectModal project={project[0]} />
    </div>
  );
};

export default PorjectShow;
