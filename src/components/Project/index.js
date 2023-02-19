import React from "react";
import projects from "../projects.json";
import ProjectGallery from "../Project-gallery";

function Project() {
    return (
        <div className="grid">
            <div className="project-name">
                    <h2>Projects</h2>
                </div>
            {projects.map(project => (
                <ProjectGallery
                    imgUrl={project.imgUrl}
                    title={project.title}
                    link={project.link}
                    live={project.live}
                    text={project.text}
                    />
            ))}
        </div>
    )
}

export default Project;