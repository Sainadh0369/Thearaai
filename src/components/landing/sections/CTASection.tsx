import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Bot } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-violet-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-40 -left-40 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8 mb-16"
        >
          <h2 className="text-4xl font-bold text-white">
            Transform Your Recruitment Journey
          </h2>
          <p className="text-xl text-violet-200/80">
            Join thousands of companies and professionals using The Ara AI's
            autonomous intelligence to revolutionize hiring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Employer Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-xl p-12 border border-violet-500/10 transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-violet-500/20 rounded-lg">
                <BrainCircuit className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">For Employers</h3>
            </div>
            <p className="text-xl mb-12 text-violet-200/80">
              Discover top talent with our autonomous AI matching and intelligent screening
            </p>
            <Link
              to="/employer/solutions"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-violet-600 text-white hover:bg-violet-700 rounded-lg transition-colors group"
            >
              <span>Start Hiring</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Job Seeker Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-xl p-12 border border-violet-500/10 transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-violet-500/20 rounded-lg">
                <Bot className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">For Job Seekers</h3>
            </div>
            <p className="text-xl mb-12 text-violet-200/80">
              Let our AI automate your job search and optimize applications for success
            </p>
            <Link
              to="/jobseeker/solutions"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-violet-600 text-white hover:bg-violet-700 rounded-lg transition-colors group"
            >
              <span>Find Jobs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20"
        >
          {[
            { label: 'Active Users', value: '10,000+' },
            { label: 'Success Rate', value: '95%' },
            { label: 'Time Saved', value: '60%' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-violet-200/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};