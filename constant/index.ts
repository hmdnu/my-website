import { sosmed } from "@/public/assets";
import { project } from "@/public/assets";

export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Project",
    link: "/project",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
];

export const skillsets = [
  {
    id: 1,
    name: "Frontend",
    skills: ["Html/Css", "React.js", "Next.js", "Tailwind", "Bootstrap"],
  },
  {
    id: 2,
    name: "Backend",
    skills: ["Node.js", "Express.js", "Mongodb"],
  },
  {
    id: 3,
    name: "Languages",
    skills: ["Html/Css", "Javascript", "Typescript"],
  },
  {
    id: 4,
    name: "Tools",
    skills: ["VS Code", "Figma", "Photoshop"],
  },
];

export const sosmeds = [
  {
    id: 1,
    name: "Facebook",
    img: sosmed.facebook,
    link: "https://web.facebook.com/dhaniuyan",
  },
  {
    id: 2,
    name: "Linkedln",
    img: sosmed.linkedln,
    link: "https://www.linkedin.com/in/hamdan-ubaidillah-116b7a247",
  },
  {
    id: 3,
    name: "Instagram",
    img: sosmed.instagram,
    link: "https://www.instagram.com/hmdnubaidillah",
  },
  {
    id: 4,
    name: "Github",
    img: sosmed.github,
    link: "https://github.com/HamdanUbaidillah",
  },
];

export const projects = [
  {
    id: 1,
    name: "Pixabay Image Finder",
    img: project.pixabayApi,
    desc: "Find image from Pixabay",
    demo: "https://pixabay-api-bay.vercel.app/index.html",
    detail: {
      img: project.pixabayApi,
      desc: "Find images from Pixabay using Pixabay's API service",
      repo: "https://github.com/HamdanUbaidillah/pixabay-api",
      demo: "https://pixabay-api-bay.vercel.app/index.html",
      techStack: ["Html", "Css", "Javasciprt"],
    },
  },
  {
    id: 2,
    name: "Berita Indo",
    img: project.beritaIndo,
    desc: "Collection of Indonesian news",
    demo: "https://hmdn-berita-indo.netlify.app",
    detail: {
      img: project.beritaIndo,
      desc: "Fetching collection of Indonesian news from CNN API",
      repo: "https://github.com/HamdanUbaidillah/berita-indo",
      demo: "https://hmdn-berita-indo.netlify.app",
      techStack: ["Javascript", "React.js", "Tailwind"],
    },
  },
  {
    id: 3,
    name: "tutorbang",
    img: project.tutorBang,
    desc: "Landing page for tutoring",
    detail: {
      img: project.tutorBang,
      desc: "A Website for finding the best tutor for affordable price, we provide many variety of softskills and hardskills",
      repo: "https://github.com/HamdanUbaidillah/tutorbang.",
      demo: "https://tutorbang.netlify.app",
      techStack: ["Javascript", "React.js", "Tailwind"],
    },
  },

  {
    id: 4,
    name: "ShareThoughts",
    img: project.shareThoughts,
    desc: "Share your thoughts to everyone",
    demo: "https://share-thoughts.vercel.app",
    detail: {
      img: project.shareThoughts,
      desc: "Login and share what you have in mind to other people",
      repo: "https://github.com/HamdanUbaidillah/ShareThoughts",
      demo: "https://share-thoughts.vercel.app",
      techStack: ["Javascript", "Next.js", "Tailwind", "Mongodb"],
    },
  },
  // {
  //   id: 5,
  //   name: "My Portofolio",
  //   img: "",
  //   desc: "My personal portofolio",
  //   demo: "",
  //   detail: {
  //     desc: "This is my personal website portofolio, you can know about my skills and my projects here",
  //     repo: "",
  //     demo: "",
  //     techStack: ["Typescript", "Next.js", "Tailwind"],
  //   },
  // },
];
