import styles from "./Technologies.module.css";
import { Skills } from "../Skills/Skills";

export const Technologies = () => {
  return (
    <>
      <h1 className={styles.SkillsHeading}>Professional Skillset</h1>

      <div className={styles.skills}>
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
