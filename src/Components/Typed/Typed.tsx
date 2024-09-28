import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect"; // Make sure to import Typewriter
import styles from "./Typed.module.css"; // Adjust to your actual styles file

export const Typed = () => {
  const baseStrings = [
    "Software Developer",
    "Full Stack Engineer",
    "Game Dev Hobbyist",
  ];
  const rareString = "Cat Lover (5% Chance!)";

  const [strings, setStrings] = useState(baseStrings);

  useEffect(() => {
    const randomChance = Math.random();

    if (randomChance < 0.05) {
      setStrings([...baseStrings, rareString]);
    } else {
      setStrings(baseStrings);
    }
  }, []);

  return (
    <div className={styles.TypeEffect}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};
