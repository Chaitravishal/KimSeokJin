import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Brain,
  Activity,
  Droplet,
  Moon,
  Battery,
  TrendingUp,
  AlertCircle,
  Users,
  Music,
  Calendar,
  Clock,
  CheckCircle2,
  Pill
} from 'lucide-react';
import MultiAgentVisualization from './MultiAgentVisualization';
import HealthRing from './HealthRing';
import GaugeMeter from './GaugeMeter';
import MoodGraph from './MoodGraph';
import WeeklyTrendChart from './WeeklyTrendChart';

export default function Dashboard() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const vitals = [
    { label: 'Heart Rate', value: 72, unit: 'BPM', icon: Heart, color: '#ff3b3b', status: 'optimal' },
    { label: 'Blood Pressure', value: 120, unit: '/80', icon: Activity, color: '#22c55e', status: 'optimal' },
    { label: 'Oxygen Level', value: 98, unit: '%', icon: Activity, color: '#4cc9f0', status: 'optimal' },
    { label: 'Temperature', value: 36.6, unit: '°C', icon: Activity, color: '#facc15', status: 'optimal' }
  ];

  const dailyRoutine = [
    { time: '08:00', task: 'Morning Medicine', completed: true, icon: Pill },
    { time: '09:30', task: 'Breakfast', completed: true, icon: CheckCircle2 },
    { time: '11:00', task: 'Light Exercise', completed: true, icon: Activity },
    { time: '14:00', task: 'Afternoon Medicine', completed: false, icon: Pill },
    { time: '18:00', task: 'Family Call', completed: false, icon: Users },
    { time: '21:00', task: 'Evening Medicine', completed: false, icon: Pill }
  ];

  const memories = [
    { date: '2 days ago', title: 'Family Gathering', emotion: '😊' },
    { date: '1 week ago', title: 'Birthday Celebration', emotion: '🎉' },
    { date: '2 weeks ago', title: 'Park Walk', emotion: '🌳' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#111111] to-[#0a0a0a] text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/50"
      >
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff3b3b] to-[#9b5de5] rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">IdolCare AI Dashboard</h1>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-[#22c55e] rounded-full"
                  />
                  <span className="text-sm text-gray-400">All Systems Operational</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-gray-400">Patient</p>
                <p className="font-semibold">김할머니 (Kim Grandma)</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#9b5de5] to-[#4cc9f0] rounded-full flex items-center justify-center text-xl">
                👵
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-8 py-8">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Vital Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vital Signs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Live Vitals</h2>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-[#ff3b3b] rounded-full"
                  />
                  <span className="text-sm text-gray-400">Real-time monitoring</span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {vitals.map((vital, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 transition-opacity blur-xl"
                      style={{ backgroundColor: vital.color }}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <vital.icon className="w-5 h-5" style={{ color: vital.color }} />
                        <span className="text-xs text-gray-400">{vital.label}</span>
                      </div>
                      <p className="text-3xl font-bold mb-1" style={{ color: vital.color }}>
                        {vital.value}
                      </p>
                      <p className="text-xs text-gray-500">{vital.unit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Health Metrics Dashboard */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Hydration Gauge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Droplet className="w-5 h-5 text-[#4cc9f0]" />
                  <h3 className="font-semibold">Hydration</h3>
                </div>
                <GaugeMeter value={78} max={100} color="#4cc9f0" label="Daily Goal" />
                <p className="text-sm text-gray-400 mt-4 text-center">1.5L / 2L consumed</p>
              </motion.div>

              {/* Sleep Quality Ring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-5 h-5 text-[#9b5de5]" />
                  <h3 className="font-semibold">Sleep Quality</h3>
                </div>
                <HealthRing value={92} max={100} color="#9b5de5" size={120} />
                <p className="text-sm text-gray-400 mt-4 text-center">7.5 hours last night</p>
              </motion.div>

              {/* Energy Level */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Battery className="w-5 h-5 text-[#facc15]" />
                  <h3 className="font-semibold">Energy Level</h3>
                </div>
                <HealthRing value={85} max={100} color="#facc15" size={120} />
                <p className="text-sm text-gray-400 mt-4 text-center">Above average</p>
              </motion.div>
            </div>

            {/* Weekly Health Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#22c55e]" />
                  <h3 className="text-xl font-semibold">Weekly Health Trend</h3>
                </div>
                <div className="flex items-center gap-2 text-[#22c55e]">
                  <span className="text-sm">+8.5% improvement</span>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <WeeklyTrendChart />
            </motion.div>

            {/* Mood Stability Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-5 h-5 text-[#9b5de5]" />
                <h3 className="text-xl font-semibold">Emotional Wellness</h3>
              </div>
              <MoodGraph />
              <p className="text-sm text-gray-400 mt-4">
                "You are doing better than yesterday. Keep going." 💜
              </p>
            </motion.div>
          </div>

          {/* Right Column - AI Agents & Alerts */}
          <div className="space-y-6">
            {/* Multi-Agent AI Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-4">AI Agent Network</h3>
              <MultiAgentVisualization onAgentSelect={setSelectedAgent} />
              {selectedAgent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-white">{selectedAgent}</span> is actively monitoring
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Pit Stop Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-[#facc15]" />
                <h3 className="text-xl font-semibold">Pit Stop Alerts</h3>
              </div>
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-3 bg-gradient-to-r from-[#ff3b3b]/20 to-transparent border-l-4 border-[#ff3b3b] rounded"
                >
                  <p className="text-sm font-semibold">Medicine Due</p>
                  <p className="text-xs text-gray-400">Afternoon dose at 2:00 PM</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-3 bg-gradient-to-r from-[#4cc9f0]/20 to-transparent border-l-4 border-[#4cc9f0] rounded"
                >
                  <p className="text-sm font-semibold">Hydration Reminder</p>
                  <p className="text-xs text-gray-400">Drink 250ml water</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-3 bg-gradient-to-r from-[#9b5de5]/20 to-transparent border-l-4 border-[#9b5de5] rounded"
                >
                  <p className="text-sm font-semibold">Family Call Scheduled</p>
                  <p className="text-xs text-gray-400">Video call at 6:00 PM</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Daily Routine */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#22c55e]" />
                <h3 className="text-xl font-semibold">Daily Routine</h3>
              </div>
              <div className="space-y-2">
                {dailyRoutine.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      item.completed ? 'bg-[#22c55e]/10 border border-[#22c55e]/30' : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: item.completed ? '#22c55e' : '#666' }}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.task}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                    {item.completed && (
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Memory Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#4cc9f0]" />
                <h3 className="text-xl font-semibold">Memory Timeline</h3>
              </div>
              <div className="space-y-3">
                {memories.map((memory, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{memory.emotion}</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{memory.title}</p>
                        <p className="text-xs text-gray-400">{memory.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Music Recommendation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-gradient-to-br from-[#9b5de5]/20 to-[#4cc9f0]/20 backdrop-blur-xl rounded-2xl border border-[#9b5de5]/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-5 h-5 text-[#9b5de5]" />
                <h3 className="text-xl font-semibold">Recommended Playlist</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Soft Piano + BTS Acoustic Vibes</p>
                <p className="text-xs text-gray-400">Calming music for emotional wellness</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-[#9b5de5] to-[#7c3aed] rounded-lg text-sm font-semibold"
                >
                  Play Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
