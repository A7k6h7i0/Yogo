import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Approach = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={containerRef} className="bg-black py-48 text-white relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl text-center relative">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight opacity-10 absolute top-0 left-0 w-full px-6 uppercase">
          software is not just about writing code. it's about solving complex business problems.
        </h2>
        
        <motion.h2 
          style={{ clipPath }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight text-white relative z-10 uppercase"
        >
          software is not just about writing code. it's about solving complex business problems.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left"
        >
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">01</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Discovery</h3>
            <p className="text-white/60 leading-relaxed">Deep dive into your business logic to map out technical requirements and identify bottlenecks in your current infrastructure.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">02</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Architecture</h3>
            <p className="text-white/60 leading-relaxed">Designing cloud-native, microservices-based architectures that guarantee high availability, security, and performance.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">03</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Execution</h3>
            <p className="text-white/60 leading-relaxed">Agile development sprints delivering test-driven, clean code pipelines via automated CI/CD for rapid deployment.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
