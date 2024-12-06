import React, { useState, useRef, useEffect } from 'react';
import { 
  Pencil, 
  Square, 
  Circle, 
  Type, 
  Eraser,
  Undo,
  Redo,
  Download,
  Trash2,
  Move
} from 'lucide-react';

const WhiteboardTool = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);

  const tools = [
    { id: 'pencil', icon: <Pencil />, name: 'Pencil' },
    { id: 'rectangle', icon: <Square />, name: 'Rectangle' },
    { id: 'circle', icon: <Circle />, name: 'Circle' },
    { id: 'text', icon: <Type />, name: 'Text' },
    { id: 'eraser', icon: <Eraser />, name: 'Eraser' },
    { id: 'move', icon: <Move />, name: 'Move' }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setTool(t.id)}
                className={`p-2 rounded-lg ${
                  tool === t.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title={t.name}
              >
                {t.icon}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-700" />
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
            <select
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
              className="bg-gray-700 text-white px-3 py-1.5 rounded-lg"
            >
              <option value="1">Thin</option>
              <option value="2">Medium</option>
              <option value="4">Thick</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <Undo className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <Redo className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-gray-700" />
            <button className="p-2 text-gray-400 hover:text-white">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-white">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => setIsDrawing(false)}
          onMouseLeave={() => setIsDrawing(false)}
        />
      </div>
    </div>
  );
};

export default WhiteboardTool;