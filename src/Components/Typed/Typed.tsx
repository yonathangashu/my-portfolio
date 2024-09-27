import Typewriter from "typewriter-effect";
import styles from "./Typed.module.css";

export const Typed = () => {
  return (
    <div className={styles.TypeEffect}>
      <Typewriter
        options={{
          strings: ["Full Stack Engineer", "Aspiring Game Developer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};
