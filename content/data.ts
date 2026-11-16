// All site text lives here. Edit this file to update the site.

export const profile = {
  name: "Prosper Ihionu",
  title: "Full-Stack Python Developer",
  tagline:
    "Backend-focused developer building clean, scalable APIs with Python & Django — and the React/Next.js frontends that use them.",
  location: "Lagos, Nigeria · Open to remote",
  github: "https://github.com/ProsperIhionu100",
  linkedin: "https://www.linkedin.com/in/prosper-ihionu-9a66372b8/",
};

export const about = [
  "I'm a full-stack developer with a strong focus on the backend. I've worked with Python and Django for over four years, and with React, Next.js and Tailwind CSS for more than two.",
  "Most recently I was the lead backend developer on Carelyo, a healthcare video-consultation platform built at SwedCon18 AB in Sweden. I built its REST API, payment gateway integration and authentication, and connected it to both a Next.js web app and a React Native mobile app.",
  "I care about clean, scalable code and enjoy working in agile teams to ship products that real users depend on.",
];

export const skillGroups: { group: string; skills: string[] }[] = [
  { group: "Languages", skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"] },
  {
    group: "Backend",
    skills: ["Django", "Django REST Framework", "FastAPI", "REST APIs", "Authentication", "Payment Gateways"],
  },
  { group: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "React Native (integration)"] },
  { group: "Databases", skills: ["PostgreSQL", "MySQL", "SQLite"] },
  { group: "DevOps & Cloud", skills: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
];

export const coreSkills = ["Python", "Django", "Django REST Framework", "PostgreSQL"];

export const traits: { title: string; text: string }[] = [
  { title: "Backend-first thinker", text: "I design data models and APIs before the UI." },
  { title: "Clean code advocate", text: "Readable, maintainable, scalable code." },
  { title: "Team player", text: "Comfortable in agile teams across web and mobile." },
  { title: "Fast learner", text: "Finished my software engineering diploma with a 4.0 GPA." },
  { title: "Ownership", text: "Led the backend of a production healthcare platform." },
  { title: "User-focused", text: "I build for the people who use the product." },
];

export const experience = [
  {
    role: "Backend Developer",
    company: "SwedCon18 AB",
    location: "Sweden",
    dates: "08/2024 – 09/2024",
    summary: "Custom software studio: backend and frontend development, UX/UI, web and mobile apps.",
    points: [
      "Led backend development for Carelyo, a healthcare video-consultation platform for hospitals, clinics, labs and pharmacies.",
      "Designed and built the REST API serving dynamic platform data.",
      "Integrated payment gateways and implemented authentication.",
      "Connected the API to a Next.js web frontend and a React Native mobile app.",
    ],
  },
];

export const education = [
  {
    title: "Diploma in Software Engineering",
    school: "NIIT",
    location: "Lagos, Nigeria",
    dates: "10/2022 – 10/2024",
    note: "GPA 4.0",
  },
];

export const projects: {
  name: string;
  summary: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}[] = [
  {
    name: "Carelyo",
    summary:
      "Healthcare video-consultation platform with management for hospitals, clinics, labs and pharmacies. I was the lead backend developer: REST API, payments and auth.",
    tech: ["Django", "DRF", "Next.js", "React Native", "Payments"],
    featured: true,
  },
  {
    name: "Jebson Store",
    summary: "Full e-commerce store with user accounts, a shopping cart and payment checkout.",
    tech: ["Django", "Python", "Payments"],
    github: "https://github.com/ProsperIhionu100/JebsonStore",
  },
  {
    name: "Banking App",
    summary: "Banking dashboard web app built with the Next.js App Router and TypeScript, with error monitoring.",
    tech: ["Next.js", "TypeScript", "shadcn/ui", "Sentry"],
    github: "https://github.com/ProsperIhionu100/banking",
  },
  {
    name: "DevSearch",
    summary: "Developer-discovery platform where developers create profiles and showcase their projects.",
    tech: ["Django", "Python", "SQLite"],
    github: "https://github.com/ProsperIhionu100/devsearch",
  },
  {
    name: "StudyBud",
    summary: "A \"mini Discord\": topic-based study rooms where users chat and collaborate.",
    tech: ["Django", "REST API"],
    github: "https://github.com/ProsperIhionu100/studybud",
  },
  {
    name: "Product Management API",
    summary: "REST API for creating, reading, updating and deleting products.",
    tech: ["Python", "Django REST Framework"],
    github: "https://github.com/ProsperIhionu100/product_manage_api",
  },
];

export const whyHireMe: { title: string; text: string }[] = [
  {
    title: "Real production experience",
    text: "Led the backend of a live healthcare platform serving web and mobile clients.",
  },
  {
    title: "Backend depth, full-stack range",
    text: "4+ years of Python/Django plus React and Next.js. I can own a feature end to end.",
  },
  {
    title: "Business-critical integrations",
    text: "Payment gateways, authentication, and REST APIs that other teams build on.",
  },
  { title: "Modern tooling", text: "Docker, Kubernetes, AWS and CI/CD." },
  { title: "Strong fundamentals", text: "Software engineering diploma with a 4.0 GPA." },
];
