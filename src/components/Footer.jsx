// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white px-4 sm:px-10 py-8 border-t border-neutral-700 rounded-lg mt-3" >
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#fca15f]">Om Shende</h2>
          <p className="text-sm text-gray-400 mt-1">Web Developer • MongoDB • Express • React • Node</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/omshende/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fca15f] hover:text-[#e6733f] transition duration-300"
          >
            <i className="bx bxl-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com/omshende77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fca15f] hover:text-[#e6733f] transition duration-300"
          >
            <i className="bx bxl-github text-2xl"></i>
          </a>
          <a
            href="mailto:omshende1085@gmail.com"
            className="text-[#fca15f] hover:text-[#e6733f] transition duration-300"
          >
            <i className="bx bxl-gmail text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/om_shende_x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fca15f] hover:text-[#e6733f] transition duration-300"
          >
            <i className="bx bxl-instagram text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Om Shende. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
