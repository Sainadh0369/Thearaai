import React, { useState } from 'react';
import { 
  Box, 
  ArrowRight, 
  Database, 
  Server,
  Globe,
  Cpu,
  Plus,
  Save,
  Download,
  Share2
} from 'lucide-react';

const SystemDesignTool = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const componentTypes = [
    { id: 'client', icon: <Globe />, name: 'Client' },
    { id: 'server', icon: <Server />, name: 'Server' },
    { id: 'database', icon: <Database />, name: 'Database' },
    { id: 'service', icon: <Cpu />, name: 'Service' }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {componentTypes.map((type) => (
              <button
                key={type.id}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                {type.icon}
                <span>{type.name}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <Save className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Design Canvas */}
      <div className="flex-1 bg-gray-900 p-4">
        <div className="w-full h-full border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <Plus className="w-12 h-12 mx-auto mb-2" />
            <p>Drag components here to start designing</p>
          </div>
        </div>
      </div>

      {/* Properties Panel */}
      <div className="bg-gray-800 p-4 w-64 border-l border-gray-700">
        <h3 className="text-white font-semibold mb-4">Properties</h3>
        {selectedElement ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white px-3 py-1.5 rounded-lg mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Type</label>
              <select className="w-full bg-gray-700 text-white px-3 py-1.5 rounded-lg mt-1">
                {componentTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400">Description</label>
              <textarea
                className="w-full bg-gray-700 text-white px-3 py-1.5 rounded-lg mt-1 resize-none"
                rows={4}
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Select an element to edit its properties</p>
        )}
      </div>
    </div>
  );
};

export default SystemDesignTool;