import React from 'react';
import { motion } from 'framer-motion';

const Experts = () => {
  const team = [
    {
      name: "David Chen",
      role: "Lead Cloud Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Sarah Jenkins",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Michael Torres",
      role: "Head of AI Solutions",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="bg-black py-32 text-white relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 uppercase">our <span className="text-blue-500">engineers</span></h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            We hire the top 1% of software engineering talent to ensure your projects are built right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <img 
                src={member.image} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-mono text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
