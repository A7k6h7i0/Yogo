import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AppShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const textRotateX = useTransform(scrollYProgress, [0, 0.2], [0, 45]);

  return (
    <section ref={containerRef} className="bg-[#050505] text-white relative h-[300vh] border-t border-white/5">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center">
        
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, rotateX: textRotateX }}
          className="absolute top-1/4 left-0 right-0 z-20 text-center px-6"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-widest uppercase leading-tight max-w-4xl mx-auto">
            mobile & web <span className="text-blue-500">excellence</span>
          </h2>
          <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            we build pixel-perfect, high-performance interfaces backed by scalable cloud infrastructure...
          </p>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          style={{ x }}
          className="relative z-10 flex items-center gap-32 mt-32 px-[50vw]"
        >
          {/* Screen 1 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" alt="iPhone Mockup" className="w-full h-auto relative z-20 drop-shadow-2xl" />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-[#0A0B10] group-hover:scale-105 transition-transform duration-700 border border-white/10">
              <div className="p-6 h-full flex flex-col gap-4">
                 <div className="w-full h-32 bg-white/5 rounded-xl animate-pulse"></div>
                 <div className="w-3/4 h-8 bg-white/5 rounded-md animate-pulse"></div>
                 <div className="w-1/2 h-8 bg-white/5 rounded-md animate-pulse"></div>
                 <div className="w-full h-32 bg-blue-500/20 rounded-xl mt-auto"></div>
              </div>
            </div>
          </div>

          {/* Screen 2 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" alt="iPhone Mockup" className="w-full h-auto relative z-20 drop-shadow-2xl" />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-[#080B17] flex flex-col justify-between p-6 group-hover:scale-105 transition-transform duration-700">
               <div className="text-center mt-12 flex flex-col items-center">
                 <div className="w-32 h-32 rounded-full border-4 border-blue-500 border-t-transparent animate-spin mb-8"></div>
                 <h3 className="text-2xl mt-8 font-bold text-white/90">Real-time Sync</h3>
                 <p className="text-blue-400 mt-4 font-mono text-sm uppercase tracking-widest">WebSocket 12ms</p>
               </div>
            </div>
          </div>
          
          {/* Screen 3 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" alt="iPhone Mockup" className="w-full h-auto relative z-20 drop-shadow-2xl" />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-gradient-to-b from-[#0A0B10] to-blue-900/20 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700 border border-white/5">
              <h3 className="text-3xl font-bold text-center px-4 uppercase">Analytics<br/><span className="text-blue-500">Dashboard</span></h3>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
