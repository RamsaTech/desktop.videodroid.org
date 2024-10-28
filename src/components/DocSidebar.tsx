import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Download, Film, Settings, Shield, HelpCircle, Star, Coffee, Cookie } from 'lucide-react';

const sidebarLinks = [
  {
    title: 'Getting Started',
    links: [
      { to: '/desktop-app', text: 'Downloads', icon: Download },
      { to: '/installation-guide', text: 'Installation Guide', icon: Download },
      { to: '/video-codecs', text: 'Video Codecs Guide', icon: Film },
      { to: '/cookies-guide', text: 'Cookie Import Guide', icon: Cookie },
    ]
  },
  {
    title: 'Features',
    links: [
      { to: '/features/downloading', text: 'Basic Downloading', icon: Download, coming: true },
      { to: '/features/playlists', text: 'Playlist Downloads', icon: Star, coming: true },
      { to: '/features/audio', text: 'Audio Extraction', icon: Coffee, coming: true },
    ]
  },
  {
    title: 'Advanced',
    links: [
      { to: '/application-settings', text: 'Settings Guide', icon: Settings },
      { to: '/advanced/security', text: 'Security Info', icon: Shield, coming: true },
      { to: '/advanced/troubleshooting', text: 'Troubleshooting', icon: HelpCircle, coming: true },
    ]
  }
];

export default function DocSidebar() {
  const location = useLocation();
  
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4 h-fit">
      <div className="flex items-center gap-2 mb-6 p-2">
        <BookOpen className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-800">Documentation</h2>
      </div>
      
      <nav className="space-y-6">
        {sidebarLinks.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider px-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.links.map((link, linkIdx) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                return (
                  <li key={linkIdx}>
                    {link.coming ? (
                      <span className="flex items-center gap-2 px-2 py-2 text-gray-400 rounded cursor-not-allowed group">
                        <Icon className="w-4 h-4" />
                        <span>{link.text}</span>
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full ml-auto">
                          Soon
                        </span>
                      </span>
                    ) : (
                      <Link
                        to={link.to}
                        className={`flex items-center gap-2 px-2 py-2 rounded transition-colors ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{link.text}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}