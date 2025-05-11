import { Projects } from "../../Data/ProjectData"
import Link from "./Links";


const ProjectArray = () => {

    return (
        <>
            {Projects.map((project) => (
                <div className="project-card" key={project.id}>
                    <div className="project-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-details">
                        <h2>{project.title}</h2>
                        {project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p className="techs"><strong>Tech Stack:</strong> {project.techStack}</p>
                        {/* <div className="project-links">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="button live-link">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                                Demo
                            </a>
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="button repo-link" >
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                                Repo
                            </a>
                        </div> */}

                        <Link demoLink={project.liveLink} repoLink={project.repoLink} />
                    </div>
                </div>
            ))}
        </>
    )
}


export default ProjectArray