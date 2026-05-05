import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  { name: "Cloud Native", icon: "☁️", color: "text-blue-400", borderHover: "hover:border-blue-500/50", glowHover: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]", desc: "AWS, Azure, and GCP architectures built for infinite horizontal scaling and multi-region failovers." },
  { name: "AI / ML", icon: "🧠", color: "text-indigo-400", borderHover: "hover:border-indigo-500/50", glowHover: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]", desc: "Predictive analytics, NLP, and computer vision integration to automate and optimize workflows." },
  { name: "Cybersecurity", icon: "🛡️", color: "text-emerald-400", borderHover: "hover:border-emerald-500/50", glowHover: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]", desc: "Zero-trust architectures, penetration testing, and end-to-end encryption protocols." },
  { name: "Data Engineering", icon: "📊", color: "text-cyan-400", borderHover: "hover:border-cyan-500/50", glowHover: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]", desc: "Real-time data lakes, ETL pipelines, and warehouse structuring for actionable business intelligence." },
  { name: "DevOps", icon: "⚙️", color: "text-orange-400", borderHover: "hover:border-orange-500/50", glowHover: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]", desc: "Automated CI/CD pipelines, containerization with Docker & Kubernetes, and Infrastructure as Code." },
  { name: "Frontend", icon: "⚛️", color: "text-teal-400", borderHover: "hover:border-teal-500/50", glowHover: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]", desc: "High-performance React, Next.js, and Vue applications with sub-second paint times." }
];

const TechStack = () => {
  return (
    <section className="bg-[#020202] py-40 text-white relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase"
          >
            core competencies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-xl text-white/50 max-w-2xl mx-auto font-light"
          >
            We don't just write code. We architect solutions using the bleeding edge of modern technology to drive your business forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 cursor-default ${item.borderHover}`}
            >
              <div className={`absolute inset-0 rounded-3xl transition-shadow duration-500 opacity-0 group-hover:opacity-100 ${item.glowHover}`}></div>
              
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div className="text-white/20 group-hover:text-white/60 transition-colors duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              
              <div className="relative z-10 flex-1">
                <h3 className={`text-2xl font-bold mb-4 ${item.color}`}>{item.name}</h3>
                <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
