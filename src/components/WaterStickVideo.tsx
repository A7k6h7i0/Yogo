import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WaterStickVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a scroll-based animation for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  // Words for the staggered reveal effect
  const words1 = ["sofi", "measures", "the"];
  const words2 = ["impact", "of", "plants", "to"];
  const words3 = ["improve", "the", "way"];
  const words4 = ["we", "feel", "&", "sleep"];

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-black py-32 flex items-center justify-center">
      <motion.div 
        style={{ scale, opacity }}
        className="sticky top-1/2 -translate-y-1/2 w-full max-w-5xl px-6 flex flex-col items-center justify-center"
      >
        <motion.svg 
          initial={{ rotate: -90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" 
          className="mb-12"
        >
          <path d="M9.57758 0.689859C9.65294 0.347357 9.41944 0.00288095 9.06875 0.00025713C9.04586 8.58112e-05 9.02294 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C12.826 18 16.0945 15.6126 17.3968 12.2462C17.5233 11.9191 17.2878 11.5755 16.9415 11.5203C12.6485 10.837 9.36735 7.118 9.36735 2.63265C9.36735 1.96562 9.43991 1.31553 9.57758 0.689859Z" fill="white"/>
        </motion.svg>

        <div className="text-4xl md:text-6xl lg:text-7xl font-medium text-center leading-[1.2] tracking-tight flex flex-col items-center gap-2">
          
          <div className="flex flex-wrap justify-center gap-x-4">
            {words1.map((word, i) => (
              <motion.span custom={i} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} key={i} className="inline-block">{word}</motion.span>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4">
            {words2.map((word, i) => (
              <motion.span custom={i + words1.length} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} key={i} className="inline-block">{word}</motion.span>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 text-white/50">
            {words3.map((word, i) => (
              <motion.span custom={i + words1.length + words2.length} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} key={i} className="inline-block">{word}</motion.span>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 text-white/50">
            {words4.map((word, i) => (
              <motion.span custom={i + words1.length + words2.length + words3.length} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} key={i} className="inline-block">{word}</motion.span>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default WaterStickVideo;
