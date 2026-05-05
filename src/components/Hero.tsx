import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const words = [
    { text: "build", className: "text-white font-medium" },
    { text: "scale", className: "text-blue-500 ml-4 font-bold" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#020202]">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl">
        <motion.div style={{ y: textY }} className="flex flex-col items-center text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter flex mb-8">
            {words.map((word, i) => (
              <span key={word.text} className={word.className}>
                {word.text.split('').map((char, j) => (
                  <motion.span
                    key={`${word.text}-${j}`}
                    initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.2 + j * 0.08
                    }}
                    className="inline-block uppercase"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="max-w-2xl text-lg md:text-2xl text-white/70 leading-relaxed font-light mt-8"
          >
            we engineer scalable enterprise software and provide elite IT consulting. accelerate your digital transformation with future-proof architecture.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex gap-4"
          >
            <a href="#" className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-blue-600 text-white font-semibold text-sm uppercase tracking-widest hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              our services
            </a>
            <a href="#" className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-white/10 text-white font-semibold text-sm uppercase tracking-widest hover:bg-white/20 transition-colors border border-white/10">
              consulting
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: imageY }}
        className="absolute right-0 bottom-0 md:-right-10 md:-bottom-20 w-4/5 md:w-1/2 max-w-4xl z-0 pointer-events-none opacity-50 mix-blend-screen"
      >
        <motion.img 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
          alt="Server Infrastructure" 
          className="w-full h-auto object-contain drop-shadow-2xl rounded-tl-[4rem] mask-image-linear"
          style={{ WebkitMaskImage: "linear-gradient(to top, transparent, black)" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
