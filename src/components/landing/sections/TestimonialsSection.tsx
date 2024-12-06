import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TestimonialCard } from '../ui/TestimonialCard';

const testimonials = [
  {
    quote: "The Ara AI has revolutionized our hiring process. We've reduced time-to-hire by 60% while finding better candidates.",
    author: "Sarah Chen",
    role: "Head of Talent, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    rating: 5
  },
  {
    quote: "The AI matching is incredible. Every candidate we interview is already pre-qualified and a great culture fit.",
    author: "Michael Kim",
    role: "CEO, InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 5
  },
  {
    quote: "We've seen a significant improvement in the quality of hires and team satisfaction since using The Ara AI.",
    author: "Emily Davis",
    role: "HR Director, GlobalCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    rating: 5
  }
];

export const TestimonialsSection = () => {
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-violet-200/80">
            Success stories from companies that transformed their hiring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm rounded-xl p-8 border border-violet-500/10 h-full transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-violet-500/20"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-violet-200/80">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-violet-200/80 italic">"{testimonial.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};