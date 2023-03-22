import React from "react";
import Project from "./Project";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="gap-4 w-full grid md:grid-cols-2 lg:grid-cols-3">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default Projects;
