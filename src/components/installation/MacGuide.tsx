import React from 'react';
import { Link } from 'react-router-dom';

export default function MacGuide() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Security Notice</h3>
        <p className="text-yellow-700">
          Since this is a beta version, macOS will show a security warning. 
          This is normal and you can safely proceed with the installation using the steps below.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Download and Open</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Download the macOS .dmg file from our <Link to="/desktop-app" className="text-indigo-600 hover:underline">downloads page</Link></li>
            <li>Double-click the .dmg file to mount it</li>
            <li>When you try to open the app, macOS will show a security warning</li>
            <li>On your Mac, choose <strong>Apple menu  &gt; System Settings</strong>, then click <strong>Privacy & Security</strong> in the sidebar (You may need to scroll down)</li>
            <li>Go to Security, then click <strong>Open</strong></li>
            <li>Click <strong>Open Anyway</strong> (This button is available for about an hour after you try to open the app)</li>
            <li>Enter your login password, then click <strong>OK</strong></li>
          </ol>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Complete Installation</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Drag the app to your Applications folder</li>
            <li>Allow the app to finish downloading required components (ffmpeg, ffprobe)</li>
            <li>The app is ready to use once the installation is complete</li>
          </ol>
        </section>
      </div>
    </div>
  );
}