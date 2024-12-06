import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, CheckCircle, Rocket } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const steps = [
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Define Requirements',
    description: 'Specify your needs and let AI optimize your job posting for maximum reach'
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: 'AI Matching',
    description: 'Our advanced AI finds and ranks the best candidates based on comprehensive analysis'
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: 'Smart Screening',
    description: 'Automated assessments and background checks streamline verification'
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: 'Hire Fast',
    description: 'Make informed decisions and hire with confidence using AI-driven insights'
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-violet-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-40 -left-40 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="How It Works"
          description="Simple, efficient, and effective recruitment process powered by AI"
          className="mb-20 text-white"
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 transform -translate-y-1/2 z-0" />

          {/* Steps */}
          <div className="relative z-10 grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/10 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl text-violet-400">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-violet-200/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};