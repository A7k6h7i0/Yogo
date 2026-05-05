import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AppShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We track the scroll progress of this entire section
  // to power the horizontal sliding of the screens
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The screens container will translate horizontally
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // Scale and opacity for the intro text
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <section ref={containerRef} className="bg-black text-white relative h-[300vh]">
      {/* Sticky container that stays in place while scrolling */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center">
        
        {/* Intro Text */}
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale }}
          className="absolute top-1/4 left-0 right-0 z-20 text-center px-6"
        >
          <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-tight max-w-4xl mx-auto">
            we work to identify your unique responses to our plant formulations
          </h2>
          <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            this means we work together to help you discover the formulations that uniquely work for you...
          </p>
        </motion.div>

        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#7A98FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Horizontal Scrolling Screens */}
        <motion.div 
          style={{ x }}
          className="relative z-10 flex items-center gap-32 mt-32 px-[50vw]"
        >
          {/* Screen 1 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img 
              src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" 
              alt="iPhone Mockup" 
              className="w-full h-auto relative z-20 drop-shadow-2xl"
            />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-[#161928]">
              <img 
                src="https://www.sofihealth.com/_next/static/media/app_bubbles_no_mockup.6cc97de2.webp" 
                alt="Sofi App Screen" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Screen 2 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img 
              src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" 
              alt="iPhone Mockup" 
              className="w-full h-auto relative z-20 drop-shadow-2xl"
            />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-[#080B17] flex flex-col justify-between p-6">
               <div className="text-center mt-12">
                 <img src="https://www.sofihealth.com/_next/static/media/passiflora_for_app.9cec5911.webp" alt="Passiflora" className="w-48 mx-auto" />
                 <h3 className="text-2xl mt-8 font-medium">sofi measures</h3>
                 <p className="text-[#848DAE] mt-4 text-sm">sleep improv. 2.1x</p>
               </div>
            </div>
          </div>
          
          {/* Screen 3 */}
          <div className="relative w-[300px] md:w-[350px] shrink-0 flex items-center justify-center">
            <img 
              src="https://www.sofihealth.com/_next/static/media/iphone_mockup.982a2e38.webp" 
              alt="iPhone Mockup" 
              className="w-full h-auto relative z-20 drop-shadow-2xl"
            />
            <div className="absolute top-[2%] left-[4.5%] right-[4.5%] bottom-[2%] overflow-hidden rounded-[2.5rem] z-10 bg-gradient-to-b from-[#161928] to-[#080B17] flex flex-col items-center justify-center">
              <h3 className="text-3xl font-medium text-center px-4">your discoveries</h3>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
