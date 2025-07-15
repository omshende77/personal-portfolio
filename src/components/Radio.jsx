import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiBootstrap, SiGit, SiGithub
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "JAVA", icon: FaJava, color: "text-red-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "ReactJS", icon: SiReact, color: "text-cyan-400" },
  { name: "Node JS", icon: SiNodedotjs, color: "text-green-500" },
  { name: "ExpressJS", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
];

export default function Radio({ selected, setSelected }) {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);
  
  const options = ["Projects", "Certifications", "Tech Stacks"];

  const projects = [
    {
      image: "/build.png",
      title: "RentEase",
      status: "Completed",
      type: "Property Listings App",
      descriptionShort:
        "An Airbnb-style app with user login, property listings, reviews, and real-time database support.",
      descriptionLong:
        "A feature-rich Airbnb clone built with React and Firebase that allows users to seamlessly register, log in, add and manage property listings, and leave reviews. Includes secure authentication, personalized dashboards, listing creation, editing, deletion, and review posting—all backed by real-time database integration and robust error handling for a smooth user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Node JS", "ExpressJS", "MongoDB", "Bootstrap"],
      codeLink: "https://github.com/omshende77/Delta-demo",
      liveLink: "https://delta-demo-25y2.onrender.com/"
    },
    {
      image: "/Screenshot 2025-07-12 143812.png",
      title: "Personal Portfolio",
      status: "Completed",
      type: "Personal Project",
      descriptionShort:
        "A fully responsive portfolio website showcasing skills, projects, contact form, and smooth navigation.",
      descriptionLong:
        "A modern, fully responsive personal portfolio website showcasing my skills, projects, and professional journey. Built with React and TailwindCSS, it includes smooth navigation, well-organized sections for About, Work, Skills, and Contact. Features an integrated contact form and a clean design to make a strong impression on potential clients or employers.",
      tech: ["ReactJS", "Tailwind", "JavaScript", "Local Storage"],
      codeLink: "https://github.com/omshende77/personal-portfolio",
      liveLink: "https://portfolio-by-om.netlify.app"
    },
  ];

  return (
    <section>
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
                ${selected === option ? "bg-[#fca15f]/90 text-black scale-[0.97] shadow-inner" : "bg-black text-[#fca15f] hover:bg-[#1a1a1a] active:scale-[0.95]"}
                ${idx !== options.length - 1 ? "border-r border-[#fca15f]" : ""}
              `}
            >
              <span className={`text-sm sm:text-lg md:text-xl lg:text-2xl ${selected === option ? "font-bold" : ""}`}>
                {option}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-8xl mx-4 sm:mx-8 md:mx-12 mb-7 rounded-lg shadow-lg">
        <div className="mt-8">
          {selected === "Projects" && (
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-12">
              {projects.map((proj, idx) => (
                <div key={idx} onClick={() => setSelectedProject(proj)}>
                  <ProjectCard project={proj} />
                </div>
              ))}
            </div>
          )}
          {selected === "Certifications" && (
            <div data-aos="fade-up" className="flex flex-wrap gap-8 justify-center px-6 py-12 max-w-7xl mx-auto">
              <p className="text-white text-lg sm:text-xl">No certifications added yet.</p>
            </div>
          )}
          {selected === "Tech Stacks" && (
            <div data-aos="zoom-in-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 py-12 max-w-9xl mx-auto">
              {techStack.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group w-full">
                    <div className="bg-[#111] rounded-xl border border-[#333] p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_8px_40px_rgba(252,161,95,0.8)] transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 mb-4">
                      <Icon className={`${item.color} text-5xl sm:text-6xl md:text-7xl mb-7`} />
                      <p className="text-white text-center text-base sm:text-2xl font-bold">{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* MODAL OVERLAY for Selected Project */}
      {selectedProject && (
        <div
          data-aos="zoom-in-up"
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4 py-8 overflow-y-auto no-scrollbar"
        >
          <div className="relative max-w-2xl w-full bg-neutral-900 rounded-2xl border border-[#fca15f] shadow-[0_8px_40px_rgba(252,161,95,0.8)] p-6 sm:p-10 transition-all duration-300">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-[#fca15f] text-2xl hover:text-orange-300 transition"
            >
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-xl mb-6 object-cover max-h-80"
            />
            <h3 className="text-3xl sm:text-4xl font-bold text-[#fca15f] mb-3">{selectedProject.title}</h3>
            <p className="text-[#fca15f] text-lg italic mb-2">{selectedProject.status} · {selectedProject.type}</p>
            <p className="text-gray-300 mb-4">{selectedProject.descriptionLong}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, idx) => (
                <span key={idx} className="flex items-center gap-2 text-sm rounded-full border border-[#fca15f] px-3 py-1 bg-black">
                  {getTechIcon(tech)} {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-[#fca15f] text-black font-bold py-3 rounded-lg hover:bg-orange-400 transition"
              >
                View Code
              </a>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-[#fca15f] text-black font-bold py-3 rounded-lg hover:bg-orange-400 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Helper to get matching icon
const getTechIcon = (techName) => {
  const match = techStack.find((item) => item.name.toLowerCase().includes(techName.toLowerCase()));
  if (!match) return null;
  const Icon = match.icon;
  return <Icon className={`${match.color} text-sm`} />;
};

function ProjectCard({ project }) {
  return (
    <div className="bg-[#111] rounded-2xl border border-[#333] overflow-hidden shadow-lg hover:shadow-[0_8px_40px_rgba(252,161,95,0.8)] transition duration-300 max-w-md w-full mx-auto px-4 pt-6 transform transition-all duration-500 delay-80 hover:-translate-y-2">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
      <div className="p-3">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
        <p className="text-[#fca15f] text-lg italic mb-1">{project.status} · {project.type}</p>
        <p className="text-gray-300 text-sm mb-4">{project.descriptionShort}</p>
      </div>
    </div>
  );
}
