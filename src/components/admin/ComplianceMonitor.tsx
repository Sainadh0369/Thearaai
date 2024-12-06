import React from 'react';
import { Shield, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

const ComplianceMonitor = () => {
  const complianceChecks = [
    {
      category: 'Data Privacy',
      checks: [
        { name: 'GDPR Compliance', status: 'passed', lastCheck: '1 hour ago' },
        { name: 'Data Encryption', status: 'passed', lastCheck: '2 hours ago' },
        { name: 'Access Controls', status: 'warning', lastCheck: '30 mins ago' }
      ]
    },
    {
      category: 'User Data',
      checks: [
        { name: 'Consent Management', status: 'passed', lastCheck: '1 hour ago' },
        { name: 'Data Retention', status: 'passed', lastCheck: '3 hours ago' },
        { name: 'Privacy Notices', status: 'passed', lastCheck: '2 hours ago' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Compliance Monitor</h2>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <RefreshCw className="w-4 h-4" />
            <span>Run Checks</span>
          </button>
        </div>

        <div className="space-y-6">
          {complianceChecks.map((category, index) => (
            <div key={index}>
              <h3 className="font-medium mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.checks.map((check, checkIndex) => (
                  <div
                    key={checkIndex}
                    className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      {check.status === 'passed' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      )}
                      <div>
                        <p className="font-medium">{check.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Last check: {check.lastCheck}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        check.status === 'passed'
                          ? 'bg-green-100 dark:bg-green-900 text-green-600'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
                      }`}
                    >
                      {check.status.charAt(0).toUpperCase() + check.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceMonitor;