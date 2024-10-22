import React, { useState, useEffect } from 'react';
import { Monitor, Laptop, Terminal, Youtube, Music, Film, List, User, Subtitles, Zap, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const osIcons = {
  Windows: Monitor,
  macOS: Laptop,
  Linux: Terminal,
};

const downloadLinks = {
  Windows: 'https://www.yourvideofile.org/download/dist/windows-easy.video.downloader-0.4.0_beta.exe',
  macOS: 'https://www.yourvideofile.org/download/dist/macOS-easy.video.downloader-0.4.0_beta.dmg',
  Linux: 'https://www.yourvideofile.org/download/dist/linux-easy.video.downloader-0.4.0_beta.AppImage',
};

const features = [
  { icon: Youtube, text: "Support for Youtube video/audio downloads and hundreds of other popular websites." },
  { icon: Film, text: "Download videos in high quality 8K/4K/Full-HD when available." },
  { icon: Music, text: "High quality Audio-only downloads in mp3, aac, ogg and Opus formats." },
  { icon: List, text: "Download full playlists and add multiple downloads in one go" },
  { icon: Zap, text: "The fastest download speeds, directly from the hosting website." },
  { icon: User, text: "Sign in to download private and member-only videos" },
  { icon: Subtitles, text: "Download subtitles and thumbnails" },
];

function DesktopApp() {
  const [userOS, setUserOS] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [downloadOS, setDownloadOS] = useState('');

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf("win") > -1) return "Windows";
      if (userAgent.indexOf("mac") > -1) return "macOS";
      if (userAgent.indexOf("linux") > -1) return "Linux";
      return "Unknown";
    };
    setUserOS(detectOS());
  }, []);

  const handleDownload = (os: string) => {
    setDownloadOS(os);
    setShowModal(true);
  };

  const startDownload = () => {
    if (agreedToTerms && downloadOS) {
      const link = downloadLinks[downloadOS as keyof typeof downloadLinks];
      if (link) {
        window.open(link, '_blank');
      }
      setShowModal(false);
      setAgreedToTerms(false);
    }
  };

  const DownloadButton = ({ os, isDetected = false }: { os: string; isDetected?: boolean }) => {
    const Icon = osIcons[os as keyof typeof osIcons];
    return (
      <button
        onClick={() => handleDownload(os)}
        className={`group relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full shadow-md
          ${isDetected 
            ? 'text-white bg-indigo-600 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 text-lg px-8 py-4 transform hover:scale-105 hover:shadow-lg' 
            : 'text-indigo-600 border-indigo-500 hover:text-white hover:bg-indigo-600'}`}
      >
        <span className="flex items-center justify-center space-x-2">
          <Icon className={`${isDetected ? 'w-8 h-8' : 'w-6 h-6'} transition-all duration-300 ${isDetected ? 'group-hover:scale-110' : ''}`} />
          <span className={`relative ${isDetected ? 'group-hover:font-bold' : ''}`}>
            Download for {os}
          </span>
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <Helmet>
        <title>Easy Video Downloader Express - Desktop App</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-5xl font-bold text-indigo-700 mb-4">Easy Video Downloader Express</h1>
        <p className="text-xl text-gray-600 mb-8">A versatile, multi-platform, audio & video downloader for the web.</p>
      </div>

      <div className="w-full max-w-4xl animate-fade-in-up mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">See How It Works</h2>
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <video 
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            controls
          >
            <source src="https://www.yourvideofile.org/download/dist/video-dwonloader-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag. 
            <a href="https://www.yourvideofile.org/download/dist/video-dwonloader-demo.mp4" className="text-indigo-600 hover:underline">
              Click here to download and watch the demo video
            </a>.
          </video>
        </div>
      </div>

      <div className="mb-12 animate-fade-in-up text-center">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Your detected OS:</h3>
        {userOS && (
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DownloadButton os={userOS} isDetected={true} />
          </div>
        )}
      </div>

      <div className="mb-12 animate-fade-in-up text-center">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Other OS downloads:</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {Object.keys(downloadLinks).map((os) => (
            userOS !== os && (
              <DownloadButton key={os} os={os} />
            )
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mb-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 transform hover:scale-105 transition-all duration-300 ${
              index === features.length - 1 ? 'col-span-full' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <feature.icon className={`w-6 h-6 text-indigo-500 flex-shrink-0 ${
              index === features.length - 1 ? 'mx-auto' : ''
            }`} />
            <p className={`text-gray-700 ${
              index === features.length - 1 ? 'text-center' : ''
            }`}>{feature.text}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-indigo-700">Important Information</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Before downloading Easy Video Downloader Express, please read and acknowledge the following:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>This software is for personal use only.</li>
                <li>Respect copyright laws and the terms of service of the websites you download from.</li>
                <li>We are not responsible for any misuse of this software.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-indigo-700 mb-4">Known Issues</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>This is the beta version, and the app is not signed yet. Your operating-system/browser might show a warning which can be safely ignored.</li>
                <li>On the first launch, allow the app to finish downloading <strong>ffmpeg, ffprobe, and the background video-grab engine</strong>. Attempting to download links before completion of this process will result in downloads not working. If the process gets stuck, try restarting the app.</li>
                <img src="https://desktop.videodroid.org/img/first-launch.png" alt="First Launch" className="my-4 rounded-lg shadow-md" />
                <li>The button to open the downloaded file or folder is currently not working. Please use the folder icon at the bottom of the app to access your downloads. This folder will be your default download location unless changed in the <strong>Settings</strong> (gear icon) screen. This will be fixed in next release.</li>
                <img src="https://desktop.videodroid.org/img/folder-open-icon.png" alt="Folder Open Icon" className="my-4 rounded-lg shadow-md" />
              </ul>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700">
                I have read and agree to the above terms
              </label>
            </div>
            <button
              onClick={startDownload}
              disabled={!agreedToTerms}
              className={`w-full py-2 px-4 rounded ${
                agreedToTerms
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors duration-300`}
            >
              Start Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopApp;