import React from 'react';
import { 
  Shield, 
  Download, 
  Eye, 
  Clock, 
  CheckCircle, 
  XCircle,
  AlertTriangle
} from 'lucide-react';

const VerificationDetails = ({ verificationId }: { verificationId: number }) => {
  // Mock data - in a real app, this would be fetched based on the ID
  const details = {
    candidate: {
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
    status: 'in-progress',
    progress: 75,
    startDate: '2024-03-01',
    eta: '2024-03-15',
    documents: [
      {
        type: 'Identity',
        items: [
          { name: 'Government ID', status: 'verified', date: '2024-03-01' },
          { name: 'Address Proof', status: 'verified', date: '2024-03-02' }
        ]
      },
      {
        type: 'Education',
        items: [
          { name: 'Bachelor\'s Degree', status: 'verified', date: '2024-03-03' },
          { name: 'Master\'s Degree', status: 'verified', date: '2024-03-03' }
        ]
      },
      {
        type: 'Employment',
        items: [
          { name: 'Previous Employment', status: 'in-progress', date: '2024-03-04' },
          { name: 'Reference Check', status: 'pending', date: null }
        ]
      }
    ],
    timeline: [
      {
        date: '2024-03-01',
        event: 'Verification process initiated',
        type: 'info'
      },
      {
        date: '2024-03-02',
        event: 'Identity verification completed',
        type: 'success'
      },
      {
        date: '2024-03-03',
        event: 'Education verification completed',
        type: 'success'
      },
      {
        date: '2024-03-04',
        event: 'Employment verification in progress',
        type: 'warning'
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={details.candidate.image}
              alt={details.candidate.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{details.candidate.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {details.candidate.role}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                details.status === 'completed'
                  ? 'bg-green-100 dark:bg-green-900 text-green-600'
                  : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
              }`}
            >
              {details.status.charAt(0).toUpperCase() + details.status.slice(1)}
            </span>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Download Report
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Overall Progress</span>
            <span>{details.progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${details.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Document Verification Status */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-6">Document Verification Status</h3>
        <div className="space-y-6">
          {details.documents.map((section, index) => (
            <div key={index}>
              <h4 className="font-medium mb-4">{section.type}</h4>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-lg ${
                          item.status === 'verified'
                            ? 'bg-green-100 dark:bg-green-900 text-green-600'
                            : item.status === 'in-progress'
                            ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
                        }`}
                      >
                        {item.status === 'verified' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : item.status === 'in-progress' ? (
                          <Clock className="w-5 h-5" />
                        ) : (
                          <AlertTriangle className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.date || 'Pending verification'}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Timeline */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-6">Verification Timeline</h3>
        <div className="space-y-4">
          {details.timeline.map((event, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
            >
              <div
                className={`p-2 rounded-lg ${
                  event.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900 text-green-600'
                    : event.type === 'warning'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-600'
                }`}
              >
                {event.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : event.type === 'warning' ? (
                  <Clock className="w-5 h-5" />
                ) : (
                  <Shield className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="font-medium">{event.event}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerificationDetails;