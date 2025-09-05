import { motion, useAnimationControls } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, MapPin, TrendingUp, Clock, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SuccessProof() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [counters, setCounters] = useState({
    activeRoles: 1247,
    consultationsToday: 89,
    avgTimeToInterview: 12,
    avgSalaryIncrease: 45
  });

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        activeRoles: prev.activeRoles + Math.floor(Math.random() * 5) - 2,
        consultationsToday: prev.consultationsToday + Math.floor(Math.random() * 3),
        avgTimeToInterview: 12 + Math.floor(Math.random() * 3) - 1,
        avgSalaryIncrease: 45 + Math.floor(Math.random() * 10) - 5
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Senior Frontend Developer',
      company: 'Microsoft',
      location: 'Bangalore',
      beforeSalary: '8 LPA',
      afterSalary: '18 LPA',
      timeToInterview: '8 days',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e0c9b7?w=100&h=100&fit=crop&crop=face',
      quote: 'The personalized approach made all the difference. Got multiple offers and negotiated a 125% salary increase!',
      rating: 5,
      sector: 'tech',
      experience: 'mid'
    },
    {
      name: 'Rahul Kumar',
      role: 'Product Manager',
      company: 'Flipkart',
      location: 'Mumbai',
      beforeSalary: '12 LPA',
      afterSalary: '22 LPA',
      timeToInterview: '5 days',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      quote: 'Amazing support throughout the process. The mock interviews and resume optimization were game-changers.',
      rating: 5,
      sector: 'tech',
      experience: 'senior'
    },
    {
      name: 'Sneha Patel',
      role: 'Data Analyst',
      company: 'Zomato',
      location: 'Delhi',
      beforeSalary: '6 LPA',
      afterSalary: '12 LPA',
      timeToInterview: '15 days',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      quote: 'Perfect guidance for career transition. Helped me switch from finance to tech successfully!',
      rating: 5,
      sector: 'tech',
      experience: 'junior'
    },
    {
      name: 'Arjun Singh',
      role: 'Marketing Manager',
      company: 'Unilever',
      location: 'Pune',
      beforeSalary: '10 LPA',
      afterSalary: '16 LPA',
      timeToInterview: '10 days',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      quote: 'Excellent network and insider knowledge. Got referred to roles I never would have found myself.',
      rating: 5,
      sector: 'marketing',
      experience: 'mid'
    },
    {
      name: 'Meera Reddy',
      role: 'UX Designer',
      company: 'Adobe',
      location: 'Hyderabad',
      beforeSalary: '7 LPA',
      afterSalary: '14 LPA',
      timeToInterview: '12 days',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      quote: 'The portfolio review and design challenge prep were invaluable. Landed my dream role at Adobe!',
      rating: 5,
      sector: 'design',
      experience: 'mid'
    },
    {
      name: 'Vikram Joshi',
      role: 'DevOps Engineer',
      company: 'AWS',
      location: 'Chennai',
      beforeSalary: '9 LPA',
      afterSalary: '20 LPA',
      timeToInterview: '7 days',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      quote: 'Technical interview prep was spot-on. Cleared all rounds in my first attempt!',
      rating: 5,
      sector: 'tech',
      experience: 'senior'
    }
  ];

  const placementStats = [
    { city: 'Bangalore', count: 342, growth: '+12%', color: 'from-blue-500 to-purple-500' },
    { city: 'Mumbai', count: 298, growth: '+8%', color: 'from-purple-500 to-pink-500' },
    { city: 'Delhi', count: 256, growth: '+15%', color: 'from-pink-500 to-red-500' },
    { city: 'Pune', count: 189, growth: '+10%', color: 'from-red-500 to-orange-500' },
    { city: 'Hyderabad', count: 167, growth: '+18%', color: 'from-orange-500 to-yellow-500' },
    { city: 'Chennai', count: 134, growth: '+6%', color: 'from-yellow-500 to-green-500' }
  ];

  const filters = [
    { value: 'all', label: 'All Success Stories' },
    { value: 'tech', label: 'Tech Roles' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'design', label: 'Design' },
    { value: 'junior', label: '0-3 Years' },
    { value: 'mid', label: '3-7 Years' },
    { value: 'senior', label: '7+ Years' }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (activeFilter === 'all') return true;
    return testimonial.sector === activeFilter || testimonial.experience === activeFilter;
  });

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Real Success Stories
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join thousands who have accelerated their careers with our guidance
          </p>
        </motion.div>

        {/* Live Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <motion.div
              className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              key={counters.activeRoles}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              {counters.activeRoles}
            </motion.div>
            <div className="text-white/70 text-sm">Active Roles Now</div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <motion.div
              className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              key={counters.consultationsToday}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              {counters.consultationsToday}
            </motion.div>
            <div className="text-white/70 text-sm">Consultations Today</div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <motion.div
              className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              key={counters.avgTimeToInterview}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              {counters.avgTimeToInterview}
            </motion.div>
            <div className="text-white/70 text-sm">Avg Days to Interview</div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <motion.div
              className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent"
              key={counters.avgSalaryIncrease}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              {counters.avgSalaryIncrease}%
            </motion.div>
            <div className="text-white/70 text-sm">Avg Salary Increase</div>
          </div>
        </motion.div>

        {/* Placement Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Placement Heatmap</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {placementStats.map((stat, index) => (
              <motion.div
                key={stat.city}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`bg-gradient-to-r ${stat.color} rounded-xl p-4 text-white text-center relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative z-10">
                    <div className="text-lg font-medium mb-1">{stat.count}</div>
                    <div className="text-sm opacity-90">{stat.city}</div>
                    <div className="text-xs mt-1 flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.growth}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4 inline mr-1" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Before/After Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
                  <div className="text-red-300 text-sm mb-1">Before</div>
                  <div className="text-white">{testimonial.beforeSalary}</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                  <div className="text-green-300 text-sm mb-1">After</div>
                  <div className="text-white">{testimonial.afterSalary}</div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.role}</div>
                  <div className="text-white/60 text-sm">{testimonial.company}</div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1 text-white/60 text-sm">
                  <MapPin className="w-3 h-3" />
                  {testimonial.location}
                </div>
                <div className="flex items-center gap-1 text-white/60 text-sm">
                  <Clock className="w-3 h-3" />
                  {testimonial.timeToInterview}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.4)',
                '0 0 20px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Your success story could be next! Join for ₹150
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}