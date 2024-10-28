import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Monitor, Laptop, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import DocSidebar from './components/DocSidebar';
import WindowsGuide from './components/installation/WindowsGuide';
import MacGuide from './components/installation/MacGuide';
import LinuxGuide from './components/installation/LinuxGuide';
import HelpSection from './components/installation/HelpSection';

function InstallationGuide() {
  const [activeTab, setActiveTab] = useState('');
  const [detectedOS, setDetectedOS] = useState('');

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf("win") > -1) return "windows";
      if (userAgent.indexOf("mac") > -1) return "mac";
      if (userAgent.indexOf("linux") > -1) return "linux";
      return "windows"; // Default to Windows if detection fails
    };
    const os = detectOS();
    setDetectedOS(os);
    setActiveTab(os);
  }, []);

  const tabs = [
    { id: 'windows', label: 'Windows', icon: Monitor },
    { id: 'mac', label: 'macOS', icon: Laptop },
    { id: 'linux', label: 'Linux', icon: Terminal },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-12 px-4">
      <Helmet>
        <title>Installation Guide - Easy Video Downloader Express</title>
        <meta
          name="description"
          content="Step-by-step installation instructions for Easy Video Downloader Express on Windows, macOS, and Linux"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <Link
          to="/desktop-app"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Download Page
        </Link>

        <div className="flex gap-8">
          <DocSidebar />

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-indigo-700 mb-8">Installation Guide</h1>

              <div className="mb-8">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-4">
                    {tabs.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`${
                          activeTab === id
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                          detectedOS === id ? 'bg-indigo-50 rounded-t-lg' : ''
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-2" />
                        {label}
                        {detectedOS === id && (
                          <span className="ml-2 bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-xs">
                            Detected
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="mt-8">
                  {activeTab === 'windows' && <WindowsGuide />}
                  {activeTab === 'mac' && <MacGuide />}
                  {activeTab === 'linux' && <LinuxGuide />}
                </div>
              </div>

              <HelpSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallationGuide;