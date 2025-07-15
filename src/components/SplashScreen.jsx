import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const fullText = "© omshende.dev";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const nextChar = fullText.charAt(index);
      if (!nextChar) {
        clearInterval(interval);
        setTimeout(() => onFinish(), 500);
        return;
      }
      setDisplayedText((prev) => prev + nextChar);
      index++;
    }, 150);
    return () => clearInterval(interval);
  }, []);


//bg-gradient-to-br from-[#1a1a1a] via-[#262626] to-[#1a1a1a]           normal bg

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 sm:px-8 bg-gradient-to-br from-[#3d2a23] via-[#4b3730] to-[#3d2a23] text-white">
      {/* Icons Row */}
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-8 justify-center">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="border border-[#fca15f] drop-shadow-glow rounded-full"
        >
          <i className="bx bx-code-alt text-4xl sm:text-5xl md:text-6xl text-[#fca15f] p-3 sm:p-4"></i>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="border border-[#fca15f] drop-shadow-glow rounded-full"
        >
          <i className="bx bx-user text-4xl sm:text-5xl md:text-6xl text-[#fca15f] p-3 sm:p-4"></i>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="border border-[#fca15f] drop-shadow-glow rounded-full"
        >
          <i className="bx bx-drink text-4xl sm:text-5xl md:text-6xl text-[#fca15f] p-3 sm:p-4"></i>
        </div>
      </div>

      {/* Main Title */}
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 sm:mb-6"
      >
        Welcome To My
      </h1>
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 sm:mb-6 flex flex-wrap justify-center"
      >
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="bg-gradient-to-r from-[#fca15f] to-[#e6733f] bg-clip-text text-transparent"
        >
          Portfolio
        </span>
        <span
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gradient-to-r from-[#fca15f] to-[#e6733f] bg-clip-text text-transparent"
        >
          &nbsp;Website
        </span>
      </h1>

      {/* Footer Text with Typing Effect */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="border border-[#fca15f] drop-shadow-glow rounded-lg p-3 sm:p-4 min-h-[2rem] w-full max-w-xs sm:max-w-sm md:max-w-md text-center"
      >
        <p className="text-[#fca15f] text-lg sm:text-xl md:text-2xl opacity-80 break-words">
          {displayedText}
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
