import { motion } from 'motion/react';
import { Heart, Brain, Shield, Users, Mic, AlertTriangle } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  icon: any;
  color: string;
  angle: number;
  status: 'active' | 'processing' | 'idle';
}

interface MultiAgentVisualizationProps {
  onAgentSelect?: (agentName: string) => void;
}

export default function MultiAgentVisualization({ onAgentSelect }: MultiAgentVisualizationProps) {
  const agents: Agent[] = [
    { id: 'health', name: 'Health', icon: Heart, color: '#ff3b3b', angle: 0, status: 'active' },
    { id: 'emotional', name: 'Emotional', icon: Brain, color: '#9b5de5', angle: 60, status: 'active' },
    { id: 'risk', name: 'Risk', icon: Shield, color: '#4cc9f0', angle: 120, status: 'processing' },
    { id: 'memory', name: 'Memory', icon: Users, color: '#22c55e', angle: 180, status: 'active' },
    { id: 'voice', name: 'Voice', icon: Mic, color: '#facc15', angle: 240, status: 'active' },
    { id: 'caregiver', name: 'Caregiver', icon: AlertTriangle, color: '#ef4444', angle: 300, status: 'idle' }
  ];

  const radius = 80;

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      {/* Central Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#ff3b3b] via-[#9b5de5] to-[#4cc9f0] flex items-center justify-center"
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 59, 59, 0.5)',
            '0 0 40px rgba(155, 93, 229, 0.5)',
            '0 0 20px rgba(76, 201, 240, 0.5)',
            '0 0 20px rgba(255, 59, 59, 0.5)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-[#111111] flex items-center justify-center"
        >
          <span className="text-xs font-bold bg-gradient-to-r from-[#ff3b3b] to-[#4cc9f0] bg-clip-text text-transparent">
            CORE AI
          </span>
        </motion.div>
      </motion.div>

      {/* Agent Nodes */}
      {agents.map((agent, idx) => {
        const x = radius * Math.cos((agent.angle * Math.PI) / 180);
        const y = radius * Math.sin((agent.angle * Math.PI) / 180);

        return (
          <div key={agent.id}>
            {/* Connection Line */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ overflow: 'visible' }}
            >
              <motion.line
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke={agent.color}
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: agent.status === 'active' ? 0.6 : 0.3,
                  strokeDashoffset: [0, -10]
                }}
                transition={{
                  pathLength: { duration: 1, delay: idx * 0.1 },
                  opacity: { duration: 0.5 },
                  strokeDashoffset: { duration: 2, repeat: Infinity, ease: 'linear' }
                }}
              />
            </svg>

            {/* Agent Node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.2, zIndex: 10 }}
              onClick={() => onAgentSelect?.(agent.name)}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
            >
              <div className="relative group">
                {/* Pulsing Background */}
                <motion.div
                  animate={{
                    scale: agent.status === 'active' ? [1, 1.3, 1] : 1,
                    opacity: agent.status === 'active' ? [0.5, 0.2, 0.5] : 0.3
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3
                  }}
                  className="absolute inset-0 rounded-full blur-md"
                  style={{ backgroundColor: agent.color }}
                />

                {/* Main Node */}
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center border-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${agent.color}20`,
                    borderColor: agent.color
                  }}
                >
                  <agent.icon className="w-7 h-7" style={{ color: agent.color }} />

                  {/* Status Indicator */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: idx * 0.2
                    }}
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-black"
                    style={{
                      backgroundColor:
                        agent.status === 'active'
                          ? '#22c55e'
                          : agent.status === 'processing'
                          ? '#facc15'
                          : '#666'
                    }}
                  />
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-2 py-1 rounded text-xs font-semibold"
                  style={{ color: agent.color }}
                >
                  {agent.name}
                </motion.div>

                {/* Processing Animation */}
                {agent.status === 'processing' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#facc15]"
                  />
                )}
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Orbital Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#4cc9f0]"
          animate={{
            x: [
              radius * Math.cos((i * 45 * Math.PI) / 180),
              radius * Math.cos(((i * 45 + 360) * Math.PI) / 180)
            ],
            y: [
              radius * Math.sin((i * 45 * Math.PI) / 180),
              radius * Math.sin(((i * 45 + 360) * Math.PI) / 180)
            ],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}
