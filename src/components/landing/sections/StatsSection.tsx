import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Briefcase, Award } from 'lucide-react';
import { Container } from '../ui/Container';
import { Grid } from '../ui/Grid';
import { Card } from '../ui/Card';
import { IconBox } from '../ui/IconBox';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '10,000+',
    label: 'Active Users',
    trend: '+25% YoY'
  },
  {
    icon: <Building className="w-8 h-8" />,
    value: '500+',
    label: 'Companies',
    trend: '+40% YoY'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    value: '95%',
    label: 'Match Rate',
    trend: '+15% YoY'
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '98%',
    label: 'Client Satisfaction',
    trend: '+10% YoY'
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-violet-950 to-black">
      <Container>
        <Grid cols={4} gap={8}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                hover 
                className="p-8 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm border border-violet-500/10 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <IconBox 
                    icon={stat.icon} 
                    className="mx-auto mb-4 text-violet-400" 
                    size="lg"
                    variant="primary"
                  />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-violet-200/80">{stat.label}</div>
                  <div className="text-sm text-violet-400 mt-2">
                    {stat.trend}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </section>
  );
};