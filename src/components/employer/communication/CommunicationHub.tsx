import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Bell, 
  Search, 
  Filter, 
  Bot,
  Send,
  Paperclip,
  Phone,
  Video,
  Calendar,
  Star,
  CheckCircle
} from 'lucide-react';
import MessageThread from './MessageThread';
import EmailComposer from './EmailComposer';
import CommunicationTemplates from './CommunicationTemplates';

interface Message {
  id: number;
  sender: {
    name: string;
    role: string;
    image: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
  type: 'message' | 'email' | 'notification';
}

const CommunicationHub = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [selectedThread, setSelectedThread] = useState<number | null>(null);
  const [showTemplates, setShowTemplates] = useState(false);

  const messages: Message[] = [
    {
      id: 1,
      sender: {
        name: 'Sarah Chen',
        role: 'Frontend Developer Candidate',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      content: "Thank you for considering my application. I'm looking forward to discussing the role further.",
      timestamp: '2 hours ago',
      read: false,
      type: 'message'
    },
    {
      id: 2,
      sender: {
        name: 'Michael Kim',
        role: 'Product Manager Candidate',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      content: 'I have a few questions about the technical assessment.',
      timestamp: '3 hours ago',
      read: true,
      type: 'message'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <h1 className="text-2xl font-bold mb-2">Communication Hub</h1>
        <p className="text-gray-300">
          Manage all candidate communications in one place
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {['messages', 'email', 'notifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search communications..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 bg-transparent"
              />
            </div>
          </div>

          {/* Message List */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedThread(message.id)}
                className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  selectedThread === message.id ? 'bg-gray-50 dark:bg-gray-700' : ''
                }`}
              >
                <div className="flex space-x-4">
                  <img
                    src={message.sender.image}
                    alt={message.sender.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium truncate">
                        {message.sender.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {message.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {message.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.sender.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          {selectedThread ? (
            <MessageThread threadId={selectedThread} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <MessageCircle className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Select a conversation to start messaging
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from your existing conversations or start a new one
              </p>
            </div>
          )}
        </div>
      </div>

      {/* AI Assistant */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-6 h-6 text-indigo-600" />
          <h3 className="text-lg font-semibold">AI Communication Assistant</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Our AI assistant helps draft responses, schedule follow-ups, and maintain professional communication.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Smart response suggestions',
            'Automated follow-ups',
            'Communication analytics'
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded-lg"
            >
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Bot className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: <Mail />, label: 'Compose Email', action: () => {} },
          { icon: <Calendar />, label: 'Schedule Interview', action: () => {} },
          { icon: <Star />, label: 'Save Templates', action: () => setShowTemplates(true) },
          { icon: <CheckCircle />, label: 'Bulk Actions', action: () => {} }
        ].map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="flex items-center justify-center space-x-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>

      {/* Templates Modal */}
      {showTemplates && (
        <CommunicationTemplates onClose={() => setShowTemplates(false)} />
      )}
    </div>
  );
};

export default CommunicationHub;