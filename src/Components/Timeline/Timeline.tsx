import styles from "./Timeline.module.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "../Experience";
import { experiences } from "./constants";

export const Timeline = () => {
  return (
    <div id="experience">
      <h1 className={styles.TimelineHeading}>
        <b>Experience</b>
      </h1>
      <div className={styles.Timeline}>
        <VerticalTimeline
          layout="1-column-left"
          animate={false}
          lineColor="#9067c6"
        >
          {experiences.map((experience, index) => (
            <Experience
              key={index}
              company={experience.company}
              icon={experience.icon}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              date={experience.date}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
