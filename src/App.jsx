// ============================================
// MAIN APP COMPONENT - Enhanced
// ============================================

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { useTheme } from './hooks/useTheme';
import { useEffect } from 'react';
import './App.css';

export const App = () => {
  const { mounted } = useTheme();

  // Prevent flash of wrong theme on mount
  useEffect(() => {
    if (mounted) {
      document.body.style.visibility = 'visible';
    }
  }, [mounted]);

  return (
    <>
      <Navbar />
      <CustomCursor enabled={mounted} />
      <main id="main-content" className="main-content" style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};