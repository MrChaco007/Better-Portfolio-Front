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
        {project.title === "PC Builder Full Stack App (MERN)"? null :<br />}
        <div id="project-buttons" className={project.title === "PC Builder Full Stack App (MERN)"? "special-project-buttons":null}>
          <a target="_blank" href={project.github}>
            <button className="project-button">GitHub Repo</button>
          </a>
          <a target="_blank" id="last-project-button" href={project.live}>
            <button className="project-button">Live Site</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
