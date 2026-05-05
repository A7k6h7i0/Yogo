import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { SplitText } from '../shared/SplitText';

const metrics = [
  { value: '2.12x', label: 'sleep quality improvement for 48% of users' },
  { value: '37', label: 'criteria in prioritising the plant roadmap' },
  { value: '1.45m', label: 'data points generated in 2022 by pioneers' },
  { value: '1,000 years', label: 'of collective experience across the team' },
];

const pillars = ['purity of plants', 'power of people', 'preservation of planet'];

export const Interactive = () => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="community" className="bg-[#060606] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.95, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-white/35">we learn across</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
            <SplitText text="and listen for signs of impact" delay={0.08} />
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
            your sofi pod generates signals with every spray. the app turns that information into a
            clear picture of what helps you feel calmer and sleep better.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: index * 0.11, ease: 'easeOut' }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <div className="text-4xl font-semibold tracking-[-0.05em] text-white">{metric.value}</div>
              <p className="mt-4 text-sm leading-7 text-white/65">{metric.label}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.95, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">never sofi alone</p>
            <blockquote className="mt-6 text-2xl leading-10 text-white/88 md:text-3xl">
              "it's been a game changer for me."
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/42">@eevie</p>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.35em] text-white/35">treehouse</span>
                <span className="text-sm text-white/70">community + support</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/65">
                join our community where you&apos;ll find insights, answers, and experiences from
                thousands of members and pioneers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.95, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">our promise</p>
            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              purity of plants. power of people. preservation of planet.
            </h3>

            <div className="mt-10 grid gap-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.65, delay: 0.18 + index * 0.1, ease: 'easeOut' }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-lg text-white/85"
                >
                  {pillar}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
