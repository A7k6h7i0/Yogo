import { motion } from 'framer-motion';

type LoaderProps = {
  show: boolean;
};

export const Loader = ({ show }: LoaderProps) => {
  return (
    <motion.div
      aria-hidden="true"
      initial={false}
      animate={show ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, pointerEvents: 'none' },
        visible: { opacity: 1, pointerEvents: 'auto' },
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#040404]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_22%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.02, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]"
      />
      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.18 }}
          className="text-[0.7rem] uppercase tracking-[0.55em] text-white/40"
        >
          sofi
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={show ? { width: '5rem' } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.28 }}
          className="h-px bg-white/20"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.38 }}
          className="text-sm uppercase tracking-[0.3em] text-white/55"
        >
          loading the future of plants
        </motion.p>
      </div>
    </motion.div>
  );
};
