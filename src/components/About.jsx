import "boxicons/css/boxicons.min.css";

const About = () => {
  return (
    <section id="about">
      {/* Top Heading Section */}
      <div className="px-4 sm:px-8">
        <div
          className="relative inline-block group"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="relative inline-block pb-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              About Me
            </h2>
            <span className="pointer-events-none absolute left-0 bottom-0 h-[4px] w-full scale-x-0 origin-left bg-[#e99b63] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </div>
          <p className="mt-2 text-lg sm:text-xl text-white max-w-xl leading-relaxed">
            Transforming ideas into digital experiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-4 sm:px-8 pt-3 pb-12">
        <div className="rounded-lg shadow-lg bg-neutral-900">
          <div className="flex flex-col lg:flex-row items-start gap-12 px-6 sm:px-10 py-8">
            {/* Left Side - Intro */}
            {/* Left Side - Intro */}
            <div
              className="flex-1 rounded-2xl text-white space-y-8 px-4 sm:px-8 py-6 text-center sm:text-left items-center sm:items-start justify-center sm:justify-start"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-relaxed mb-4">
                  Hello, I'm
                  <br />
                  <span className="inline-block bg-gradient-to-r from-[#656565] to-[#e99b63] bg-clip-text text-transparent [text-shadow:0_0_15px_rgba(255,255,255,0.4)] tracking-wider">
                    Om Shende
                  </span>
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl tracking-wider leading-relaxed">
                I am an MCA student passionate about Web Development and Design.
                I focus on creating engaging, user-friendly digital experiences
                and always strive to deliver the best solution for every
                project. I enjoy turning ideas into reality using clean and
                efficient code. I love exploring new technologies, frameworks,
                and design trends to keep my work modern and effective. Whether
                collaborating in teams or working solo, I believe in continuous
                learning and growth.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-8 mt-8 justify-center sm:justify-start">
                <a
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  href="/Resume.pdf"
                  download
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-xl font-bold bg-gradient-to-r from-[#fca15f] to-[#e6733f] hover:opacity-90 transition shadow-[0_5px_40px_rgba(252,161,95,0.4)] hover:shadow-[0_8px_40px_rgba(252,161,95,0.6)] transform transition-all duration-500 delay-100 hover:-translate-y-2"
                >
                  <i className="bx bxs-download"></i> Download CV
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  href="#portfolio"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-xl font-bold border border-[#fca15f] text-[#fca15f] hover:bg-[#fca15f] hover:text-black transition shadow-[0_5px_40px_rgba(252,161,95,0.4)] hover:shadow-[0_8px_40px_rgba(252,161,95,0.6)] transform transition-all duration-500 delay-100 hover:-translate-y-2"
                >
                  <i className="bx bx-folder"></i> View Projects
                </a>
              </div>
            </div>

            {/* Right Side - Skills List */}
            <div className="flex-1 w-full lg:max-w-xl px-4">
              <ul className="space-y-8 sm:space-y-10">
                <li
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 transform transition duration-500 ease-in-out hover:scale-105"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img
                    src="/11096817.png"
                    alt="HTML5"
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Web Development
                    </h3>
                    <p className="text-base sm:text-lg text-white leading-relaxed">
                      I specialize in building responsive, modern web
                      applications with clean, maintainable code for exceptional
                      user experiences.
                    </p>
                  </div>
                </li>
                <li
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <img
                    src="/React.webp"
                    alt="React"
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      React & Frontend
                    </h3>
                    <p className="text-base sm:text-lg text-white leading-relaxed">
                      Proficient in React for creating dynamic, interactive
                      interfaces with a scalable, component-based architecture.
                    </p>
                  </div>
                </li>
                <li
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
                  data-aos="fade-left"
                  data-aos-duration="1400"
                >
                  <img
                    src="/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-web-site-social-media-png.webp"
                    alt="AI/ML"
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      AI/ML Enthusiast
                    </h3>
                    <p className="text-base sm:text-lg text-white leading-relaxed">
                      Passionate about AI and Machine Learning, exploring
                      algorithms and models that solve real-world problems with
                      data-driven insights.
                    </p>
                  </div>
                </li>
                <li
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
                  data-aos="fade-left"
                  data-aos-duration="1600"
                >
                  <img
                    src="/4637873.png"
                    alt="Continuous Learner"
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Continuous Learner
                    </h3>
                    <p className="text-base sm:text-lg text-white leading-relaxed">
                      Committed to learning new technologies and staying updated
                      with industry trends to continually improve my skills and
                      solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
