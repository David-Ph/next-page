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
  image_url: string;
};

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "DOTA Inhouse Balancer",
    image_url: "/projects/tindota.png",
    description:
      "A balanced matchmaking system for a DOTA Inhouse (A 5v5 premade game done within a community) discord server.",
    github: "https://github.com/David-Ph/next-tindota",
    techs: ["Javascript", "Next JS", "OpenDOTA API", "Material UI", "React"],
  },
  {
    id: 2,
    title: "WedSpot",
    image_url: "/projects/wedspot.png",
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
    image_url: "/projects/coffee.png",
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
    image_url: "/projects/themovienow.png",
    description:
      "API for an app for users to keep up with the latest movies and create reviews.",
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
    image_url: "/projects/warehouse.png",
    description: "A web application to manage stocks of warehouse items. ",
    github: "https://github.com/David-Ph/glints-assessment",
    techs: ["Javascript", "MongoDB", "ExpressJS", "NodeJS", "Bulma"],
  },
];

export type IExperience = {
  id: number;
  date: string;
  title: string;
  company: string;
  descriptions: string[];
};

export const EXPERIENCES: IExperience[] = [
  {
    id: 1,
    date: "November 2021 - December 2022",
    title: "Junior Software Developer",
    company: "ZenRooms",
    descriptions: [
      "Engineered and maintained various products using ReactJS, RxJS, Redux, Laravel, and Golang.",
      "Wrote unit tests for various projects to maintain product reliability.",
      "Improved SEO of websites by refactoring codes and significantly improving website performance score.",
      "Fix issues and bugs reported by the support team.",
    ],
  },
  {
    id: 2,
    date: "June 2021 - September 2021",
    title: "Back-End Developer Trainee",
    company: "Glints Academy",
    descriptions: [
      "Designed databases and developed reliable and easy-to-use RESTful API for 4 projects.",
      "Divided tasks for team members according to their ability and offered help when needed to secure project completion.",
      "Coordinated communications across all teams to make sure everyone is always up to date.",
    ],
  },
  {
    id: 3,
    date: "May 2015 - June 2021",
    title: "IT Technician",
    company: "Force Komputer",
    descriptions: [
      "Installed and fixed electronics related to network and communication including but not limited to computer, laptop, printer, CCTV, and fingerprint scanner.",
      "Introduced several new methods of installing or fixing electronics in order to save hours of works.",
      "Provide long term technical support for customers.",
    ],
  },
];

export type ITechStack = {
  id: number;
  image_url: string;
  name: string;
};

export const TECH_STACK: ITechStack[] = [
  {
    id: 1,
    image_url: "/techs/javascript.png",
    name: "Javascript",
  },
  {
    id: 2,
    image_url: "/techs/react.png",
    name: "ReactJS",
  },
  {
    id: 3,
    image_url: "/techs/typescript.png",
    name: "Typescript",
  },
  {
    id: 4,
    image_url: "/techs/nextjs.png",
    name: "NextJS",
  },
  {
    id: 5,
    image_url: "/techs/material.png",
    name: "Material UI",
  },
  {
    id: 6,
    image_url: "/techs/tailwind.png",
    name: "Tailwind UI",
  },
  {
    id: 7,
    image_url: "/techs/bootstrap.png",
    name: "Bootstrap UI",
  },
  {
    id: 8,
    image_url: "/techs/mongodb.png",
    name: "MongoDB",
  },
  {
    id: 9,
    image_url: "/techs/laravel.png",
    name: "Laravel",
  },
  {
    id: 10,
    image_url: "/techs/postgresql.png",
    name: "PostgreSQL",
  },
  {
    id: 11,
    image_url: "/techs/nodejs.png",
    name: "NodeJS",
  },
  {
    id: 12,
    image_url: "/techs/golang.png",
    name: "Golang",
  },
];
