import React, { useRef, useEffect } from "react";
import "../public/css/SkillPage.css";
import IconContainer from "../components/skills/IconContainer";
import Tools from "../components/skills/ToolIcon";


const SkillPage = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    document.title = 'Skills | Harsh Agrawal Portfolio';
  }, []);

  return (
    <div className="skill-page">
      <h2 className="left-heading">
        <span className="head-color">Skills </span>
        I learn
      </h2>
      
      <IconContainer />

      <h2 className="left-heading">
        <span className="head-color">Tools </span>
        I uses
      </h2>
      <div className="dev-tools-container">
        <div className="dev-tools-row" ref={scrollRef}>

          <div class="stock-ticker" >
            
            <Tools />
            <Tools idName="Second-half" isAreaHidden="true" />

          </div>

        </div>
      </div>
    </div>
  );
};


export default SkillPage;
