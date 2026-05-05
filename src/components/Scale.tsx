import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scale = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 2, 1, 2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.1, 0.8, 0.1, 0.8, 0.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        
        {/* Abstract Tech Node */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl"
        />
        
        <motion.div 
          style={{ scale: useTransform(scale, s => s * 0.8), opacity, rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
          className="absolute w-[250px] h-[250px] border border-blue-500/20 rounded-lg flex items-center justify-center"
        >
          <div className="w-[180px] h-[180px] border border-cyan-400/20 rounded-full rotate-45"></div>
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 text-center px-6 mix-blend-difference">
          <h2 className="text-5xl md:text-8xl font-bold tracking-widest uppercase mb-6 text-white">
            infinitely <br/>
            <span className="text-blue-500 font-medium">scalable</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/60 font-light leading-relaxed">
            robust architecture is the foundation of digital success. we engineer systems designed to handle millions of requests with zero downtime.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Scale;
