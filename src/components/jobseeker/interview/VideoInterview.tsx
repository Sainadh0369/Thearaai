import React, { useState, useRef, useEffect } from 'react';
import { Video, Mic, MicOff, Camera, CameraOff, Send, Bot } from 'lucide-react';

export const VideoInterview: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const questions = [
    'Tell me about your experience with React and modern frontend development.',
    'How do you approach problem-solving in your development work?',
    'Describe a challenging project you worked on and how you handled it.',
    'What are your career goals and how do they align with this position?'
  ];

  useEffect(() => {
    if (videoRef.current && isVideoOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: isAudioOn })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error('Error accessing media devices:', err));
    }
  }, [isVideoOn, isAudioOn]);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Add recording logic here
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // Add stop recording logic here
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">AI Video Interview</h1>
            <p className="text-lg opacity-90">
              Answer questions naturally - our AI will analyze your responses
            </p>
          </div>
        </div>
      </div>

      {/* Video Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
          {isVideoOn ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <CameraOff className="w-12 h-12" />
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-4 rounded-full ${
              isVideoOn ? 'bg-gray-100 hover:bg-gray-200' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {isVideoOn ? (
              <Camera className="w-6 h-6 text-gray-900" />
            ) : (
              <CameraOff className="w-6 h-6 text-white" />
            )}
          </button>
          <button
            onClick={() => setIsAudioOn(!isAudioOn)}
            className={`p-4 rounded-full ${
              isAudioOn ? 'bg-gray-100 hover:bg-gray-200' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {isAudioOn ? (
              <Mic className="w-6 h-6 text-gray-900" />
            ) : (
              <MicOff className="w-6 h-6 text-white" />
            )}
          </button>
          <button
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            className={`px-6 py-3 rounded-lg ${
              isRecording
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gray-900 hover:bg-gray-800 text-white'
            }`}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
      </div>

      {/* Current Question */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Current Question</h2>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-lg">{questions[currentQuestion]}</p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg disabled:opacity-50"
          >
            Previous Question
          </button>
          <button
            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={currentQuestion === questions.length - 1}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg disabled:opacity-50"
          >
            Next Question
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tips for Success</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li>• Ensure you're in a quiet, well-lit environment</li>
          <li>• Speak clearly and maintain eye contact with the camera</li>
          <li>• Take your time to think before answering</li>
          <li>• Provide specific examples in your responses</li>
          <li>• Be authentic and show your personality</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoInterview;