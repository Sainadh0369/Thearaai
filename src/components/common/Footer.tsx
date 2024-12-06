import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Solutions',
      links: [
        { label: 'For Employers', href: '/employer' },
        { label: 'For Job Seekers', href: '/jobseeker' },
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'Pricing', href: '/pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Press', href: '/press' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' }
      ]
    },
    {
      title: 'Contact',
      items: [
        { icon: <Mail className="w-5 h-5" />, text: 'contact@theara.ai' },
        { icon: <Phone className="w-5 h-5" />, text: '+1 (555) 123-4567' },
        { icon: <MapPin className="w-5 h-5" />, text: 'San Francisco, CA' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/theara-ai' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com/company/theara-ai' },
    { icon: <Twitter className="w-6 h-6" />, href: 'https://twitter.com/theara_ai' }
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {'links' in section ? (
                  section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  section.items.map((item) => (
                    <li key={item.text} className="flex items-center space-x-2 text-gray-400">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-medium">The</span>
            <span className="text-2xl font-bold">Ara</span>
            <span className="text-2xl font-medium">AI</span>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} The Ara AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};