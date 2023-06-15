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

export const skills = {
  frontend: ["Html/Css", "React.js", "Next.js", "Tailwind", "Bootstrap"],
  backend: ["Node.js", "Express.js", "Mongodb"],
  language: ["Javascript", "Typescript"],
  Tools: ["VS Code", "Figma", "Photoshop"],
};

export const sosmeds = [
  {
    id: 1,
    name: "Facebook",
    img: sosmed.facebook,
  },
  {
    id: 2,
    name: "Linkedln",
    img: sosmed.linkedln,
  },
  {
    id: 3,
    name: "Instagram",
    img: sosmed.instagram,
  },
  {
    id: 4,
    name: "Github",
    img: sosmed.github,
  },
];

export const projects = [
  {
    id: 1,
    name: "Pixabay Image Finder",
    img: project.pixabayApi,
    desc: "Find image from Pixabay",
    demo: "https://pixabay-api-bay.vercel.app/index.html",
    detail: [
      {
        desc: "Find images from Pixabay using Pixabay's API service",
        repo: "https://github.com/HamdanUbaidillah/pixabay-api",
        demo: "https://pixabay-api-bay.vercel.app/index.html",
      },
    ],
    techStack: ["Html", "Css", "Javasciprt"],
  },
  {
    id: 2,
    name: "Berita Indo",
    img: project.beritaIndo,
    desc: "Collection of Indonesian news",
    demo: "https://hmdn-berita-indo.netlify.app/",
    detail: [
      {
        desc: "Fetching collection of Indonesian news from CNN API",
        repo: "https://github.com/HamdanUbaidillah/berita-indo",
        demo: "https://hmdn-berita-indo.netlify.app/",
      },
    ],
    techStack: ["Javascript", "React.js", "Tailwind"],
  },
  {
    id: 3,
    name: "tutorbang",
    img: project.tutorBang,
    desc: "Landing page for tutoring",
    detail: [
      {
        desc: "Find your best tutor for affordable price with modern teaching method, can be online nor offline",
        repo: "https://github.com/HamdanUbaidillah/tutorbang.",
        demo: "https://tutorbang.netlify.app",
      },
    ],
    techStack: ["Javascript", "React.js", "Tailwind"],
  },

  {
    id: 4,
    name: "ShareThoughts",
    img: project.shareThoughts,
    desc: "Share your thoughts to everyone",
    demo: "https://share-thoughts.vercel.app",
    detail: [
      {
        desc: "Login and share what you have in mind to other people",
        repo: "https://github.com/HamdanUbaidillah/ShareThoughts",
        demo: "https://share-thoughts.vercel.app",
      },
    ],
    techStack: ["Javascript", "Next.js", "Tailwind", "Mongodb"],
  },
  {
    id: 5,
    name: "My Portofolio",
    img: "",
    desc: "My personal portofolio",
    demo: "",
    detail: [
      {
        desc: "This is my personal website portofolio, you can know about my skills and my projects here",
        repo: "",
        demo: "",
      },
    ],
    techStack: ["Typescript", "Next.js", "Tailwind"],
  },
];
