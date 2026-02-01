import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import FloatingParticles from './components/FloatingParticles';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <div className="bg-slate-950 text-white overflow-x-hidden">
        <CustomCursor />
        <FloatingParticles />

        <motion.div
          style={{
            y: scrollY * 0.5,
          }}
          className="fixed inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000" />
        </motion.div>

        <Navigation scrollY={scrollY} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
