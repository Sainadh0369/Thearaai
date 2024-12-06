import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  BarChart,
  Building,
  Shield,
  Calendar,
  Video,
  MessageCircle
} from 'lucide-react';

const EmployerNav = () => {
  const navItems = [
    { to: '/employer', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', exact: true },
    { to: '/employer/jobs', icon: <Briefcase className="w-5 h-5" />, label: 'Job Postings' },
    { to: '/employer/candidates', icon: <Users className="w-5 h-5" />, label: 'Candidates' },
    { to: '/employer/interviews', icon: <Video className="w-5 h-5" />, label: 'Interviews' },
    { to: '/employer/communication', icon: <MessageCircle className="w-5 h-5" />, label: 'Communication' },
    { to: '/employer/analytics', icon: <BarChart className="w-5 h-5" />, label: 'Analytics' },
    { to: '/employer/profile', icon: <Building className="w-5 h-5" />, label: 'Company Profile' },
    { to: '/employer/verification', icon: <Shield className="w-5 h-5" />, label: 'Verification' },
    { to: '/employer/events', icon: <Calendar className="w-5 h-5" />, label: 'Events' }
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

export default EmployerNav;