import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CanvasOrbit } from './CanvasOrbit';
import { SplitText } from '../shared/SplitText';

const features = [
  {
    title: 'long life',
    text: 'you can use your sofi pod for a week between charges, and it recharges fully in about an hour with usb-c.',
  },
  {
    title: 'personal + portable',
    text: 'simple, minimal, pocket-sized, and discreet, with lock technology to prevent accidental sprays.',
  },
  {
    title: 'connected',
    text: 'your pod connects via bluetooth to the app, creating a journal of use and a better picture of how plants affect you.',
  },
  {
    title: 'black or white',
    text: 'available in brushed aluminium slate and glossy white, so the choice stays with you.',
  },
];

export const Story = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.16], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.14], [0, 1]);
  const rightShift = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [0.94, 1.06]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative min-h-[260vh] scroll-mt-24 bg-[#060606]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-10 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">feel better</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
              <SplitText text="sofi measures the impact of plants to improve the way we feel and sleep" delay={0.08} />
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
              the pod exchanges information with the app, then builds a journal of capsule use
              over time. each scroll moment reveals another layer of the story.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-black transition-transform hover:-translate-y-0.5"
              >
                shop sofi
              </a>
              <a
                href="#community"
                className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-md transition-colors hover:bg-white/8"
              >
                treehouse
              </a>
            </div>
          </motion.div>

          <motion.div
            style={{ x: rightShift, scale: stageScale }}
            className="relative mx-auto w-full max-w-[36rem]"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/40">nature&apos;s magic</p>
                  <p className="mt-2 text-lg font-medium text-white">and inside lies nature&apos;s magic</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/55">
                  canvas
                </span>
              </div>

              <div className="relative mt-6 flex min-h-[28rem] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#0a0a0a]">
                <CanvasOrbit className="absolute inset-0 h-full w-full opacity-85" />
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative flex h-[18rem] w-[18rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
                >
                  <div className="h-[10rem] w-[10rem] rounded-full bg-gradient-to-br from-white/20 via-white/10 to-transparent blur-2xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-white/35">{feature.title}</div>
              <p className="mt-5 text-sm leading-7 text-white/68">{feature.text}</p>
            </motion.article>
          ))}
        </div>
    </section>
  );
};
