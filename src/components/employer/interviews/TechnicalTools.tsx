import React, { useState } from 'react';
import { 
  Code, 
  Play, 
  Share2, 
  Save,
  Download,
  Upload,
  Settings,
  Plus,
  Edit,
  Trash2,
  Monitor,
  Split,
  Maximize2,
  Copy
} from 'lucide-react';

const TechnicalTools = () => {
  const [activeTab, setActiveTab] = useState('code');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' }
  ];

  const templates = [
    {
      name: 'Frontend React Component',
      description: 'Build a simple React component',
      language: 'typescript',
      code: `interface Props {
  title: string;
  onAction: () => void;
}

const MyComponent: React.FC<Props> = ({ title, onAction }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onAction}>Click me</button>
    </div>
  );
};`
    },
    {
      name: 'Algorithm Challenge',
      description: 'Implement a sorting algorithm',
      language: 'javascript',
      code: `function sortArray(arr) {
  // Implement your sorting logic here
  return arr;
}

// Test cases
const input = [5, 2, 8, 1, 9];
console.log(sortArray(input));`
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-700 text-white px-3 py-1.5 rounded-lg"
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-gray-700 text-white px-3 py-1.5 rounded-lg"
          >
            <option value="vs-dark">Dark</option>
            <option value="vs-light">Light</option>
          </select>
          <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Run Code</span>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-white">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white">
            <Save className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-4">
        {/* Code Editor */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-2 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-gray-400" />
              <span className="text-white">Code Editor</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-white">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[500px] bg-gray-900 text-white font-mono p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your code here..."
            />
          </div>
        </div>

        {/* Output/Preview */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-2 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <Monitor className="w-5 h-5 text-gray-400" />
              <span className="text-white">Output</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-400 hover:text-white">
                <Split className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-white">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="w-full h-[500px] bg-gray-900 text-white font-mono p-4 rounded-lg overflow-auto">
              {output || 'Output will appear here...'}
            </div>
          </div>
        </div>
      </div>

      {/* Templates Panel */}
      <div className="bg-gray-800 p-4 border-t border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Code Templates</h3>
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Plus className="w-4 h-4" />
            <span>Add Template</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{template.name}</h4>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-white">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">{template.description}</p>
              <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">
                {template.language}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalTools;