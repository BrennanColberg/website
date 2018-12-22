import React from 'react';
import projectsJSON from './assets/projects.json';

/**
 * Displays all projects encoded in ./assets/projects.json to
 * showcase my accomplishments and technological progress.
 */
const Projects = () => (
  <section className="Projects">
    {projectsJSON.map(project => (
      <Project
        project={project}
        key={project.name}
      />
    ))}
  </section>
);

/**
 * Displays all relevant fields of encoded information about a single
 * project! Allows for easy formalization of the look of said projects.
 */
const Project = (props) => (
  <div className="Project">
    <h2>{props.project.name}</h2>
    <p>{props.project.description}</p>
    <ul>
      {props.project.technologies.map(technology => (
        <li
          className={technology.toLowerCase().replace(/[ _:\/\.]+/, "-")}
          key={technology}
        >{technology}</li>
      ))}
    </ul>
  </div>
);

export default Projects;