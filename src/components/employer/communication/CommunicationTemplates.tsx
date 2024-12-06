import React from 'react';
import { X, Plus, Edit, Trash2, Bot } from 'lucide-react';

interface CommunicationTemplatesProps {
  onClose: () => void;
}

const CommunicationTemplates: React.FC<CommunicationTemplatesProps> = ({ onClose }) => {
  const templates = [
    {
      id: 1,
      name: 'Interview Invitation',
      content: 'Dear [Name],\n\nThank you for applying to [Position]. We would like to invite you for an interview...',
      category: 'Interview'
    },
    {
      id: 2,
      name: 'Technical Assessment',
      content: 'Hello [Name],\n\nAs part of our hiring process, we would like you to complete a technical assessment...',
      category: 'Assessment'
    },
    {
      id: 3,
      name: 'Offer Letter',
      content: 'Dear [Name],\n\nWe are pleased to offer you the position of [Role] at [Company]...',
      category: 'Offer'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">Communication Templates</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* AI Assistant */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Bot className="w-5 h-5 text-indigo-600" />
              <span className="font-medium">AI Template Generation</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Let our AI help you create personalized templates based on your communication style and requirements.
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Generate Template
            </button>
          </div>

          {/* Template List */}
          <div className="space-y-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">{template.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {template.category}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <pre className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                  {template.content}
                </pre>
              </div>
            ))}
          </div>

          {/* Add Template Button */}
          <button className="mt-6 flex items-center space-x-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500">
            <Plus className="w-5 h-5" />
            <span>Add Template</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationTemplates;