import styles from "./Contacts.module.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <div id="contact">
      <h1 className={styles.contactHeading}>
        <b>Contact</b> Me
      </h1>
      <div className={styles.contactBtnContainer}>
        <a href="https://github.com/yonathangashu" target="_blank">
          <button className={styles.contactBtn}>
            <FaGithub style={{ marginRight: "10px" }} /> Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/ygashu/" target="_blank">
          <button className={styles.contactBtn}>
            <FaLinkedin style={{ marginRight: "10px" }} /> LinkedIn
          </button>
        </a>
        <a href="mailto: yonathangashu@gmail.com">
          <button className={styles.contactBtn}>
            <SiGmail style={{ marginRight: "10px" }} /> E-Mail
          </button>
        </a>
        <a
          href="https://yonathangashu.github.io/resume/resume.pdf"
          target="_blank"
        >
          <button className={styles.contactBtn}>
            <FaFileAlt style={{ marginRight: "10px" }} /> Resume
          </button>
        </a>
      </div>
    </div>
  );
};
