import React from 'react';
import { Link } from 'react-router-dom';

export default function WindowsGuide() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Security Notice</h3>
        <p className="text-yellow-700">
          Since this is a beta version, Windows SmartScreen and your browser may show security warnings. 
          This is normal and you can safely proceed with the installation.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Download and Run</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Download the Windows installer from our <Link to="/desktop-app" className="text-indigo-600 hover:underline">downloads page</Link></li>
            <li>If using Microsoft Edge, you may see a download warning:
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Click the three dots (...) next to the warning</li>
                <li>Select <strong>"Keep"</strong> from the dropdown menu</li>
                <li>Click <strong>"Show more"</strong> in the next prompt</li>
                <li>Select <strong>"Keep anyway"</strong></li>
              </ul>
            </li>
            <li>When you run the installer, Windows SmartScreen may show a warning</li>
            <li>Click <strong>"More info"</strong> and then <strong>"Run anyway"</strong></li>
          </ol>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Complete Installation</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Follow the installation wizard prompts</li>
            <li>Allow the app to finish downloading required components (ffmpeg, ffprobe)</li>
            <li>The app is ready to use once the installation is complete</li>
          </ol>
        </section>
      </div>
    </div>
  );
}