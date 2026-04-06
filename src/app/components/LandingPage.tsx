import { motion } from 'motion/react';
import { Heart, Brain, Shield, Users, Zap, Activity, TrendingUp, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
}

export default function LandingPage({ onLoginClick }: LandingPageProps) {
  const features = [
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Real-time vitals tracking with AI-powered predictive analysis',
      color: '#ff3b3b',
      stats: '24/7 Monitoring'
    },
    {
      icon: Brain,
      title: 'Emotional Wellness',
      description: 'Voice drift analysis, mood tracking, and emotional support',
      color: '#9b5de5',
      stats: '95% Accuracy'
    },
    {
      icon: Shield,
      title: 'Risk Prediction',
      description: 'Daily health risk forecasting with preventive alerts',
      color: '#4cc9f0',
      stats: 'Early Detection'
    },
    {
      icon: Users,
      title: 'Family Connection',
      description: 'Memory preservation and caregiver burnout prevention',
      color: '#22c55e',
      stats: 'Always Connected'
    },
    {
      icon: Zap,
      title: 'Multi-Agent AI',
      description: '6 specialized AI agents working in perfect harmony',
      color: '#facc15',
      stats: 'Lightning Fast'
    },
    {
      icon: TrendingUp,
      title: 'Live Telemetry',
      description: 'F1-inspired dashboard with real-time health metrics',
      color: '#ef4444',
      stats: 'Race Speed'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#111111] text-white overflow-hidden relative">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#ff3b3b 1px, transparent 1px),
              linear-gradient(90deg, #ff3b3b 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#ff3b3b] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#9b5de5] rounded-full blur-[120px]"
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-xl bg-black/30"
      >
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ff3b3b] via-[#9b5de5] to-[#4cc9f0] rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#ff3b3b] rounded-xl blur-md"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff3b3b] via-[#9b5de5] to-[#4cc9f0] bg-clip-text text-transparent">
              IdolCare AI
            </h1>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#facc15]" />
              <p className="text-xs text-gray-400">Multi-Agent Intelligence</p>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            About
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 59, 59, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-[#ff3b3b] to-[#ef4444] rounded-lg font-semibold transition-all"
            onClick={onLoginClick}
          >
            Login
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-[#ff3b3b]/20 to-[#9b5de5]/20 border border-[#ff3b3b]/30 rounded-full backdrop-blur-xl"
            >
              <span className="text-sm font-semibold text-[#ff3b3b]">🏁 Powered by F1 Engineering</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-[#ff3b3b] rounded-full"
              />
            </motion.div>

            <h1 className="text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Premium Care
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ff3b3b] via-[#9b5de5] to-[#4cc9f0] bg-clip-text text-transparent">
                Racing Speed
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              F1-inspired telemetry meets AI-powered elderly care. Monitor health vitals, emotional wellness, and daily routines with precision engineering.
            </p>

            <div className="flex gap-4 mb-10">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255, 59, 59, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onLoginClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#ff3b3b] to-[#ef4444] rounded-xl font-bold text-lg overflow-hidden"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start Your Pit Stop
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-lg hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '24/7', label: 'Monitoring' },
                { value: '6 AI', label: 'Agents' },
                { value: '99.9%', label: 'Uptime' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#ff3b3b] to-[#9b5de5] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Interactive Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
              {/* Floating Health Cards */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-5 bg-gradient-to-br from-[#ff3b3b] to-[#ef4444] backdrop-blur-xl rounded-2xl border border-[#ff3b3b]/30 shadow-2xl shadow-[#ff3b3b]/50 z-10"
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8" />
                  <div>
                    <p className="text-xs opacity-90 font-medium">Heart Rate</p>
                    <p className="text-3xl font-bold">72 BPM</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#22c55e] rounded-full border-2 border-white"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 p-5 bg-gradient-to-br from-[#9b5de5] to-[#7c3aed] backdrop-blur-xl rounded-2xl border border-[#9b5de5]/30 shadow-2xl shadow-[#9b5de5]/50 z-10"
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-8 h-8" />
                  <div>
                    <p className="text-xs opacity-90 font-medium">Mood Score</p>
                    <p className="text-3xl font-bold">85%</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#22c55e] rounded-full border-2 border-white"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -18, 0], x: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -translate-y-1/2 -right-8 p-5 bg-gradient-to-br from-[#4cc9f0] to-[#0ea5e9] backdrop-blur-xl rounded-2xl border border-[#4cc9f0]/30 shadow-2xl shadow-[#4cc9f0]/50 z-10"
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-8 h-8" />
                  <div>
                    <p className="text-xs opacity-90 font-medium">Steps Today</p>
                    <p className="text-3xl font-bold">4.5K</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Dashboard Content */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Health Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-[#22c55e] rounded-full"
                    />
                    <span className="text-sm text-gray-300">All Systems Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Hydration', value: '78%', color: '#4cc9f0', icon: '💧' },
                    { label: 'Sleep Quality', value: '92%', color: '#9b5de5', icon: '😴' },
                    { label: 'Energy Level', value: '85%', color: '#facc15', icon: '⚡' },
                    { label: 'Medicine', value: '100%', color: '#22c55e', icon: '💊' }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-gray-400">{stat.label}</p>
                        <span className="text-xl">{stat.icon}</span>
                      </div>
                      <p className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                        {stat.value}
                      </p>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: stat.value }}
                          transition={{ duration: 1.5, delay: 0.8 + idx * 0.1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: stat.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mini Chart */}
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-400 mb-3">Weekly Trend</p>
                  <div className="flex items-end gap-2 h-20">
                    {[65, 70, 85, 75, 90, 88, 95].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-[#22c55e] to-[#4cc9f0] rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b3b]/20 via-[#9b5de5]/20 to-[#4cc9f0]/20 blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#facc15]" />
              <span className="text-sm text-gray-400">Racing-Grade Technology</span>
            </motion.div>
            <h2 className="text-5xl font-bold mb-4">Powered by 6 AI Agents</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced multi-agent system working at F1 speed to keep your loved ones safe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group"
              >
                <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all h-full">
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"
                    style={{ backgroundColor: feature.color }}
                  />

                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon style={{ color: feature.color }} className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>

                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: feature.color }} />
                      <span className="text-sm font-semibold" style={{ color: feature.color }}>
                        {feature.stats}
                      </span>
                    </div>

                    {/* Animated Status Indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      className="absolute top-4 right-4 w-3 h-3 rounded-full"
                      style={{ backgroundColor: feature.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-32 text-center"
        >
          <div className="relative p-16 bg-gradient-to-r from-[#ff3b3b]/20 via-[#9b5de5]/20 to-[#4cc9f0]/20 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
            {/* Animated Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 opacity-30"
              style={{
                background: `conic-gradient(from 0deg, #ff3b3b, #9b5de5, #4cc9f0, #22c55e, #facc15, #ff3b3b)`
              }}
            />

            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to revolutionize elderly care?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join the pit crew and experience healthcare at racing speed 🏁
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 50px rgba(255, 59, 59, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onLoginClick}
                className="group relative px-12 py-6 bg-gradient-to-r from-[#ff3b3b] via-[#9b5de5] to-[#4cc9f0] rounded-2xl font-bold text-2xl overflow-hidden"
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  Enter the Pit Stop
                  <Zap className="w-6 h-6" />
                </span>
              </motion.button>

              <p className="mt-6 text-gray-400">
                No credit card required • Free trial available
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 mt-32 px-8 py-8 border-t border-white/10"
      >
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 IdolCare AI. Powered by Multi-Agent Intelligence. Built for the ones you love.</p>
        </div>
      </motion.footer>
    </div>
  );
}
