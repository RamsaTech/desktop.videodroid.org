import React from 'react';

export default function HelpSection() {
  return (
    <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">
        Need Help?
      </h2>
      <div className="text-blue-700">
        If you encounter any issues during installation, please reply to the activation email you received after purchase with:
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>A screenshot of the error</li>
          <li>Your operating system name and version</li>
          <li>A brief description of what happened</li>
        </ul>
      </div>
    </div>
  );
}