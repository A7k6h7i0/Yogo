import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroPod from '../../assets/hero.png';
import { CanvasOrbit } from './CanvasOrbit';
import { SplitText } from '../shared/SplitText';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const podY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const podRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.7]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute -bottom-24 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute left-[-8rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-emerald-300/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-[36rem] lg:-translate-y-8 lg:pt-10"
        >
          <div className="mb-8 flex items-start gap-4 text-[0.7rem] uppercase tracking-[0.4em] text-white/45">
            <span className="pt-[0.1rem]">001</span>
            <div className="flex flex-col leading-[0.95] text-white/55">
              <span>sleep</span>
              <span>smart</span>
              <span>naturally</span>
            </div>
          </div>

          <div className="max-w-xl text-[clamp(4.75rem,9vw,8.75rem)] font-semibold leading-[0.88] tracking-[-0.1em] text-white">
            <SplitText text="feel better" delay={0.12} className="gap-x-2" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: 'easeOut' }}
            className="mt-8 max-w-[34rem] text-lg leading-8 text-white/68 md:text-xl"
          >
            we have used plants for thousands of years in our search for better wellness.
            sofi is charting the future of plant-based remedies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.46, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#shop"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-black transition-transform hover:-translate-y-0.5"
            >
              shop sofi
            </a>
            <a
              href="#story"
              className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-md transition-colors hover:bg-white/8"
            >
              learn more
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: podY, rotate: podRotate }}
          className="relative mx-auto w-full max-w-[34rem] justify-self-end lg:-translate-y-2"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />

          <div className="rounded-[2rem] border border-white/10 bg-white/4 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">sofi pod</p>
                <p className="mt-2 text-lg font-medium text-white">it all starts with a pod</p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/55">
                bluetooth
              </span>
            </div>

            <div className="relative flex min-h-[32rem] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#090909]">
              <CanvasOrbit className="absolute inset-0 h-full w-full" />

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex items-center justify-center"
              >
                <img
                  src={heroPod}
                  alt="sofi pod"
                  className="h-[25rem] w-auto select-none object-contain drop-shadow-[0_36px_80px_rgba(153,61,255,0.28)]"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-x-10 bottom-6 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/45">long life</span>
                  <span className="text-sm text-white/80">1 week between charges</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
