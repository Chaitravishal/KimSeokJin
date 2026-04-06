import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '6 AM', mood: 65, stress: 30 },
  { time: '9 AM', mood: 78, stress: 25 },
  { time: '12 PM', mood: 85, stress: 20 },
  { time: '3 PM', mood: 82, stress: 28 },
  { time: '6 PM', mood: 88, stress: 15 },
  { time: '9 PM', mood: 75, stress: 22 }
];

export default function MoodGraph() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-64"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="time"
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(17, 17, 17, 0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)'
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#9b5de5"
            strokeWidth={3}
            dot={{ fill: '#9b5de5', r: 5 }}
            activeDot={{ r: 7 }}
            name="Mood Score"
          />
          <Line
            type="monotone"
            dataKey="stress"
            stroke="#ff3b3b"
            strokeWidth={3}
            dot={{ fill: '#ff3b3b', r: 5 }}
            activeDot={{ r: 7 }}
            name="Stress Level"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#9b5de5] rounded-full" />
          <span className="text-sm text-gray-400">Mood Score</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ff3b3b] rounded-full" />
          <span className="text-sm text-gray-400">Stress Level</span>
        </div>
      </div>
    </motion.div>
  );
}
