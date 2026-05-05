import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'shop sofi', href: '#shop' },
  { label: 'story', href: '#story' },
  { label: 'community', href: '#community' },
];

const navVariants: Variants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="main__navigation fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isScrolled || isMenuOpen ? 1 : 0,
          y: isScrolled || isMenuOpen ? 0 : -10,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="navigation__background pointer-events-none absolute inset-0 bg-slate-950/70 backdrop-blur-xl"
      />

      <div className="Navigation_globalNavHolder__jGpxH relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <motion.a
          href="/"
          variants={itemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="Navigation_homeLink__JN7yl flex items-center gap-3 text-slate-50"
        >
          <svg
            width="45"
            height="24"
            viewBox="0 0 45 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-10"
          >
            <g clipPath="url(#clip0_1854_41995)">
              <path
                d="M5.9781 23.4281C8.94207 23.4281 12.0295 21.8379 12.0295 18.782C12.0295 17.5971 11.5973 15.4144 8.13933 14.479L5.76197 13.8553C4.95923 13.6371 4.34173 13.2941 4.34173 12.6081C4.34173 11.8597 5.08273 11.3296 6.00897 11.3296C6.85173 11.3296 7.57481 11.7406 7.73556 12.52C7.77343 12.7036 7.91938 12.8575 8.10509 12.8575H11.3252C11.493 12.8575 11.6304 12.7206 11.6226 12.5514C11.4739 9.32065 8.49271 8.11788 5.94722 8.11788C2.61275 8.11788 0.297143 10.2382 0.297143 12.4833C0.297143 14.0112 0.791139 16.1004 4.49611 17.0982L6.41034 17.566C7.49096 17.8466 7.98495 18.1584 7.98495 18.782C7.98495 19.6239 7.08959 20.2164 5.91635 20.2164C4.68488 20.2164 3.98731 19.5365 3.82363 18.807C3.78259 18.6241 3.63544 18.4702 3.44973 18.4702H0.297068C0.12708 18.4702 -0.0112823 18.6106 0.000727091 18.7819C0.212013 21.7947 3.05173 23.4281 5.9781 23.4281Z"
                fill="#F7F7F7"
              />
              <path
                d="M20.6037 23.4281C24.7101 23.4281 28.3533 20.3723 28.3533 15.7886C28.3533 11.1737 24.7101 8.11788 20.6037 8.11788C16.4974 8.11788 12.8542 11.1737 12.8542 15.7886C12.8542 20.3723 16.4974 23.4281 20.6037 23.4281ZM20.6037 19.6239C18.5969 19.6239 16.9605 18.0337 16.9605 15.7886C16.9605 13.5123 18.5969 11.9221 20.6037 11.9221C22.6106 11.9221 24.247 13.5123 24.247 15.7886C24.247 18.0337 22.6106 19.6239 20.6037 19.6239Z"
                fill="#F7F7F7"
              />
              <path
                d="M35.2158 8.49206V6.99534C35.2158 5.46743 35.8642 4.37607 37.871 4.37607H38.152C38.3208 4.37607 38.4577 4.23785 38.4577 4.06734V0.88063C38.4577 0.710123 38.3208 0.571899 38.152 0.571899H37.5005C33.3942 0.571899 31.1712 3.06644 31.1712 7.43188V8.49206H28.7599C28.5911 8.49206 28.4542 8.63029 28.4542 8.80079V11.3639C28.4542 11.5344 28.5911 11.6726 28.7599 11.6726H31.1712V22.7452C31.1712 22.9157 31.3081 23.0539 31.4769 23.0539H34.9101C35.079 23.0539 35.2158 22.9157 35.2158 22.7452V11.6726H40.2752V22.7452C40.2752 22.9157 40.4121 23.0539 40.5809 23.0539H44.0141C44.183 23.0539 44.3198 22.9157 44.3198 22.7452V8.80079C44.3198 8.63029 44.183 8.49206 44.0141 8.49206H35.2158Z"
                fill="#F7F7F7"
              />
              <path
                d="M40.0116 3.16686C40.0116 4.60001 41.1619 5.76181 42.581 5.76181C43.6862 5.76181 44.6284 5.0571 44.9911 4.06834C45.0241 3.97838 44.9614 3.88441 44.868 3.86719C43.6705 3.64653 42.7628 2.58756 42.7628 1.31448C42.7628 1.12622 42.7826 0.942639 42.8203 0.765763C42.8403 0.671976 42.7784 0.577686 42.6835 0.573926C42.6495 0.572579 42.6153 0.571899 42.581 0.571899C41.1619 0.571899 40.0116 1.7337 40.0116 3.16686Z"
                fill="#F7F7F7"
              />
            </g>
            <defs>
              <clipPath id="clip0_1854_41995">
                <rect width="45" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="hidden text-sm font-medium uppercase tracking-[0.34em] text-slate-100 sm:inline">
            home
          </span>
        </motion.a>

        <motion.div
          variants={itemVariants}
          className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex"
        >
          <motion.a
            href="#shop"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="Navigation_navigationCta__MJchb rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-100 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            shop sofi
          </motion.a>
        </motion.div>

        <div className="flex items-center gap-3">
          <motion.a
            href="#shop"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="md:hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-100 backdrop-blur-md"
          >
            shop
          </motion.a>

          <motion.button
            type="button"
            variants={itemVariants}
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="Navigation_menuOpenBtn__WW5Uy group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-50 backdrop-blur-md transition-colors hover:bg-white/10"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute h-[1.5px] w-5 rounded-full bg-current"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute h-[1.5px] w-5 rounded-full bg-current"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute h-[1.5px] w-5 rounded-full bg-current"
            />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full border-t border-white/10 bg-slate-950/95 px-5 py-6 backdrop-blur-xl sm:px-6 lg:px-8 md:hidden"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-medium uppercase tracking-[0.24em] text-slate-100"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};
