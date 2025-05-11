import { FaLinux, FaGithub } from "react-icons/fa";
import { DiWindows } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { SiJira, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const Tools = (idName="", isAreaHidden) => {
    
    return (
        <ul id={idName} aria-hidden={isAreaHidden}>
            <li>
                <div className="tool-icon"><FaLinux /></div>
            </li>
            <li>
                <div className="tool-icon"><DiWindows /></div>
            </li>
            <li>
                <div className="tool-icon"><FaGithub /></div>
            </li>
            <li>
                <div className="tool-icon"><IoLogoVercel /></div>
            </li>
            <li>
                <div className="tool-icon"><VscVscode /></div>
            </li>
            <li>
                <div className="tool-icon"><SiJira  /></div>
            </li>
            <li>
                <div className="tool-icon"><SiIntellijidea  /></div>
            </li>
        </ul>
    )
}


export default Tools;