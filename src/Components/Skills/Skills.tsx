import styles from "./Skills.module.css";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaJava, FaPython, FaUnity, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

type SkillsProps = {
  skill:
    | "Java"
    | "Python"
    | "Typescript"
    | "React"
    | "Github"
    | "CSS"
    | "Unity"
    | "NodeJS"
    | "CSharp";
  text?: string;
};

export const Skills = ({ skill, text }: SkillsProps) => {
  const icon: Record<string, JSX.Element> = {
    Java: <FaJava />,
    Python: <FaPython />,
    Typescript: <SiTypescript />,
    React: <FaReact />,
    CSS: <IoLogoCss3 />,
    Unity: <FaUnity />,
    NodeJS: <FaNodeJs />,
    CSharp: <TbBrandCSharp />,
  };

  return (
    <div title={skill} className={text ? styles.textSkillBox : styles.SkillBox}>
      {icon[skill]}
      {text && <span>{text}</span>}
    </div>
  );
};
