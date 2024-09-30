import styles from "./Experience.module.css";
import { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaInfoCircle, FaChevronUp } from "react-icons/fa";

type ExperienceProps = {
  company: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string[];
  date: string;
};

export const Experience = ({
  company,
  icon,
  title,
  subtitle,
  description,
  date,
}: ExperienceProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#9067c6",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #9067c6" }}
      iconStyle={{ background: "#081825", color: "#fff" }}
      icon={icon}
      date={date}
    >
      <h3 className="vertical-timeline-element-title">{company}</h3>
      <h4 className="vertical-timeline-element-subtitle">{title}</h4>
      <h5 className="vertical-timeline-element-subtitle">{subtitle}</h5>

      <button onClick={toggleDropdown} className={styles.ToggleButton}>
        {isOpen ? <FaChevronUp /> : <FaInfoCircle />}
      </button>

      {/* Dropdown description */}
      <div className={`${styles.DropdownWrapper} ${isOpen ? styles.Open : ""}`}>
        <div className={styles.DropdownContent}>
          <ul>
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
