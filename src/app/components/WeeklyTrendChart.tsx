import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', health: 75, energy: 70, sleep: 85 },
  { day: 'Tue', health: 78, energy: 75, sleep: 88 },
  { day: 'Wed', health: 82, energy: 80, sleep: 90 },
  { day: 'Thu', health: 80, energy: 78, sleep: 87 },
  { day: 'Fri', health: 85, energy: 82, sleep: 92 },
  { day: 'Sat', health: 88, energy: 85, sleep: 95 },
  { day: 'Sun', health: 90, energy: 88, sleep: 93 }
];

export default function WeeklyTrendChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-64"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9b5de5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9b5de5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="day"
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
          <Area
            type="monotone"
            dataKey="health"
            stroke="#22c55e"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#healthGradient)"
            name="Health Score"
          />
          <Area
            type="monotone"
            dataKey="energy"
            stroke="#facc15"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#energyGradient)"
            name="Energy Level"
          />
          <Area
            type="monotone"
            dataKey="sleep"
            stroke="#9b5de5"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#sleepGradient)"
            name="Sleep Quality"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#22c55e] rounded-full" />
          <span className="text-sm text-gray-400">Health</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#facc15] rounded-full" />
          <span className="text-sm text-gray-400">Energy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#9b5de5] rounded-full" />
          <span className="text-sm text-gray-400">Sleep</span>
        </div>
      </div>
    </motion.div>
  );
}
