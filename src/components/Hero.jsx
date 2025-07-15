import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import Type from "./Type.jsx";
import { FiFolder, FiMail } from "react-icons/fi";
import Button3 from "./Buttons3.jsx";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact className="text-[#61DBFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#f0db4f]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#68A063]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
];

const Hero = ({ setSelectedSection }) => {
  return (
    <section id="hero">
      <div className="relative overflow-hidden mb-20 mt-12 flex flex-col-reverse lg:flex-row min-h-[calc(90vh-6rem)] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-16 xl:py-4">
        {/* Left content */}
        <div className="w-full lg:w-7/12 xl:w-2/3 mt-12 sm:mt-14 md:mt-16 lg:mt-20 z-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-relaxed"
          >
            FRONTEND
            <br />
            <span className="bg-gradient-to-r from-[#656565] to-[#e99b63] bg-clip-text text-transparent [text-shadow:0_0_15px_rgba(255,255,255,0.4)] tracking-wider">
              DEVELOPER
            </span>
          </h1>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <Type />
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className="text-base sm:text-lg md:text-xl text-gray-400 w-full font-normal tracking-wider mb-6 sm:mb-8 text-glow-orange"
          >
            Designing and developing innovative, functional, and user-friendly
            websites that deliver exceptional, immersive, and memorable digital
            experiences.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={`${600 + index * 150}`}
                className="px-6 sm:px-8 md:px-10 py-2 bg-[#ffffff14] border border-orange-400 text-base sm:text-lg md:text-xl rounded-lg shadow-[0_5px_40px_rgba(252,161,95,0.4)] hover:shadow-[0_8px_40px_rgba(252,161,95,0.6)] transform transition-all duration-500 delay-100 hover:-translate-y-2"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
            className="flex gap-4 sm:gap-6 mb-12 flex-wrap"
          >
            <button
              onClick={() => {
                setSelectedSection("Projects");
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-8 sm:px-10 md:px-14 py-2 sm:py-3 text-base sm:text-lg md:text-xl rounded-lg border border-orange-500 bg-orange-400 hover:bg-orange-500/40 shadow-[0_5px_20px_rgba(252,161,95,0.4)] hover:shadow-[0_8px_40px_rgba(252,161,95,0.7)] transform transition-all duration-500 hover:delay-100 hover:-translate-y-2"
            >
              Projects
              <FiFolder className="text-xl sm:text-2xl" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-8 sm:px-10 md:px-14 py-2 sm:py-3 text-base sm:text-lg md:text-xl rounded-lg border border-orange-500 bg-orange-400 hover:bg-orange-500/40 shadow-[0_5px_20px_rgba(252,161,95,0.4)] hover:shadow-[0_8px_40px_rgba(252,161,95,0.7)] transform transition-all duration-500 hover:delay-100 hover:-translate-y-2"
            >
              Contact
              <FiMail className="text-xl sm:text-2xl" />
            </button>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
            <Button3 />
          </div>
        </div>

        {/* Spline 3D model */}
        <div
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-duration="1000"
          className="w-full lg:w-6/12 xl:w-7/12 relative -mt-6 sm:-mt-10 lg:-mt-12 h-[35rem] sm:h-[40rem] md:h-[45rem] lg:w-[55%] xl:w-[60%]"
        >
          <Spline
            className="absolute inset-0 w-full h-full"
            scene="https://prod.spline.design/B35xwli5XD05PKlw/scene.splinecode"
          />
        </div>

        {/* Background Gradient Image */}
        <img
          className="absolute top-0 left-0 w-full max-h-[35rem] object-cover opacity-50 sm:opacity-60 -z-10 pointer-events-none"
          src="/gradient.png"
          alt="Gradient"
        />
      </div>
    </section>
  );
};

export default Hero;
