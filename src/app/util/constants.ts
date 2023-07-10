export const PAGE_SECTION = {
  INTRO: "intro",
  INFO: "info",
  EXPERIENCE: "experience",
  TECH_STACK: "tech_stack",
  PROJECT: "project",
  CONTACT: "contact",
};

export const JOB_TITLE_TEXTS = [
  "Fullstack Web Developer",
  "Frontend Developer",
  "Software Developer",
];

export type IProject = {
  id: number;
  title: string;
  techs: string[];
  github: string;
  description: string;
};

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "DOTA Inhouse Balancer",
    description:
      "A balanced matchmaking system for a DOTA Inhouse ( A 5v5 premade game done within a community) discord server.",
    github: "https://github.com/David-Ph/next-tindota",
    techs: ["Javascript", "Next JS", "OpenDOTA API", "Material UI", "React"],
  },
  {
    id: 2,
    title: "WedSpot",
    description:
      "A Web Application for couples to find the perfect vendor for their dream wedding. ",
    github: "https://github.com/David-Ph/WedSpot",
    techs: [
      "Javascript",
      "MongoDB",
      "ExpressJS",
      "Firebase",
      "NodeJS",
      "Passport",
    ],
  },
  {
    id: 3,
    title: "Good Omens Coffee",
    description:
      "A coffee shop website for visitors to browse and order their favorite coffee beans. ",
    github: "https://github.com/David-Ph/good-omens-coffee",
    techs: [
      "Javascript",
      "MongoDB",
      "ExpressJS",
      "EJS",
      "NodeJS",
      "Passport",
      "Bootstrap",
    ],
  },
  {
    id: 4,
    title: "The Movie Now",
    description:
      "API for an app for users to keep up with the latest movies and create reviews ",
    github: "https://github.com/David-Ph/TheMovieNow",
    techs: [
      "Javascript",
      "MongoDB",
      "ExpressJS",
      "Firebase",
      "NodeJS",
      "Passport",
    ],
  },
  {
    id: 5,
    title: "Warehouse",
    description: "A web application to manage stocks of warehouse items ",
    github: "https://github.com/David-Ph/glints-assessment",
    techs: ["Javascript", "MongoDB", "ExpressJS", "NodeJS"],
  },
];
