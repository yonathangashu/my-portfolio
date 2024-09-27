import React from "react";
import Skills from "./Skills.js";

const Technologies = () => {
  return (
    <>
      <h1 className="SkillsHeading">Professional Skillset</h1>

      <div className="skills">
        <Skills skill="Python" />
        <Skills skill="Java" />
        <Skills skill="CSS" />
        <Skills skill="React" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Unity" />
      </div>
    </>
  );
};

export default Technologies;
