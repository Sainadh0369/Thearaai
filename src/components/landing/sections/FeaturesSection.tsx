import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, LineChart, Users, Target, BrainCircuit, Video, Zap } from 'lucide-react';
import { Container } from '../ui/Container';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-violet-300" />,
    title: 'Self-Learning AI',
    description: 'Our autonomous AI system continuously learns and adapts to optimize your recruitment process in real-time'
  },
  {
    icon: <Video className="w-8 h-8 text-violet-300" />,
    title: 'Video Screening',
    description: 'AI-powered video interviews with intelligent analysis and real-time feedback'
  },
  {
    icon: <Zap className="w-8 h-8 text-violet-300" />,
    title: 'Automated Search',
    description: 'AI automatically finds and applies to matching jobs across multiple platforms'
  },
  {
    icon: <Shield className="w-8 h-8 text-violet-300" />,
    title: 'Smart Verification',
    description: 'Automated background checks and skill assessments for faster hiring'
  },
  {
    icon: <LineChart className="w-8 h-8 text-violet-300" />,
    title: 'Advanced Analytics',
    description: 'Deep insights into recruitment metrics and candidate performance'
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-violet-300" />,
    title: 'Learning System',
    description: 'AI continuously improves matching accuracy based on hiring patterns'
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 backdrop-blur-sm rounded-xl p-8 border border-violet-500/10
    transform hover:scale-105 transition-all duration-300
    hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
  >
    <div className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-xl p-4 w-fit mx-auto mb-6">
      {Icon}
    </div>
    <h3 className="text-xl font-semibold text-violet-100 mb-4 text-center">
      {title}
    </h3>
    <p className="text-violet-200/90 text-center leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const FeaturesSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-violet-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-40 -left-40 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Container>
        {/* Improved heading with better contrast and spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-5xl font-bold mb-8 text-violet-100">
            Next-Generation Recruitment
          </h2>
          <p className="text-xl text-violet-200/90 leading-relaxed">
            Our AI-powered features revolutionize how companies hire and candidates find opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-violet-100 rounded-lg transition-colors inline-flex items-center space-x-2 group">
            <span>Experience the Future</span>
            <Target className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>
        </motion.div>
      </Container>
    </section>
  );
};