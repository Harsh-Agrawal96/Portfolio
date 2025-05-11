import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactIcon from "./ContactIcon.jsx";


const SocialIcon = () => {

    return (
        <div className="contact-icons">
            <ContactIcon href="mailto:your.email@example.com">
                <MdEmail />
            </ContactIcon>

            <ContactIcon href="https://github.com/yourusername">
                <FaGithub />
            </ContactIcon>

            <ContactIcon href="https://linkedin.com/in/yourusername">
                <FaLinkedin />
            </ContactIcon>
        </div>
    )
}


export default SocialIcon;