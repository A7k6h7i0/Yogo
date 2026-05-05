import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SplitText } from '../shared/SplitText';

const products = [
  {
    title: 'valerian',
    latin: 'lat. // valeriana officinalis',
    target: 'target state: sleep',
    note: 'relax',
    stat: 'impact: ~51%',
  },
  {
    title: 'passiflora',
    latin: 'lat. // passiflora incarnata',
    target: 'target state: calm + sleep',
    note: 'rest',
    stat: 'sleep improvement: 2.1x',
  },
  {
    title: 'ashwagandha',
    latin: 'lat. // withania somnifera',
    target: 'target state: calm',
    note: 'balance',
    stat: 'confidence: >95%',
  },
];

export const Products = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.15], [90, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  return (
    <section ref={ref} id="shop" className="relative min-h-[240vh] scroll-mt-24 bg-[#090909]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-10 md:py-16">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">sofi capsules //</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
              <SplitText text="and inside lies nature's magic" delay={0.08} />
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
              we have two types of natural formulations. plant remedies you spray to swallow, and
              functional fragrances that activate instantly to boost your mood.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.85, delay: index * 0.1, ease: 'easeOut' }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-white/35">{product.note}</div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/45">{product.latin}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/55">
                  10ml
                </div>
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                <div className="text-xs uppercase tracking-[0.35em] text-white/35">the intent</div>
                <p className="mt-3 text-lg leading-8 text-white/82">{product.target}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-white/50">single-plant formulation</span>
                <span className="text-sm font-medium text-white">{product.stat}</span>
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4">
                <div className="flex items-center justify-center rounded-[1.25rem] bg-black/35 py-10">
                  <div className="text-center">
                    <div className="text-xs uppercase tracking-[0.35em] text-white/35">prepared with care</div>
                    <div className="mt-4 text-5xl tracking-tight text-white">01</div>
                  </div>
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
