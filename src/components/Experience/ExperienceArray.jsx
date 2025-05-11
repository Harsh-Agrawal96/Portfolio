import { Experiences } from "../../Data/ExperienceData.js";


const ExperienceArr = () => {

    return (
        <>
            {Experiences.map((exp) => (
                <div className="experience-card" key={exp.id}>

                    {/* Role & Company Period */}
                    <div className="experience-header">
                        <div className="experience-role">
                            <strong>{exp.role}</strong> @ {exp.company}
                        </div>
                        <div className="experience-period">{exp.period}</div>
                    </div>
            
                    {/* Logo and Work Done */}
                    <div className="experience-body">
                        <div className="experience-logo">
                            <img src={exp.logo} alt={`${exp.company} logo`} />
                        </div>
                        <div className="experience-details">
                            {exp.work.map((task, index) => (
                                <p key={index}>{task}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
        
    )
}


export default ExperienceArr