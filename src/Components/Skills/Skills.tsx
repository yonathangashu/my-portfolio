import styles from "./Skills.module.css";
import { useRef } from "react";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaJava, FaPython, FaUnity, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import typeStyles from "../Typed/Typed.module.css";

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
  small?: boolean;
};

export const Skills = ({ skill, small }: SkillsProps) => {
  const typwriterRef = useRef<TypewriterClass>();

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

  const handleMouseEnter = () => {
    typwriterRef.current?.typeString(skill).start();
  };

  const handleMouseLeave = () => {
    typwriterRef.current?.deleteAll(50).start();
  };

  return (
    <div
      title={skill}
      className={small ? styles.textSkillBox : styles.SkillBox}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon[skill]}
      {small && <span>{skill}</span>}
      {!small && (
        <div className={typeStyles.SkillsTypeEffect}>
          <Typewriter
            onInit={(typ) => {
              typwriterRef.current = typ;
            }}
            options={{
              autoStart: false,
              loop: false,
              cursor: "",
              delay: 75,
            }}
          />
        </div>
      )}
    </div>
  );
};
