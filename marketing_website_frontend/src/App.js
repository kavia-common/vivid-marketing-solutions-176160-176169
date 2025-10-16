import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { sections, scrollToId, theme } from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// PUBLIC_INTERFACE
function App() {
  const [active, setActive] = useState(sections.home);

  // Observe section visibility to update active nav state
  useEffect(() => {
    const ids = Object.values(sections);
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setActive(id);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // PUBLIC_INTERFACE
  const handleNavClick = (id) => {
    scrollToId(id);
  };

  // Apply light theme background
  useEffect(() => {
    document.body.style.background = theme.colors.background;
  }, []);

  return (
    <div>
      <Navbar active={active} onNavClick={handleNavClick} />
      <main>
        <Hero id={sections.home} onPrimaryCta={() => handleNavClick(sections.services)} onSecondaryCta={() => handleNavClick(sections.contact)} />
        <Services id={sections.services} />
        <Testimonials id={sections.testimonials} />
        <Contact id={sections.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
