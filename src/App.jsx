import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Services from "./Components/Services";
import Sustainability from "./Components/Sustainability";
import NewsSection from "./Components/NewsSection";
import Footer from "./Components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-orange-500 selection:text-white">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <Hero />
          <Stats />
          <Services />
          <Sustainability />
          <NewsSection />
        </main>

<Footer />
        {/* Decorative background elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-900/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </>
  );
}
export default App;
