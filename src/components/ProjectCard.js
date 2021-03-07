import React from "react";

const ProjectCard = (props) => {
  const { project } = props;

  return (
    <div id="project-card">
      <div id="project-box">
        <div id="image-box">
          <img id="project-image" src={project.img_url} alt={project.title} />
        </div>
        <h5 id="project-header">{project.title}</h5>
        <div id="project-buttons">
          <a href={project.github}>
            <button className="project-button">GitHub Repo</button>
          </a>
          <a id="last-project-button" href={project.live}>
            <button className="project-button">Live Site</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
