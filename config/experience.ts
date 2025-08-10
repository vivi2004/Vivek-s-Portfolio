import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ubs",
    position: "Application Developer Intern",
    company: "Boomm",
    location: "Mumbai, India(Remote)",
    startDate: new Date("2025-07-01"),
    endDate: "Present",
    description: [
      "Developing and maintaining core features of Boomm’s cross-platform mobile application using React Native.",
      "Integrating RESTful APIs and optimizing state management for seamless user experiences.",
      "Collaborating with backend developers to ensure smooth data flow and real-time updates across the app.",
    ],
    achievements: [
      "Delivered production-ready features within the first month, improving user engagement and retention.",
      "Optimized app performance by reducing load times and improving navigation transitions.",
      "Implemented responsive UI components using React Native and styled-components for consistent cross-device design.",
      "Integrated third-party APIs for enhanced functionality, including push notifications and real-time data updates.",
      "Worked closely with designers and QA engineers to refine UI/UX and ensure bug-free releases.",
    ],

    skills: ["Typescript", "React Native", "Databricks", "Python"],
    companyUrl: "https://boomm.in/",
    logo: "/logo.png",
  },
];
