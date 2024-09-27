import { IoLogoCss3 } from "react-icons/io";
import { FaGithub, FaReact, FaJava, FaPython, FaUnity } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

type SkillsProps = {
  skill:
    | "Java"
    | "Python"
    | "Javascript"
    | "React"
    | "Github"
    | "CSS"
    | "Unity";
};

export const Skills = ({ skill }: SkillsProps) => {
  const icon: Record<string, JSX.Element> = {
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
