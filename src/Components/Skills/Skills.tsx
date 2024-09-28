import styles from "./Skills.module.css";
import { IoLogoCss3 } from "react-icons/io";
import {
  FaGithub,
  FaReact,
  FaJava,
  FaPython,
  FaUnity,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

type SkillsProps = {
  skill:
    | "Java"
    | "Python"
    | "Typescript"
    | "React"
    | "Github"
    | "CSS"
    | "Unity"
    | "NodeJS";
};

export const Skills = ({ skill }: SkillsProps) => {
  const icon: Record<string, JSX.Element> = {
    Java: <FaJava />,
    Python: <FaPython />,
    Typescript: <SiTypescript />,
    React: <FaReact />,
    CSS: <IoLogoCss3 />,
    Unity: <FaUnity />,
    NodeJS: <FaNodeJs />,
  };

  return (
    <div title={skill} className={styles.SkillBox}>
      {icon[skill]}
    </div>
  );
};
