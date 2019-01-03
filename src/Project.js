import React from 'react';

const Project = ({ match }) => {
  let project = match.params.name;
  let json = require("./assets/projects/" + project + ".json");
  return (
    <h3>{JSON.stringify(json)}</h3>
  );
};

export default Project;