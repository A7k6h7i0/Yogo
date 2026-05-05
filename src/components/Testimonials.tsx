import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);

  const reviews = [
    { text: "TechNova completely transformed our legacy infrastructure. We've seen a 300% increase in load capacity.", author: "Elena R., CTO" },
    { text: "The custom CRM they built seamlessly integrated with our operations. Outstanding engineering talent.", author: "Marcus T., VP of Product" },
    { text: "Their approach to cloud migration was flawless. Zero downtime and massive cost savings on AWS.", author: "Sophia W., Lead Architect" },
    { text: "We needed a scalable microservices backend in Rust. TechNova delivered beyond expectations.", author: "Julian H., Founder" },
    { text: "TechNova completely transformed our legacy infrastructure. We've seen a 300% increase in load capacity.", author: "Elena R., CTO" },
    { text: "The custom CRM they built seamlessly integrated with our operations. Outstanding engineering talent.", author: "Marcus T., VP of Product" },
  ];

  return (
    <section ref={containerRef} className="bg-[#020202] py-32 text-white relative overflow-hidden border-t border-white/5">
      <div className="mb-24 px-6 md:px-12 text-center">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">Client <span className="text-blue-500">Success</span></h2>
        <p className="text-white/50 mt-6 text-xl font-light max-w-2xl mx-auto">See how we've helped leading enterprises scale their operations and dominate their markets.</p>
      </div>

      <motion.div style={{ x }} className="flex gap-8 px-6 whitespace-nowrap">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="shrink-0 w-[400px] md:w-[600px] bg-white/5 border border-white/10 rounded-2xl p-10 md:p-12 transition-colors duration-300 whitespace-normal backdrop-blur-md"
          >
            <div className="flex gap-1 mb-8 text-blue-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">"{review.text}"</p>
            <p className="text-white/60 font-mono tracking-widest uppercase text-sm">{review.author}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
