import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-textPrimary dark:text-dark-textPrimary transition-colors duration-200">
      {/* Skip to Content for Accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                   focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl
                   focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-black focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Experience />
        <Skills />
        <Recognition />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
