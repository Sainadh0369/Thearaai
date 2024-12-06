import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Video, Shield, LineChart, Users, BrainCircuit, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Grid } from '../ui/Grid';
import { Card } from '../ui/Card';
import { IconBox } from '../ui/IconBox';
import { Button } from '../ui/Button';

export const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('employers');

  const solutions = {
    employers: [
      {
        icon: <Bot className="w-8 h-8" />,
        title: 'AI Matching',
        description: 'Smart algorithms match perfect candidates to your requirements'
      },
      {
        icon: <Video className="w-8 h-8" />,
        title: 'Video Screening',
        description: 'Automated video interviews with AI analysis'
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: 'Smart Verification',
        description: 'Automated background checks and skill validation'
      },
      {
        icon: <LineChart className="w-8 h-8" />,
        title: 'Analytics',
        description: 'Deep insights into your recruitment metrics'
      }
    ],
    jobseekers: [
      {
        icon: <Bot className="w-8 h-8" />,
        title: 'Automated Search',
        description: 'AI finds and applies to matching jobs for you'
      },
      {
        icon: <Video className="w-8 h-8" />,
        title: 'Video Profile',
        description: 'Stand out with AI-powered video responses'
      },
      {
        icon: <BrainCircuit className="w-8 h-8" />,
        title: 'Career AI',
        description: '24/7 career guidance and support'
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: 'Skill Validation',
        description: 'Verify and showcase your expertise'
      }
    ]
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-violet-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-40 -left-40 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Solutions for Everyone"
          description="Advanced features powered by AI for both employers and job seekers"
          className="mb-16 text-white"
        />

        {/* Solution Tabs */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex p-1.5 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-2xl">
            {['employers', 'jobseekers'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-violet-600 text-white shadow-lg'
                    : 'text-violet-200 hover:text-white'
                }`}
              >
                For {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <Grid cols={2} gap={8} className="mb-20">
          {solutions[activeTab === 'employers' ? 'employers' : 'jobseekers'].map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                hover 
                className="p-12 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm border border-violet-500/10 transform hover:scale-105 transition-all duration-300"
              >
                <IconBox 
                  icon={solution.icon} 
                  className="mb-8 text-violet-400" 
                  size="lg"
                  variant={index % 2 === 0 ? 'primary' : 'secondary'}
                />
                <h3 className="text-2xl font-semibold mb-4 text-white">{solution.title}</h3>
                <p className="text-lg text-violet-200/80">
                  {solution.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </Grid>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h3 className="text-3xl font-bold text-white">
            {activeTab === 'employers' 
              ? 'Ready to Transform Your Hiring?' 
              : 'Ready to Accelerate Your Career?'}
          </h3>
          <p className="text-xl text-violet-200/80 max-w-2xl mx-auto">
            {activeTab === 'employers'
              ? 'Join thousands of companies using The Ara AI to build amazing teams'
              : 'Join thousands of professionals using The Ara AI to find their dream jobs'}
          </p>
          <div className="flex justify-center gap-8">
            <Button
              variant="primary"
              size="lg"
              to={`/${activeTab}`}
              className="min-w-[200px] text-lg bg-violet-600 hover:bg-violet-700"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              to={`/${activeTab}/solutions`}
              className="min-w-[200px] text-lg border-violet-500/20 hover:border-violet-500/40"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};