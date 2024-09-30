import styles from "./ProjectBox.module.css";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { Skills } from "../Skills";
import { projectsDetails } from "./constants";

type ProjectProps = {
  projectPhoto: string;
  projectName: keyof typeof projectsDetails;
};

export const ProjectBox = ({ projectPhoto, projectName }: ProjectProps) => {
  const project = projectsDetails[projectName];

  return (
    <div className={styles.projectBox}>
      <img
        className={styles.projectPhoto}
        src={projectPhoto}
        alt="Project display"
      />
      <div>
        <br />
        <h3>{separateWords(projectName)}</h3>
        <br />
        <ul>
          {project.bullets.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <br />
        <div className={styles.technologies}>
          <h4>Technologies:</h4>
          <div className={styles.techList}>
            {project.techList.map((skill, index) => (
              <Skills key={index} skill={skill} text={skill} />
            ))}
          </div>
        </div>
        <br />
        <div className={styles.buttonContainer}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className={styles.projectbtn}>
                <FaGithub /> Repository
              </button>
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <button className={styles.projectbtn}>
                <CgFileDocument /> Visit
              </button>
            </a>
          )}
        </div>

        <br />
      </div>
    </div>
  );
};
function separateWords(str: string) {
  return str.replace(/(?<=[a-z])(?=[A-Z])/g, " ");
}
