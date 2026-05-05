import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Infrastructure = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="bg-black py-32 text-white overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div style={{ y }} className="mb-32">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase mb-8">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Infrastructure</span>
          </h2>
          <p className="text-xl md:text-3xl text-white/70 max-w-3xl leading-relaxed font-light">
            Deploy your applications across a multi-region cloud network. We ensure sub-millisecond latency and 99.999% uptime SLAs for your mission-critical software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative">
          <motion.div 
            style={{ y: imageY }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-96 items-center justify-center z-0 opacity-40 mix-blend-screen pointer-events-none"
          >
             <div className="w-full h-[600px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-3xl absolute"></div>
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" alt="Servers" className="w-full object-cover rounded-3xl border border-white/10" />
          </motion.div>

          <div className="flex flex-col gap-12 z-10 mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Edge Computing</h3>
              <p className="text-white/70 font-light">Bring your applications closer to your users with global CDN integration and edge serverless functions.</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 z-10 mt-0 md:mt-48 text-right">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Disaster Recovery</h3>
              <p className="text-white/70 font-light">Automated database backups, cross-region replication, and instant failover protocols to secure your data.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
