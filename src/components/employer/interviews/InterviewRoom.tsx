import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MessageSquare, 
  Users,
  Share2,
  Settings,
  X
} from 'lucide-react';

const InterviewRoom = () => {
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  return (
    <div className="fixed inset-0 bg-gray-900">
      {/* Main Content */}
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-white font-semibold">Technical Interview: Frontend Developer</h1>
            <span className="px-2 py-1 bg-red-600 text-white text-sm rounded">
              Recording
            </span>
          </div>
          <button className="text-white hover:text-gray-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-4 grid grid-cols-2 gap-4">
          <div className="relative bg-gray-800 rounded-lg overflow-hidden">
            <video className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                You
              </span>
            </div>
          </div>
          <div className="relative bg-gray-800 rounded-lg overflow-hidden">
            <video className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Sarah Chen
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-800 p-4">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsAudioOn(!isAudioOn)}
              className={`p-4 rounded-full ${
                isAudioOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isAudioOn ? (
                <Mic className="w-6 h-6 text-white" />
              ) : (
                <MicOff className="w-6 h-6 text-white" />
              )}
            </button>
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-4 rounded-full ${
                isVideoOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isVideoOn ? (
                <Video className="w-6 h-6 text-white" />
              ) : (
                <VideoOff className="w-6 h-6 text-white" />
              )}
            </button>
            <button
              onClick={() => setShowChat(!showChat)}
              className={`p-4 rounded-full ${
                showChat ? 'bg-indigo-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setShowParticipants(!showParticipants)}
              className={`p-4 rounded-full ${
                showParticipants ? 'bg-indigo-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <Users className="w-6 h-6 text-white" />
            </button>
            <button className="p-4 rounded-full bg-gray-700 hover:bg-gray-600">
              <Share2 className="w-6 h-6 text-white" />
            </button>
            <button className="p-4 rounded-full bg-gray-700 hover:bg-gray-600">
              <Settings className="w-6 h-6 text-white" />
            </button>
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              End Interview
            </button>
          </div>
        </div>
      </div>

      {/* Side Panels */}
      {showChat && (
        <div className="fixed right-0 top-0 bottom-0 w-80 bg-gray-800 border-l border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white font-semibold">Chat</h2>
          </div>
          <div className="p-4">
            {/* Chat messages would go here */}
          </div>
        </div>
      )}

      {showParticipants && (
        <div className="fixed right-0 top-0 bottom-0 w-80 bg-gray-800 border-l border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white font-semibold">Participants</h2>
          </div>
          <div className="p-4">
            {/* Participant list would go here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewRoom;