import { motion } from 'motion/react';

interface GaugeMeterProps {
  value: number;
  max: number;
  color: string;
  label?: string;
}

export default function GaugeMeter({ value, max, color, label }: GaugeMeterProps) {
  const percentage = (value / max) * 100;
  const angle = (percentage / 100) * 180 - 90;

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-20">
        <svg width="128" height="80" viewBox="0 0 128 80">
          {/* Background Arc */}
          <path
            d="M 10 70 A 54 54 0 0 1 118 70"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Progress Arc */}
          <motion.path
            d="M 10 70 A 54 54 0 0 1 118 70"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ strokeDasharray: '0, 1000' }}
            animate={{ strokeDasharray: `${(percentage / 100) * 170}, 1000` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              filter: `drop-shadow(0 0 6px ${color})`
            }}
          />

          {/* Tick Marks */}
          {[0, 25, 50, 75, 100].map((tick) => {
            const tickAngle = ((tick / 100) * 180 - 90) * (Math.PI / 180);
            const x1 = 64 + 50 * Math.cos(tickAngle);
            const y1 = 70 + 50 * Math.sin(tickAngle);
            const x2 = 64 + 54 * Math.cos(tickAngle);
            const y2 = 70 + 54 * Math.sin(tickAngle);

            return (
              <line
                key={tick}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              />
            );
          })}

          {/* Needle */}
          <motion.g
            initial={{ rotate: -90 }}
            animate={{ rotate: angle }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ transformOrigin: '64px 70px' }}
          >
            <line
              x1="64"
              y1="70"
              x2="64"
              y2="26"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="64" cy="70" r="4" fill={color} />
          </motion.g>
        </svg>

        {/* Center Value */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <span className="text-2xl font-bold" style={{ color }}>
              {value}
            </span>
            <span className="text-sm text-gray-400">%</span>
          </motion.div>
          {label && <p className="text-xs text-gray-500 mt-1">{label}</p>}
        </div>
      </div>
    </div>
  );
}
