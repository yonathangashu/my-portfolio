import styles from "./Technologies.module.css";
import { Skills } from "../Skills/Skills";

export const Technologies = () => {
  return (
    <div id="skills">
      <h1 className={styles.SkillsHeading}>
        <b>Skills</b>
      </h1>

      <div className={styles.skills}>
        <Skills skill="Java" />
        <Skills skill="Python" />
        <Skills skill="CSharp" />
        <Skills skill="React" />
        <Skills skill="Typescript" />
        <Skills skill="Unity" />
        <Skills skill="CSS" />
        <Skills skill="NodeJS" />
      </div>
    </div>
  );
};
