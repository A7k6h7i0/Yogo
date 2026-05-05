import { motion } from 'framer-motion';

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export const SplitText = ({ text, className = '', delay = 0 }: SplitTextProps) => {
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-flex">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={`${word}-${wordIndex}-${letter}-${letterIndex}`}
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: {
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="inline-block will-change-transform"
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 ? <span className="inline-block w-[0.28em]" /> : null}
        </span>
      ))}
    </motion.span>
  );
};
