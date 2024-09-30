import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

export const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  function scrollHandler() {
    setnavbarblur(window.scrollY >= 20);
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName(styles.bar);
    var ham = document.getElementsByClassName(styles.NavbarLinks);
    bar[0].classList.toggle(styles.barOne);
    bar[1].classList.toggle(styles.barTwo);
    bar[2].classList.toggle(styles.barThree);

    ham[0].classList.toggle(styles.showNavbar);
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName(styles.bar);
    var ham = document.getElementsByClassName(styles.NavbarLinks);
    bar[0].classList.remove(styles.barOne);
    bar[1].classList.remove(styles.barTwo);
    bar[2].classList.remove(styles.barThree);
    ham[0].classList.remove(styles.showNavbar);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav className={`${styles.Navbar} ${navbarblur ? styles.blur : ""}`}>
      <h1
        title="Reload"
        onClick={() => window.location.reload()}
        className={styles.Logo}
      >
        YG
      </h1>

      <div className={styles.Hamburger} onClick={showMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <ul className={styles.NavbarLinks}>
        <li onClick={hideMenu}>
          <a href="#home">
            <AiOutlineHome /> Home
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#experience">
            <BsPerson /> Experience
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#skills">
            <BsPerson /> Skills
          </a>
        </li>

        <li onClick={hideMenu}>
          <a href="#projects">
            <BsCodeSlash /> Projects
          </a>
        </li>
        <li onClick={hideMenu}>
          <a
            href="https://yonnigashu.github.io/resume/resume.pdf"
            target="_blank"
          >
            <CgFileDocument /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
