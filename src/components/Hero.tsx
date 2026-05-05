import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 5]);

  const words = [
    { text: "feel", className: "text-white" },
    { text: "better", className: "text-white/60 ml-4" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl">
        <motion.div style={{ y: textY }} className="flex flex-col items-center text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-medium tracking-tighter flex mb-8">
            {words.map((word, i) => (
              <span key={word.text} className={word.className}>
                {word.text.split('').map((char, j) => (
                  <motion.span
                    key={`${word.text}-${j}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.2 + j * 0.05
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl text-lg md:text-2xl text-white/80 leading-relaxed font-light mt-4"
          >
            we have used plants for thousands of years in our search for better wellness— sofi is charting the future of plant-based remedies
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-widest hover:bg-white/90 transition-colors">
              shop sofi
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: imageY, rotate: imageRotate }}
        className="absolute right-0 bottom-0 md:-right-10 md:-bottom-10 w-4/5 md:w-1/2 max-w-3xl z-0 pointer-events-none opacity-80 mix-blend-screen"
      >
        <motion.img 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          src="/premium_wellness_pod.png" 
          alt="Premium Sofi Pod" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
