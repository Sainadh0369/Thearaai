// Update the existing Certifications component to include the FreeCertifications tab
import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  Clock, 
  Download, 
  Share2, 
  TrendingUp,
  BrainCircuit,
  Star,
  Calendar,
  ArrowRight,
  Globe
} from 'lucide-react';
import FreeCertifications from './FreeCertifications';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('my-certs');

  return (
    <div className="space-y-8">
      {/* Header with Tabs */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Professional Certifications</h1>
            <p className="text-lg opacity-90">Showcase your verified skills and expertise</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('my-certs')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'my-certs'
                ? 'bg-white text-indigo-600'
                : 'text-white hover:bg-white/10'
            }`}
          >
            My Certifications
          </button>
          <button
            onClick={() => setActiveTab('free-certs')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'free-certs'
                ? 'bg-white text-indigo-600'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Free Certifications
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'my-certs' ? (
        // Existing certifications content
        <div>
          {/* ... rest of your existing Certifications component code ... */}
        </div>
      ) : (
        <FreeCertifications />
      )}
    </div>
  );
};

export default Certifications;