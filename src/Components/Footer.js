import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Yonathan Gashu</h4>
      <h4>Copyright &copy; 2024 YG</h4>
      <div className="footerLinks">
        <a href="https://github.com/yonnigashu" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ygashu/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:yonathangashu@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a
          href="https://yonnigashu.github.io/resume/resume.pdf"
          target="_blank"
        >
          <CgFileDocument />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
