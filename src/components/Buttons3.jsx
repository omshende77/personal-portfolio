const Button3 = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-8 sm:items-center">
      <a
        href="https://www.linkedin.com/in/omshende/"
        target="_blank"
        className="flex items-center justify-center gap-2 border border-orange-400 py-2 sm:py-3 px-6 sm:px-8 lg:px-10 rounded-full text-base sm:text-lg md:text-xl font-bold tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black min-w-[140px] sm:min-w-[180px] shadow-[0_5px_40px_rgba(252,161,95,0.4)]"
      >
        LINKED IN
        <img
          src="/linkedin.svg"
          alt="LinkedIn"
          className="inline-block w-6 h-6 sm:w-7 sm:h-7"
        />
      </a>

      <a
        href="https://github.com/omshende77?tab=repositories"
        target="_blank"
        className="flex items-center justify-center gap-2 border border-orange-400 py-2 sm:py-3 px-6 sm:px-8 lg:px-10 rounded-full text-base sm:text-lg md:text-xl font-bold tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black min-w-[140px] sm:min-w-[180px] shadow-[0_5px_40px_rgba(252,161,95,0.4)]"
      >
        GITHUB
        <img
          src="/github.svg"
          alt="Github"
          className="inline-block w-6 h-6 sm:w-7 sm:h-7"
        />
      </a>

      <a
        href="mailto:omshende1085@gmail.com"
        target="_blank"
        className="flex items-center justify-center gap-2 border border-orange-400 py-2 sm:py-3 px-6 sm:px-8 lg:px-10 rounded-full text-base sm:text-lg md:text-xl font-bold tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black min-w-[140px] sm:min-w-[180px] shadow-[0_5px_40px_rgba(252,161,95,0.4)]"
      >
        Contact Me
        <img
          src="/gmail.svg"
          alt="Gmail"
          className="inline-block w-6 h-6 sm:w-7 sm:h-7"
        />
      </a>
    </div>
  );
};

export default Button3;
