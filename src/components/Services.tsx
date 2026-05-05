import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      name: "Custom Software",
      domain: "development",
      desc: "End-to-end bespoke applications tailored specifically to your business workflows. From concept to deployment.",
      tech: "React / Node / Postgres",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      bg: "bg-[#0A0B10]"
    },
    {
      name: "Cloud Migration",
      domain: "infrastructure",
      desc: "Seamlessly transition your legacy systems to the cloud. Increase uptime, security, and lower operating costs.",
      tech: "AWS / Docker / K8s",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      bg: "bg-[#110D0A]"
    },
    {
      name: "Data Analytics",
      domain: "intelligence",
      desc: "Transform raw data into actionable insights. We build data warehouses and interactive BI dashboards.",
      tech: "Python / Snowflake / Tableau",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      bg: "bg-[#0A110D]"
    }
  ];

  return (
    <section className="bg-black text-white py-32 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase border-white/20">IT Services</h2>
            <p className="max-w-md text-white/60 mt-6 md:mt-0 font-light">We engineer solutions that drive growth. Our consulting and development teams are ready to tackle your most complex challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <motion.article 
                key={svc.name}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative rounded-2xl p-8 h-[600px] flex flex-col justify-between overflow-hidden group border border-white/10 bg-white/5"
              >
                <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                <img src={svc.image} alt={svc.name} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110" />
                
                <div className="relative z-20 text-white">
                  <p className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-4">{svc.domain}</p>
                  <h3 className="text-4xl font-bold tracking-tight mb-4">{svc.name}</h3>
                  <p className="text-white/80 font-light leading-relaxed">{svc.desc}</p>
                </div>
                
                <div className="relative z-20 mt-auto border-t border-white/20 pt-6 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Tech Stack</p>
                    <p className="font-semibold">{svc.tech}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
