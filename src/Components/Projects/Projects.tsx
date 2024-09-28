import styles from "./Projects.module.css";
import { ProjectBox } from "../ProjectBox/ProjectBox";
import NewsletterImage from "../../images/NewsletterImage.png";
import RogfreeImage from "../../images/RogfreeImage.png";
import TindogImage from "../../images/TindogImage.png";
import WigglesImage from "../../images/WigglesImage.png";

export const Projects = () => {
  return (
    <div>
      <h1 className={styles.projectHeading}>
        My <b>Projects</b>
      </h1>
      <div className={styles.project}>
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>
    </div>
  );
};
