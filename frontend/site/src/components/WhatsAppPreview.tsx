import { motion } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, Phone, Settings, Globe } from 'lucide-react';
import { Button } from './ui/button';

export function WhatsAppPreview() {
  const [selectedFrequency, setSelectedFrequency] = useState('daily');
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const conversations = [
    {
      type: 'job-alert',
      title: 'Job Alert',
      messages: [
        {
          type: 'incoming',
          content: '🎯 *New Role Alert!*\n\n*Senior React Developer*\nTechCorp Solutions\n📍 Bangalore\n💰 ₹12-15 LPA\n📅 3-5 years experience\n\n🔗 Apply: techcorp.com/careers/react-dev\n⏰ Deadline: 5 days\n\n*Why this matches you:*\n✅ React expertise\n✅ Bangalore preference\n✅ Salary range match',
          time: '10:30 AM'
        }
      ]
    },
    {
      type: 'resume-feedback',
      title: 'Resume Feedback',
      messages: [
        {
          type: 'incoming',
          content: '📝 *Resume Review Complete!*\n\n*Overall Score: 7.5/10*\n\n✅ *Strengths:*\n• Strong technical skills section\n• Good project descriptions\n• ATS-friendly format\n\n⚠️ *Improvements needed:*\n• Add quantified achievements\n• Include relevant keywords\n• Optimize for job description\n\n📎 Download optimized version:\nbit.ly/your-resume-v2',
          time: '2:15 PM'
        }
      ]
    },
    {
      type: 'course',
      title: 'Course Drop',
      messages: [
        {
          type: 'incoming',
          content: '🎓 *New Mini-Course Available!*\n\n*"Cold Outreach That Works"*\n⏱️ 15 minutes\n🎯 Land interviews through LinkedIn\n\n*What you\'ll learn:*\n• Craft compelling messages\n• Research hiring managers\n• Follow-up strategies\n• Templates that convert\n\n🔗 Start now: courses.jobhunt.com/outreach\n\n*Pro tip:* Complete within 24 hours for bonus templates!',
          time: '4:45 PM'
        }
      ]
    },
    {
      type: 'scheduling',
      title: 'Consultation Scheduling',
      messages: [
        {
          type: 'outgoing',
          content: 'Hi! I need help with interview preparation for a senior role.',
          time: '9:20 AM'
        },
        {
          type: 'incoming',
          content: '👋 Hi there! I\'d be happy to help with your interview prep.\n\n📅 *Available slots today:*\n• 11:00 AM - 11:30 AM\n• 2:30 PM - 3:00 PM\n• 5:00 PM - 5:30 PM\n\n📋 *What we\'ll cover:*\n• Common questions for your level\n• STAR method practice\n• Salary negotiation tips\n• Company-specific insights\n\nReply with your preferred time!',
          time: '9:22 AM'
        }
      ]
    }
  ];

  const [activeConversation, setActiveConversation] = useState(0);

  const frequencies = [
    { value: 'daily', label: 'Daily Updates', description: 'Get 3-5 job matches daily' },
    { value: 'weekly', label: 'Weekly Digest', description: 'Curated list every Sunday' },
    { value: 'instant', label: 'Instant Alerts', description: 'Real-time notifications' }
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'regional', label: 'Regional Languages' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-slate-900 to-green-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            WhatsApp Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get personalized guidance, job alerts, and courses delivered directly to your WhatsApp
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* WhatsApp Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-green-600 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">JobHunt Assistant</h3>
                  <p className="text-green-100 text-sm">Online</p>
                </div>
                <Phone className="w-5 h-5 text-white" />
              </div>

              {/* Conversation Tabs */}
              <div className="flex overflow-x-auto bg-gray-100">
                {conversations.map((conv, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveConversation(index)}
                    className={`px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                      activeConversation === index
                        ? 'bg-green-500 text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {conv.title}
                  </button>
                ))}
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto bg-gray-50 p-4 space-y-3">
                {conversations[activeConversation].messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className={`flex ${message.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-2xl ${
                        message.type === 'outgoing'
                          ? 'bg-green-500 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-md'
                      }`}
                    >
                      <div className="whitespace-pre-line text-sm">{message.content}</div>
                      <div className={`text-xs mt-1 ${
                        message.type === 'outgoing' ? 'text-green-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glowing effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Configuration Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Save Number CTA */}
            <div className="text-center lg:text-left">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 mb-4 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <MessageCircle className="mr-2 w-5 h-5" />
                Save Our WhatsApp Number
              </Button>
              <p className="text-white/60 text-sm">
                +91 98765 43210 • Add to contacts for easy access
              </p>
            </div>

            {/* Frequency Settings */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-blue-400" />
                <h3 className="text-white text-lg">Notification Frequency</h3>
              </div>
              
              <div className="space-y-3">
                {frequencies.map((freq) => (
                  <motion.label
                    key={freq.value}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      selectedFrequency === freq.value
                        ? 'bg-blue-500/20 border border-blue-500/30'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="frequency"
                      value={freq.value}
                      checked={selectedFrequency === freq.value}
                      onChange={(e) => setSelectedFrequency(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedFrequency === freq.value
                        ? 'border-blue-400 bg-blue-400'
                        : 'border-white/30'
                    }`}>
                      {selectedFrequency === freq.value && (
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-white">{freq.label}</div>
                      <div className="text-white/60 text-sm">{freq.description}</div>
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Language Settings */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-green-400" />
                <h3 className="text-white text-lg">Language Preference</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.value}
                    onClick={() => setSelectedLanguage(lang.value)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      selectedLanguage === lang.value
                        ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white/70'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {lang.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="text-white text-lg mb-4">What you'll get on WhatsApp:</h3>
              {[
                'Personalized job matches',
                'Resume feedback & tips',
                'Interview preparation',
                'Salary negotiation help',
                'Free mini-courses',
                '24/7 support access'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}