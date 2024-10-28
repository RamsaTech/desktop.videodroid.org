import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Construction, Wrench, Palette, Volume2, Download, FolderDown, Bell, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import DocSidebar from './components/DocSidebar';

const upcomingFeatures = [
  {
    icon: Wrench,
    title: 'General Settings',
    description: 'Configure application behavior, interface language, and update preferences'
  },
  {
    icon: Palette,
    title: 'Appearance',
    description: 'Customize themes, layouts, and visual preferences'
  },
  {
    icon: Volume2,
    title: 'Audio Settings',
    description: 'Configure default audio format, quality, and metadata options'
  },
  {
    icon: Download,
    title: 'Download Preferences',
    description: 'Set default video quality, format preferences, and naming conventions'
  },
  {
    icon: FolderDown,
    title: 'Storage Management',
    description: 'Configure download locations and storage cleanup options'
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Customize download completion and error notifications'
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Manage cookies, cache, and security preferences'
  }
];

function ApplicationSettings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-12 px-4">
      <Helmet>
        <title>Application Settings - Easy Video Downloader Express</title>
        <meta
          name="description"
          content="Configure and customize Easy Video Downloader Express to match your preferences"
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
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center mb-12">
                <Construction className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-indigo-700 mb-4">
                  Application Settings Documentation
                </h1>
                <p className="text-gray-600 text-lg">
                  We're working hard to bring you comprehensive documentation for all application settings.
                  Here's what you can expect:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {upcomingFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <feature.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-4">
                  Want to get notified?
                </h2>
                <p className="text-blue-700">
                  You'll receive updates about new application updates and features via the email address used during your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationSettings;