import { motion } from 'motion/react';

interface HealthRingProps {
  value: number;
  max: number;
  color: string;
  size?: number;
}

export default function HealthRing({ value, max, color, size = 120 }: HealthRingProps) {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r="45"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            fill="none"
          />

          {/* Progress Circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
              filter: `drop-shadow(0 0 8px ${color})`
            }}
          />
        </svg>

        {/* Center Value */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="text-3xl font-bold"
            style={{ color }}
          >
            {value}
          </motion.span>
          <span className="text-xs text-gray-400">%</span>
        </div>

        {/* Glow Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="absolute inset-0 rounded-full blur-xl pointer-events-none"
          style={{
            backgroundColor: color,
            opacity: 0.2
          }}
        />
      </div>
    </div>
  );
}
