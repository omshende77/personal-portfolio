import "boxicons/css/boxicons.min.css";
import myPhoto from "../assets/my-photo.jpg";

const Header = ({ setSelectedSection }) => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  const navLinks = [
    { text: "ABOUT", delay: 400, href: "#about" },
    { text: "PORTFOLIO", delay: 600, href: "#portfolio", select: "Projects" },
    { text: "SKILLS", delay: 800, href: "#portfolio", select: "Tech Stacks" },
    { text: "CONTACT", delay: 1000, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111] flex justify-between items-center py-4 px-4 lg:px-8 backdrop-blur-md">
      {/* Logo + Name (clickable link to hero) */}
      <a href="#hero" className="flex items-center gap-3">
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          className="inline-block rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] p-[2px] shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        >
          <img
            src={myPhoto}
            alt="Om Shende"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <h1
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-orange-300"
        >
          Om Shende
        </h1>
      </a>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 lg:gap-12">
        {navLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            onClick={() => {
              if (link.select) setSelectedSection(link.select);
            }}
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay={link.delay}
            className="group relative text-lg sm:text-xl md:text-2xl tracking-wide text-white transition-colors duration-300 ease-in hover:text-[#e99b63] z-50"
          >
            {link.text}
            <span className="pointer-events-none absolute left-0 -bottom-2 h-[2px] w-full scale-x-0 origin-center bg-[#e99b63] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50 text-white"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 md:hidden z-40 mt-6"
      >
        <nav className="flex flex-col gap-4 h-full mt-6 mx-6">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              onClick={() => {
                if (link.select) setSelectedSection(link.select);
                toggleMobileMenu();
              }}
              className="block w-full text-left bg-gray-800 text-white text-lg px-4 py-3 rounded-md hover:bg-[#e99b63] transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
