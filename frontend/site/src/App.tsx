import { HeroSection } from './components/HeroSection';
import { ServiceStoryboard } from './components/ServiceStoryboard';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { WhatsAppPreview } from './components/WhatsAppPreview';
import { SuccessProof } from './components/SuccessProof';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Toaster 
        theme="dark" 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(30, 41, 59, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white'
          }
        }}
      />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Service Storyboard */}
      <ServiceStoryboard />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Success Proof */}
      <SuccessProof />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* WhatsApp Preview */}
      <WhatsAppPreview />
      
      {/* Smooth scroll indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {['Hero', 'Story', 'Process', 'Proof', 'Pricing', 'WhatsApp'].map((section, index) => (
            <div
              key={section}
              className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer"
              title={section}
            />
          ))}
        </div>
      </div>
      
      {/* Floating CTA - Mobile */}
      <div className="fixed bottom-4 left-4 right-4 lg:hidden z-50">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-full shadow-lg backdrop-blur-sm">
          Start Job Hunt - ₹150
        </button>
      </div>
    </div>
  );
}