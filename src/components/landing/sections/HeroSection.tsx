import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Star, Sparkles, ArrowRight, BrainCircuit, Globe, Shield } from 'lucide-react';
import { Button } from '../ui/Button';

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    className="flex items-center bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/10 shadow-[0_0_50px_rgba(139,92,246,0.1)]"
  >
    <div className="flex items-center space-x-4">
      <BrainCircuit className="w-16 h-16 text-violet-500" />
      <div className="flex items-baseline">
        <span className="text-5xl font-light text-white mr-3">The</span>
        <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 tracking-tight">
          Ara
        </span>
        <span className="text-5xl font-light text-white ml-3">AI</span>
      </div>
    </div>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-xl p-8 border border-violet-500/10
    transform hover:scale-105 transition-all duration-300
    hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
  >
    <div className="bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl p-4 w-fit mx-auto mb-6">
      <Icon className="w-8 h-8 text-violet-400" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-4 text-center">
      {title}
    </h3>
    <p className="text-violet-100/80 text-center leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-950 to-black" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-40 -left-40 bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-20"
          >
            <Logo />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl font-bold leading-tight mb-8"
          >
            <span className="text-white">Autonomous</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400">
              AI-Powered
            </span>{' '}
            <span className="text-white">Recruitment</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-violet-100/80 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Experience the future of recruitment with our self-learning AI system.
            Autonomous matching, real-time verification, and intelligent automation
            for both employers and job seekers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <Button 
              variant="primary" 
              size="lg" 
              to="/employer"
              className="group min-w-[200px] bg-violet-600 hover:bg-violet-700 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              <span>For Employers</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              to="/jobseeker"
              className="group min-w-[200px] border-violet-500/20 hover:border-violet-500/40"
            >
              <span>For Job Seekers</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={Bot}
              title="Self-Learning AI"
              description="Our autonomous AI system continuously learns and adapts to optimize your recruitment process in real-time."
            />
            <FeatureCard
              icon={Shield}
              title="Blockchain Verification"
              description="Secure, immutable verification of credentials and work history using advanced blockchain technology."
            />
            <FeatureCard
              icon={Globe}
              title="Global Talent Network"
              description="Access our real-time talent exchange network spanning across industries and regions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};