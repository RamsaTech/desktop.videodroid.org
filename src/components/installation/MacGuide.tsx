import React from 'react';
import { Link } from 'react-router-dom';

export default function MacGuide() {
  return (
    <div className="space-y-6">

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Download and Open the .PKG installer.</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Download the macOS .pkg file from our <Link to="/desktop-app" className="text-indigo-600 hover:underline">downloads page</Link></li>
            <li>Double-click the .pkg and follow instructions shown on the screen.</li>
            <li>Start the "Easy Video Downloader Express" app (Green Icon) from your Applications menu.</li>
            <li>Allow the app to finish downloading required components (ffmpeg, ffprobe) mon the first launch</li>
            <li>The app is ready to use once the installation is complete</li>
          </ol>
        </section>
      </div>
    </div>
  );
}