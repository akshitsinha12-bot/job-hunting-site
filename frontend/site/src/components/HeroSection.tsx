import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

export function HeroSection() {
  const [liveStats, setLiveStats] = useState({
    newRoles: 234,
    consultsToday: 47,
    activeUsers: 1247
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        newRoles: prev.newRoles + Math.floor(Math.random() * 3),
        consultsToday: prev.consultsToday + Math.floor(Math.random() * 2),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const companies = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL', 'Cognizant'];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Kinetic gradient background with particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Live stats ticker */}
        <motion.div 
          className="mb-8 flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400">{liveStats.newRoles}</span>
            <span className="text-white/80">New roles added</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400">{liveStats.consultsToday}</span>
            <span className="text-white/80">Consults today</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400">{liveStats.activeUsers}</span>
            <span className="text-white/80">Active users</span>
          </motion.div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Find Your Next Role
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Faster. Start Today.
            </motion.span>
          </h1>
          <motion.div 
            className="text-xl md:text-2xl text-blue-300 mb-2"
            animate={{ textShadow: ['0 0 10px rgba(99, 179, 237, 0.5)', '0 0 20px rgba(99, 179, 237, 0.8)', '0 0 10px rgba(99, 179, 237, 0.5)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            For just ₹150
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
        >
          Personal guidance, curated roles, and free WhatsApp courses—delivered with speed and clarity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Start Job Hunt — Pay ₹150 via UPI
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
            >
              See Real Placements
            </Button>
          </motion.div>
        </motion.div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 text-white/40"
        >
          <span className="text-sm">Hiring companies:</span>
          {companies.map((company, index) => (
            <motion.div
              key={company}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(255,255,255,0.1)'
              }}
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}