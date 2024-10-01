import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import styles from "./Typed.module.css"; 

export const Typed = () => {
  const baseStrings = [
    "Software Developer",
    "Full Stack Engineer",
    "Game Dev Hobbyist",
  ];
  const rareString = "Cat Lover (2% Chance!)";

  const [strings, setStrings] = useState(baseStrings);

  useEffect(() => {
    const randomChance = Math.random();

    if (randomChance < 0.02) {
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
          delay: 40,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};
