import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "nextMotion",
  subTitle: "A sleek UI starter for an unforgettable portfolio",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Kevin Cullen",
  subTitle: "Fullstack Software Developer",
  body: `Code-hungry, experience-seeking junior full-stack developer with a passion for solving challenging problems with apps that solve challenging real-world problems.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/kevinpatrickcullen/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/kpcullen",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath:
      "https://avatars.githubusercontent.com/u/157893369?s=400&u=1f2b2f6415a6962d73ab8e51439b30af9a4d5874&v=4",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
