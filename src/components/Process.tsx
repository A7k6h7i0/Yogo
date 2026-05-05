import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: "Strategic Audit", desc: "We map your entire digital footprint to identify vulnerabilities, technical debt, and opportunities for massive scale.", alignment: "left" },
    { title: "Blueprint & Prototyping", desc: "Our architects draft a comprehensive system design and build rapid POCs to validate the tech stack before full production.", alignment: "right" },
    { title: "Agile Engineering", desc: "Sprints are executed by cross-functional teams, ensuring clean code, robust testing, and continuous feedback loops.", alignment: "left" },
    { title: "Deployment & Scaling", desc: "Automated pipelines push your software to the cloud, instantly scaling resources to handle real-world user traffic.", alignment: "right" }
  ];

  return (
    <section ref={containerRef} className="bg-[#050505] py-40 text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-center mb-32 uppercase">delivery pipeline</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-blue-500 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] origin-top"
          ></motion.div>

          <div className="flex flex-col gap-24 py-10">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${step.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute left-4 md:left-1/2 w-6 h-6 rounded-md bg-blue-500 md:-translate-x-1/2 shadow-[0_0_20px_rgba(59,130,246,1)] z-10 rotate-45"
                ></motion.div>

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${step.alignment === 'left' ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: step.alignment === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-500"
                  >
                    <div className="text-blue-500 font-mono text-sm mb-4">PHASE 0{idx + 1}</div>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed font-light">{step.desc}</p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
