import { motion } from 'framer-motion';

interface SparkleProps {
  x: number;
  y: number;
  delay?: number;
  size?: number;
}

export function Sparkle({ x, y, delay = 0, size = 2 }: SparkleProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
      } as any}
    >
      <div
        className="bg-yellow-300 rounded-full blur-sm"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: '0 0 8px rgba(255, 215, 0, 0.6)',
        }}
      />
    </motion.div>
  );
}

export function SparkleContainer() {
  const sparkles = [
    { x: 15, y: 20, delay: 0 },
    { x: 85, y: 25, delay: 0.3 },
    { x: 25, y: 75, delay: 0.6 },
    { x: 75, y: 70, delay: 0.9 },
    { x: 50, y: 15, delay: 1.2 },
    { x: 90, y: 60, delay: 1.5 },
    { x: 10, y: 50, delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}
    </div>
  );
}
