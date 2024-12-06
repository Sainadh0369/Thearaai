import React, { useState } from 'react';
import { Bell, Briefcase, Users, Award, X } from 'lucide-react';

interface Notification {
  id: number;
  type: 'job' | 'network' | 'achievement';
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'job',
      title: 'New Job Match',
      description: 'A new Senior Frontend Developer position matches your profile',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'network',
      title: 'New Connection',
      description: 'Sarah Chen accepted your connection request',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Skill Badge Earned',
      description: 'You earned the React Expert badge',
      time: '1 day ago',
      read: true,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'job':
        return <Briefcase className="w-5 h-5" />;
      case 'network':
        return <Users className="w-5 h-5" />;
      case 'achievement':
        return <Award className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed top-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Notifications</h3>
          <span className="text-xs text-gray-500">
            {notifications.filter((n) => !n.read).length} unread
          </span>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 ${
              !notification.read ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-400">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {notification.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-xs text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 mt-2"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t dark:border-gray-700">
        <button className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;