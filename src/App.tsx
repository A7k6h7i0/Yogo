import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Scale from './components/Scale';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Projects from './components/Projects';
import Experts from './components/Experts';
import AppShowcase from './components/AppShowcase';
import Testimonials from './components/Testimonials';
import Approach from './components/Approach';
import Infrastructure from './components/Infrastructure';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <Scale />
        <Approach />
        <TechStack />
        <Process />
        <Infrastructure />
        <Services />
        <Projects />
        <Experts />
        <AppShowcase />
        <Testimonials />
      </main>

      <footer className="bg-black text-white/40 py-12 text-center text-sm border-t border-white/10 mt-32">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} TechNova IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
