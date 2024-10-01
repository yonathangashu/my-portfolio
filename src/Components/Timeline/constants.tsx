import { SiVerizon } from "react-icons/si";

export const experiences = [
  {
    company: "Department of Defense",
    icon: (
      <img
        src="https://www.defense.gov/Portals/1/Images/DOD-Icon-Header.png?ver=5sAfFl2--9znca0j3SrX_g%3d%3d"
        width={40}
        height={40}
      />
    ),
    title: "Artificial Intelligence Research Intern",
    subtitle: "Washington, DC",
    description: [
      "Worked alongside senior researchers on a project investigating how knowledge graphs (KGs) can be extracted from unstructured text",
      "Collaborated with researchers on the development of a KG-RAG system to enable Knowledge Graph Question Answering (KGQA)",
      "Developed methodologies for Named Entity Recognition (NER) and Relationship Extraction (RE) to populate the KGs",
      "Wrote Python scripts using pandas & numpy for efficient processing of data from PDF to KG format",
    ],
    date: "May 2024 - Aug. 2024",
  },
  {
    company: "Department of Defense",
    icon: (
      <img
        src="https://www.defense.gov/Portals/1/Images/DOD-Icon-Header.png?ver=5sAfFl2--9znca0j3SrX_g%3d%3d"
        width={40}
        height={40}
      />
    ),
    title: "Software Engineering Intern",
    subtitle: "Washington, DC",
    description: [
      "Utilized Java to develop backend database management features for internal web application, and  integrated those functionalities into the frontend interface using VueJS",
      "Created a developer-sided API to allow for more efficient creation of test agreements/datafeeds",
      "As part of a DevOps team, supported project from requirements gathering, development, unit testing,integration testing to deployment and maintenance",
    ],
    date: "Sep. 2022 - Aug. 2023",
  },
  {
    company: "Verizon",
    icon: <SiVerizon color="#ff0000" />,
    title: "System Developer Intern",
    subtitle: "Remote",
    description: [
      "Implemented GitLab and Jenkins for streamlined continuous integration and continuous deployment (CI/CD) processes, facilitating efficient code management",
      "Acquired expertise in essential systems, encompassing DevOps practices, AWS, microservices architecture, and cloud computing solutions",
    ],
    date: "Jul. 2022 - Aug. 2022",
  },
];
