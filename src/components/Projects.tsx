import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  const projects = [
    { name: "FinTech App", cat: "Mobile Dev", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { name: "Healthcare Portal", cat: "Web Dev", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
    { name: "Global Logistics", cat: "Cloud Architecture", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { name: "Smart City AI", cat: "Machine Learning", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
    { name: "E-Commerce", cat: "Platform", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#020202]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 uppercase text-white/90 z-10 mix-blend-difference">
          featured <span className="text-blue-500">projects</span>
        </h2>
        
        <motion.div style={{ x }} className="flex gap-12 w-max px-12">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="group relative w-[300px] md:w-[500px] h-[400px] md:h-[600px] overflow-hidden rounded-[2rem] shrink-0 border border-white/10"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
              <img 
                src={proj.image} 
                alt={proj.name} 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-10 left-10 z-20 overflow-hidden">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-2"
                >
                  {proj.cat}
                </motion.p>
                <motion.h3 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl text-white font-bold"
                >
                  {proj.name}
                </motion.h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
