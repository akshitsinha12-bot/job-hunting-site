import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { UserPlus, CreditCard, Share, Bell, BookOpen } from 'lucide-react';

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in 30 seconds",
      tips: ["Use your primary email", "Choose a strong password", "Verify your mobile number"],
      timeline: "30 seconds",
      response: "Instant confirmation"
    },
    {
      icon: CreditCard,
      title: "Pay ₹150 via UPI",
      description: "Secure one-time payment to unlock all features",
      tips: ["UPI/GPay/PhonePe supported", "Instant payment confirmation", "Full refund if not satisfied"],
      timeline: "1 minute",
      response: "Immediate access"
    },
    {
      icon: Share,
      title: "Share Details",
      description: "Upload resume and share your career preferences",
      tips: ["Update your latest resume", "Specify salary expectations", "Choose preferred locations"],
      timeline: "5 minutes",
      response: "Profile review begins"
    },
    {
      icon: Bell,
      title: "Get Curated Roles",
      description: "Receive personalized job matches on WhatsApp",
      tips: ["Daily relevant openings", "Company insights included", "Application deadlines tracked"],
      timeline: "Within 2 hours",
      response: "Continuous updates"
    },
    {
      icon: BookOpen,
      title: "Learn + Apply",
      description: "Access free courses and apply to opportunities",
      tips: ["Resume optimization tips", "Interview preparation", "Salary negotiation guide"],
      timeline: "Ongoing",
      response: "24/7 support available"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your journey from signup to success in 5 simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Serpentine Path SVG */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ height: `${steps.length * 200}px` }}
          >
            <motion.path
              d={`M 50 100 Q 400 150 350 250 Q 300 350 650 400 Q 1000 450 950 550 Q 900 650 1250 700`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10 5"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Progress Indicator */}
          <motion.div
            className="absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
            style={{ 
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              maxHeight: `${steps.length * 200 - 100}px`
            }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  {/* Step Number & Icon */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center relative z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-400"
                      animate={{ 
                        scale: hoveredStep === index ? [1, 1.3, 1] : 1,
                        opacity: hoveredStep === index ? [0.5, 0, 0.5] : 0.5
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 20px 50px rgba(59, 130, 246, 0.1)'
                      }}
                      animate={{
                        borderColor: hoveredStep === index ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <h3 className="text-2xl mb-3 text-white">{step.title}</h3>
                      <p className="text-white/70 mb-4">{step.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {step.timeline}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                          {step.response}
                        </span>
                      </div>

                      {/* Expandable Tips */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: hoveredStep === index ? 'auto' : 0,
                          opacity: hoveredStep === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10">
                          <h4 className="text-white/90 mb-2">Pro Tips:</h4>
                          <ul className="space-y-1">
                            {step.tips.map((tip, tipIndex) => (
                              <motion.li
                                key={tipIndex}
                                className="text-white/60 text-sm flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: tipIndex * 0.1 }}
                              >
                                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                                {tip}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white cursor-pointer"
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
            Ready to start? It takes less than 2 minutes!
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}