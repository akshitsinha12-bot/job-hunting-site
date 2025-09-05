import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle, MessageCircle, BookOpen, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServiceStoryboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const panels = [
    {
      title: "Profile Intake",
      description: "Share your skills, experience, and career goals with our smart intake system",
      icon: Target,
      image: "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBqb2IlMjBpbnRlcnZpZXclMjBtb2Rlcm58ZW58MXx8fHwxNzU3MDg1MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
      locations: ["Mumbai", "Bangalore", "Pune", "Delhi"]
    },
    {
      title: "Consultant Review",
      description: "Expert consultants analyze your profile and create a personalized job hunting strategy",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0YW50JTIwbWVudG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MDg1MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      checklist: ["Profile optimized", "Skills assessed", "Strategy created", "Goals aligned"]
    },
    {
      title: "Job Alerts on WhatsApp",
      description: "Get personalized job recommendations delivered directly to your WhatsApp",
      icon: MessageCircle,
      image: "https://images.unsplash.com/photo-1619099203833-17dc45fd843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb24lMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzU3MDg1MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      messages: [
        "🎯 New role: Senior React Developer at TechCorp - ₹12-15 LPA",
        "📍 Location: Bangalore | Experience: 3-5 years",
        "🔗 Apply now: [Link] | Deadline: 5 days"
      ]
    },
    {
      title: "Free Mini-Courses",
      description: "Access exclusive courses on resume building, interview skills, and career growth",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1594235045856-a6315f0c4083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwb2ZmaWNlJTIwdGVjaG5vbG9neSUyMGdyYWRpZW50fGVufDF8fHx8MTc1NzA4NTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      courses: [
        { title: "ATS Resume Optimization", duration: "15 min", completion: "90%" },
        { title: "Cold Outreach Mastery", duration: "20 min", completion: "75%" },
        { title: "Interview Confidence", duration: "25 min", completion: "100%" }
      ]
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your Journey to Success
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From profile to placement - here's how we make it happen
          </p>
        </motion.div>

        <div className="space-y-32">
          {panels.map((panel, index) => {
            const isEven = index % 2 === 0;
            const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
            const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

            return (
              <motion.div
                key={panel.title}
                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                style={{ y, opacity }}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <panel.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl text-white">{panel.title}</h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg text-white/70"
                  >
                    {panel.description}
                  </motion.p>

                  {/* Panel-specific content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {panel.skills && (
                      <div className="flex flex-wrap gap-2">
                        {panel.skills.map((skill, i) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {panel.checklist && (
                      <div className="space-y-3">
                        {panel.checklist.map((item, i) => (
                          <motion.div
                            key={item}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.2 }}
                          >
                            <motion.div
                              className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ delay: 0.8 + i * 0.2, duration: 0.3 }}
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                            <span className="text-white/80">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {panel.messages && (
                      <div className="space-y-2">
                        {panel.messages.map((message, i) => (
                          <motion.div
                            key={i}
                            className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-white/80"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.3 }}
                          >
                            {message}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {panel.courses && (
                      <div className="space-y-3">
                        {panel.courses.map((course, i) => (
                          <motion.div
                            key={course.title}
                            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.2 }}
                            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-white">{course.title}</span>
                              <span className="text-blue-400">{course.duration}</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: course.completion }}
                                transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-1 relative"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <ImageWithFallback
                      src={panel.image}
                      alt={panel.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    
                    {/* Glassy overlay effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </div>
                  
                  {/* Neon glow effect */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}