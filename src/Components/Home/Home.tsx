import styles from "./Home.module.css";
import Lottie from "lottie-react";
import SpaceBoy from "../../LottieFiles/SpaceBoy.json";
import { Typed } from "../Typed/Typed.js";
import { CgFileDocument } from "react-icons/cg";

export const Home = () => {
  return (
    <div>
      <div className={styles.HomePage}>
        <div className={styles.HomeText}>
          <h1>
            <b>YONATHAN GASHU</b>
          </h1>
          <Typed />
          <a
            href="https://yonnigashu.github.io/resume/resume.pdf"
            target="_blank"
          >
            <button className={styles.homebtn}>
              <CgFileDocument /> Resume
            </button>
          </a>
        </div>

        <Lottie
          className={styles.illustration}
          animationData={SpaceBoy}
          loop={true}
        />
      </div>
    </div>
  );
};
