import styles from "./Home.module.css";
import Lottie from "lottie-react";
import SpaceBoy from "../../LottieFiles/SpaceBoy.json";
import { Typed } from "../Typed/Typed.js";

export const Home = () => {
  return (
    <div>
      <div id="home" className={styles.HomePage}>
        <div className={styles.HomeText}>
          <h1>
            <b>YONATHAN GASHU</b>
          </h1>
          <Typed />
          <a
            href="https://yonathangashu.github.io/resume/resume.pdf"
            target="_blank"
          >
            <button className={styles.homebtn}>Resume</button>
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
