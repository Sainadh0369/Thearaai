import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Compass, 
  Users, 
  GraduationCap,
  FolderKanban,
  Video,
  Bot,
  FileText
} from 'lucide-react';

const JobSeekerNav = () => {
  const navItems = [
    { to: '/jobseeker', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', exact: true },
    { to: '/jobseeker/jobs', icon: <Briefcase className="w-5 h-5" />, label: 'Find Jobs' },
    { to: '/jobseeker/automated-search', icon: <Bot className="w-5 h-5" />, label: 'AI Job Search' },
    { to: '/jobseeker/resume-customizer', icon: <FileText className="w-5 h-5" />, label: 'Resume AI' },
    { to: '/jobseeker/career-tools', icon: <Compass className="w-5 h-5" />, label: 'Career Tools' },
    { to: '/jobseeker/network', icon: <Users className="w-5 h-5" />, label: 'Network' },
    { to: '/jobseeker/learning', icon: <GraduationCap className="w-5 h-5" />, label: 'Learning' },
    { to: '/jobseeker/portfolio', icon: <FolderKanban className="w-5 h-5" />, label: 'Portfolio' },
    { to: '/jobseeker/video-interview', icon: <Video className="w-5 h-5" />, label: 'Video Interview' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-2">
      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default JobSeekerNav;