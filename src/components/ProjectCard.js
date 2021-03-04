import React from "react"


const ProjectCard = (props) => {
const {project} = props

return (
    <div id="project-card">
        <img id="project-image" src={project.img_url} />
    </div>
)


}

export default ProjectCard