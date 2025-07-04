import { motion } from 'framer-motion';

export default function AnimatedBlob() {
  return (
    <motion.div
      initial={{ scale: 0.94, opacity: 0.4 }}
      animate={{ scale: [0.94, 1.04, 0.98, 1.01, 0.96, 1], opacity: 1 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }}
      className="absolute -left-32 -top-32 w-[580px] h-[580px] z-0 pointer-events-none select-none"
      aria-hidden="true"
      style={{ filter: 'blur(90px)' }}
    >
      <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fc4b08" />
            <stop offset="100%" stopColor="#ffb547" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient)"
          d="M408.5,313Q376,376,313,430.5Q250,485,174.5,445Q99,405,108.5,320.5Q118,236,162,162.5Q206,89,293.5,98Q381,107,417,183.5Q453,260,408.5,313Z"
        />
      </svg>
    </motion.div>
  );
}
