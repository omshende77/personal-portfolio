import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Radio from "./components/Radio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SplashScreen from "./components/Splashscreen.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const [selectedSection, setSelectedSection] = useState("Projects");

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <main className="relative overflow-x-hidden scroll-smooth">
      {/* Global orange glow effect */}
      <div className="absolute top-[20%] right-[-5%] w-[40rem] h-0 shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      {/* Site Sections with IDs for smooth scrolling */}
      <Header setSelectedSection={setSelectedSection} />
  
      <section id="hero">
        <Hero setSelectedSection={setSelectedSection} />
      </section>
    
      <section id="about">
        <About setSelectedSection={setSelectedSection}/>
      </section>
     
      <section id="portfolio">
        <Radio selected={selectedSection} setSelected={setSelectedSection} />
      </section>
    
      <section id="contact">
        <Contact />
      </section>
 
      <Footer />
    </main>
  );
}
