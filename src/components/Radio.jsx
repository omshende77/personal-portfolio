import { useState } from "react";
import "boxicons/css/boxicons.min.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiDocker,
  SiHeroku,
  SiJest,
  SiVercel,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

// Centralized tech stack definitions
const techStack = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "JAVA", icon: FaJava, color: "text-red-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  //   { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "ReactJS", icon: SiReact, color: "text-cyan-400" },
  //   { name: 'Redux', icon: SiRedux, color: 'text-purple-400' },
  //   { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: "Node JS", icon: SiNodedotjs, color: "text-green-500" },
  { name: "ExpressJS", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  //   { name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
  //   { name: 'Photoshop', icon: SiAdobephotoshop, color: 'text-blue-400' },
  //   { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  //   { name: 'Heroku', icon: SiHeroku, color: 'text-purple-400' },
  //   { name: 'Jest', icon: SiJest, color: 'text-red-400' },
  //   { name: 'Vercel', icon: SiVercel, color: 'text-white' },
];

export default function Radio({ selected, setSelected }) {
  const options = ["Projects", "Certifications", "Tech Stacks"];

  const projects = [
    {
      image: "/build.png",
      title: "RentEase",
      status: "Completed",
      type: "Property Listings App",
      description:
        "A feature-rich Airbnb clone built with React and Firebase that allows users to seamlessly register, log in, add and manage property listings, and leave reviews. It includes secure authentication, personalized dashboards, listing creation, editing, deletion, and review posting – all backed by real-time database integration and robust error handling for a smooth user experience",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Bootstrap",
      ],
      link: "https://delta-demo-25y2.onrender.com/",
    },
    {
      image: "/Screenshot 2025-07-12 143812.png",
      title: "Persnal Portfolio",
      status: "Completed",
      type: "Personal Project",
      description:
        "A modern, fully responsive personal portfolio website designed to highlight my skills, projects, and professional journey. Built with HTML, CSS, JavaScript, and Bootstrap, it features smooth navigation, well-organized sections for About, Work, Skills, and Contact, as well as an integrated contact form. Includes a downloadable resume and clean, consistent styling to make a strong impression on potential clients or employers.",
      tech: ["ReactJS", "Tailwind", "JavaScript", "Local Storage"],
      link: "#",
    },
  ];

  return (
    <section>
      {/* title and description */}
      <div className="flex flex-col items-center justify-center gap-4 pt-10 px-4 pb-1">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl sm:text-5xl bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold text-center pb-5"
        >
          Portfolio Showcase
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="max-w-6xl text-base sm:text-lg text-center"
        >
          Take a journey through my work and see how I’ve grown as a developer.
          From personal projects to formal certifications, every experience has
          taught me something new. I’m excited to share the tools, technologies,
          and ideas that have helped me build solutions and bring concepts to
          life.
        </p>
      </div>

      {/* Radio buttons */}
      <div className="w-full max-w-7xl mx-auto mt-8 px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-wrap w-full border border-[#fca15f] overflow-hidden rounded-2xl bg-black shadow-lg"
        >
          {options.map((option, idx) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`
                flex-1 min-w-[100px] py-4 sm:py-6 px-2 sm:px-4 text-center
                transition-all duration-300 ease-in-out
                flex flex-col items-center gap-1
                font-semibold tracking-wide
                ${
                  selected === option
                    ? "bg-[#fca15f]/90 text-black scale-[0.97] shadow-inner"
                    : "bg-black text-[#fca15f] hover:bg-[#1a1a1a] active:scale-[0.95]"
                }
                ${idx !== options.length - 1 ? "border-r border-[#fca15f]" : ""}
              `}
            >
              <span
                className={`
    text-sm sm:text-lg md:text-xl lg:text-2xl
    ${selected === option ? "font-bold" : ""}
    whitespace-nowrap text-center w-full truncate
  `}
              >
                {option}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-8xl mx-4 sm:mx-8 md:mx-12 mb-7 rounded-lg shadow-lg">
        {/* Content */}
        <div className="mt-8">
          {/* Projects */}
          {selected === "Projects" && (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-12 "
            >
              {projects.map((proj, idx) => (
                <ProjectCard key={idx} project={proj} />
              ))}
            </div>
          )}

          {/* Certifications */}
          {selected === "Certifications" && (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="flex flex-wrap gap-8 justify-center px-6 py-12 max-w-7xl mx-auto"
            >
              <p className="text-white text-lg sm:text-xl">
                No certifications added yet.
              </p>
            </div>
          )}

          {/* Tech Stacks */}
          {selected === "Tech Stacks" && (
            <div
              data-aos="zoom-in-up"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 py-12 max-w-9xl mx-auto"
            >
              {techStack.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} data-aos="zoom-in-up" className="group w-full">
                    <div
                      className="bg-[#111] rounded-xl border border-[#333] p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_8px_40px_rgba(252,161,95,0.8)] transition-all duration-300
                      group-hover:-translate-y-3 group-hover:scale-105 mb-4"
                    >
                      <Icon
                        className={`${item.color} text-5xl sm:text-6xl md:text-7xl mb-7`}
                      />
                      <p className="text-white text-center text-base sm:text-2xl font-bold">
                        {item.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Helper to get matching icon for ProjectCard
const getTechIcon = (techName) => {
  const match = techStack.find((item) =>
    item.name.toLowerCase().includes(techName.toLowerCase())
  );
  if (!match) return null;
  const Icon = match.icon;
  return <Icon className={`${match.color} text-sm`} />;
};

function ProjectCard({ project }) {
  return (
    <div className="bg-[#111] rounded-2xl border border-[#333] overflow-hidden shadow-lg transition duration-300 max-w-md w-full mx-auto px-4 pt-6 hover:shadow-[0_8px_40px_rgba(252,161,95,0.8)] transform transition-all duration-500 delay-80 hover:-translate-y-2">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-3">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          {project.title}
        </h3>
        <p className="text-[#fca15f] text-lg italic mb-1">
          {project.status} · {project.type}
        </p>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 text-sm rounded-full border border-[#fca15f] px-3 py-1 bg-black"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="hover:underline flex items-center gap-1 text-sm"
        >
          View Project ↗
        </a>
      </div>
    </div>
  );
}
