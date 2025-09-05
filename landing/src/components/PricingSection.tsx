import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Check, QrCode, Smartphone, Shield, RefreshCw } from 'lucide-react';

export function PricingSection() {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [showQR, setShowQR] = useState(false);

  const inclusions = [
    "Human review of profile",
    "Daily relevant openings",
    "Practical mini-courses", 
    "Interview prep shortcuts",
    "WhatsApp support",
    "Resume optimization",
    "Salary negotiation guide",
    "ATS optimization tips"
  ];

  const handleUPIPayment = () => {
    setShowQR(true);
    setPaymentStatus('pending');
    
    // Simulate payment process
    setTimeout(() => {
      setPaymentStatus('success');
      setTimeout(() => {
        setShowQR(false);
        setPaymentStatus('idle');
      }, 3000);
    }, 5000);
  };

  const handleRetry = () => {
    setPaymentStatus('idle');
    setShowQR(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            One-time payment. Lifetime value. No hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Pricing Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
            {/* Background gradient effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
              animate={{ 
                background: [
                  'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
                  'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
                  'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)'
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-baseline gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">₹150</span>
                  <span className="text-white/60">one-time</span>
                </motion.div>
                <motion.p
                  className="text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Everything you need to land your dream job
                </motion.p>
              </div>

              {/* Inclusions */}
              <motion.div
                className="grid md:grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {inclusions.map((inclusion, index) => (
                  <motion.div
                    key={inclusion}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                    <span className="text-white/80">{inclusion}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* UPI Payment Section */}
              {!showQR ? (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Button
                    size="lg"
                    onClick={handleUPIPayment}
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-6 text-lg mb-4 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <QrCode className="mr-2 w-5 h-5" />
                    Pay ₹150 via UPI
                  </Button>

                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {['PhonePe', 'GPay', 'Paytm', 'UPI'].map((app) => (
                      <motion.div
                        key={app}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {app}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-6 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>100% Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      <span>Full Refund Policy</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  {paymentStatus === 'pending' && (
                    <>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm mx-auto">
                        <motion.div
                          className="w-48 h-48 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <QrCode className="w-32 h-32 text-gray-800" />
                        </motion.div>
                        <p className="text-white/80 mb-2">Scan QR code to pay ₹150</p>
                        <p className="text-white/60 text-sm">Or use UPI ID: jobhunt@upi</p>
                      </div>

                      <motion.div
                        className="flex items-center justify-center gap-2 text-yellow-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Smartphone className="w-5 h-5" />
                        <span>Waiting for payment...</span>
                      </motion.div>

                      <Button
                        variant="outline"
                        onClick={handleRetry}
                        className="border-white/20 text-white/80 hover:bg-white/10"
                      >
                        Cancel Payment
                      </Button>
                    </>
                  )}

                  {paymentStatus === 'success' && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center"
                    >
                      <motion.div
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Check className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl text-white mb-2">Payment Successful!</h3>
                      <p className="text-white/70 mb-4">
                        WhatsApp onboarding will begin within 2 hours
                      </p>
                      <motion.div
                        className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 inline-block"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Check your WhatsApp for next steps!
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Risk Reversal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/80">
                No fit? <span className="text-green-400">Quick refund policy</span> - No questions asked
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}