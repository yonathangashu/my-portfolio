import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";

export const Footer = () => {
  return (
    <footer>
      <h4>Developed by Yonathan Gashu</h4>
      <h4>Copyright &copy; 2024 YG</h4>
      <div className={styles.footerLinks}>
        <a href="https://github.com/yonathangashu" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ygashu/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailto:yonathangashu@gmail.com">
          <SiGmail />
        </a>
        <a
          href="https://yonathangashu.github.io/resume/resume.pdf"
          target="_blank"
        >
          <CgFileDocument />
        </a>
      </div>
    </footer>
  );
};
