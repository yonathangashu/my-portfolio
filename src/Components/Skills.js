import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import { FaGithub, FaReact, FaJava, FaPython, FaUnity } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const Skills = ({ skill }) => {
  const icon = {
    Java: <FaJava />,
    Python: <FaPython />,
    Javascript: <DiJavascript1 />,
    React: <FaReact />,
    Github: <FaGithub />,
    CSS: <IoLogoCss3 />,
    Unity: <FaUnity />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
