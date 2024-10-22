import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <Helmet>
        <title>Easy Video Downloader Express - Coming Soon</title>
        <meta
          name="description"
          content="Easy Video Downloader Express - A versatile, multi-platform, audio & video downloader for the web. Coming soon!"
        />
      </Helmet>
      <div className="text-center animate-fade-in-down">
        <h1 className="text-5xl font-bold text-indigo-700 mb-4">
          Easy Video Downloader Express
        </h1>
        <p className="text-xl text-gray-600 mb-8">Website coming soon!</p>
      </div>
    </div>
  );
}

export default App;
