import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

type ProjectProps = {
  projectPhoto: string;
  projectName: keyof typeof desc;
};

const desc = {
  Tindog: {
    description:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    github: "https://github.com/DevanshSahni/tindog",
    website: "https://devanshsahni.github.io/tindog/",
  },
  RogFree: {
    description:
      "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    github: "https://github.com/DevanshSahni/Rog-Free",
    website: "https://devanshsahni.github.io/Rog-Free/",
  },
  Newsletter: {
    description:
      "A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    github: "",
    website: "https://newsletter-signup-teal.vercel.app/",
  },
  Wiggles: {
    description:
      "An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    github: "https://github.com/DevanshSahni/Wiggles",
    website: "https://wiggles.vercel.app/",
  },
} as const;
export const ProjectBox = ({ projectPhoto, projectName }: ProjectProps) => {
  const project = desc[projectName];

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{project.description}</p>
        <br />
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        )}
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};
