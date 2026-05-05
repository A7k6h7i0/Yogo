import { motion } from 'framer-motion';
import { SplitText } from '../shared/SplitText';

const footerLinks = [
  { label: 'about sofi', href: '#story' },
  { label: 'shop sofi', href: '#shop' },
  { label: 'treehouse', href: '#community' },
  { label: 'privacy policy', href: '#privacy' },
  { label: 'terms and condition', href: '#terms' },
  { label: 'shipping and returns', href: '#shipping' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="text-xs uppercase tracking-[0.45em] text-white/35">sofi</div>
            <p className="mt-6 max-w-xl text-3xl leading-[1.2] tracking-[-0.05em] text-white md:text-4xl">
              <SplitText text="for restful nights and calmer days." delay={0.04} />
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.3em] text-white/40">dream well, sofi.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm uppercase tracking-[0.28em] text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.35em] text-white/30">
          (c) all rights reserved '25
        </div>
      </div>
    </footer>
  );
};
