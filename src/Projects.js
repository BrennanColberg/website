import React from 'react';
import projectsJSON from './assets/projects.json';


/**
 * Displays all projects encoded in ./assets/projects.json to
 * showcase my accomplishments and technological progress.
 */
const Projects = () => {

  // generates a display for each project in the JSON
  let projects = [];
  for (let project of projectsJSON) {
    projects.push(
      <Project
        project={project}
        key={project.name}
      />
    );
  }

  return (
    <section className="Projects">
      {projects}
    </section>
  );
  
}


/**
 * Displays all relevant fields of encoded information about a single
 * project! Allows for easy formalization of the look of said projects.
 */
const Project = (props) => {

  // generates a list item for each technology
  let technologies = [];
  if (props.project.technologies) {
    for (let technology of props.project.technologies) {
      technologies.push(
        <li key={technology}>
          {technology}
        </li>
      );
    }
  }

  return (
    <div className="Project">
      <h2>{props.project.name}</h2>
      <p>{props.project.description}</p>
      <ul>{technologies}</ul>
    </div>
  );
};


export default Projects;