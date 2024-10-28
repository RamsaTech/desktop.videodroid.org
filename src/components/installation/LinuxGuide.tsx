import React from 'react';
import { Link } from 'react-router-dom';

export default function LinuxGuide() {
  return (
    <div className="space-y-6">
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Download and Prepare AppImage</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Download the Linux AppImage from our <Link to="/desktop-app" className="text-indigo-600 hover:underline">downloads page</Link></li>
            <li>Open a terminal in the download directory</li>
            <li>Make the AppImage executable with the following command:</li>
            <div className="bg-gray-800 text-white p-4 rounded-lg mt-2">
              <code>chmod +x ./EasyVideoDownloaderExpress*.AppImage</code>
            </div>
          </ol>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Launch and Setup</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Double-click the AppImage or run it from the terminal</li>
            <li>Allow the app to finish downloading required components (ffmpeg, ffprobe)</li>
            <li>The app is ready to use once the initial setup is complete</li>
          </ol>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
          <p className="text-gray-600">
            For more detailed information about using AppImages on Linux, including integration with your desktop environment, please refer to the <a href="https://docs.appimage.org/user-guide/run-appimages.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">AppImage usage guide</a>.
          </p>
        </section>
      </div>
    </div>
  );
}