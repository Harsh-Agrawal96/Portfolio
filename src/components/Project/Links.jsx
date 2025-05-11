import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Link = (demoLink, repoLink) => {

    return (
        <div className="project-links">
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="button live-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                Demo
            </a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="button repo-link" >
                <FontAwesomeIcon icon={faGithub} className="icon" />
                Repo
            </a>
        </div>
    )
}


export default Link;