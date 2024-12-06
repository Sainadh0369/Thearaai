import React, { useState, useRef } from 'react';
import { Video, Mic, MicOff, Camera, CameraOff, Play, Save, Bot, AlertCircle } from 'lucide-react';

interface VideoProfileSetupProps {
  onSave: (videoBlob: Blob) => void;
  question: string;
}

const VideoProfileSetup: React.FC<VideoProfileSetupProps> = ({ onSave, question }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: isVideoOn,
        audio: isAudioOn
      });
      
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setRecordedBlob(blob);
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      setIsRecording(false);
    }
  };

  const handleSave = () => {
    if (recordedBlob) {
      onSave(recordedBlob);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Bot className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">AI-Generated Question</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{question}</p>
      </div>

      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full"
          autoPlay
          playsInline
          muted
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-2 rounded-lg ${
              isVideoOn ? 'bg-gray-100 dark:bg-gray-700' : 'bg-red-100 dark:bg-red-900 text-red-600'
            }`}
          >
            {isVideoOn ? <Camera className="w-5 h-5" /> : <CameraOff className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsAudioOn(!isAudioOn)}
            className={`p-2 rounded-lg ${
              isAudioOn ? 'bg-gray-100 dark:bg-gray-700' : 'bg-red-100 dark:bg-red-900 text-red-600'
            }`}
          >
            {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Play className="w-4 h-4" />
              <span>Start Recording</span>
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <span>Stop Recording</span>
            </button>
          )}

          {recordedBlob && (
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Save className="w-4 h-4" />
              <span>Save Response</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoProfileSetup;