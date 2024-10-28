import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  Cpu,
  Monitor,
  Play,
  Settings2,
  Shield,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DocSidebar from './components/DocSidebar';

const features = [
  {
    icon: Shield,
    title: 'H.264 (AVC)',
    description:
      'The industry standard codec with excellent compatibility across devices and platforms.',
    benefits: [
      'Works on virtually all devices',
      'Supported by older software like QuickTime',
      'Great for 1080p and lower resolutions',
      'Hardware acceleration on most devices',
    ],
  },
  {
    icon: Zap,
    title: 'VP9',
    description:
      'Modern codec offering superior quality at higher resolutions.',
    benefits: [
      'Better compression at 4K/8K',
      'Higher quality at same bitrate',
      'Used by YouTube for high-res videos',
      'Free and open-source',
    ],
  },
];

const ComparisonTable = () => (
  <div className="overflow-x-auto mt-8">
    <table className="w-full border-collapse bg-white rounded-lg shadow-md">
      <thead>
        <tr className="bg-indigo-100">
          <th className="p-4 text-left border-b">Feature</th>
          <th className="p-4 text-left border-b">H.264 (AVC)</th>
          <th className="p-4 text-left border-b">VP9</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4 border-b">
            <span className="flex items-center gap-2">
              <Monitor className="w-4 h-4" /> Device Support
            </span>
          </td>
          <td className="p-4 border-b text-green-600">Excellent</td>
          <td className="p-4 border-b text-yellow-600">Good</td>
        </tr>
        <tr>
          <td className="p-4 border-b">
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Hardware Decoding
            </span>
          </td>
          <td className="p-4 border-b text-green-600">Universal</td>
          <td className="p-4 border-b text-yellow-600">Limited</td>
        </tr>
        <tr>
          <td className="p-4 border-b">
            <span className="flex items-center gap-2">
              <Play className="w-4 h-4" /> Software Support
            </span>
          </td>
          <td className="p-4 border-b text-green-600">Universal</td>
          <td className="p-4 border-b text-yellow-600">Modern Only</td>
        </tr>
        <tr>
          <td className="p-4 border-b">
            <span className="flex items-center gap-2">
              <Settings2 className="w-4 h-4" /> Quality at High Res
            </span>
          </td>
          <td className="p-4 border-b text-yellow-600">Good</td>
          <td className="p-4 border-b text-green-600">Excellent</td>
        </tr>
      </tbody>
    </table>
  </div>
);

function VideoCodecs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-12 px-4">
      <Helmet>
        <title>Video Codec Guide - Easy Video Downloader Express</title>
        <meta
          name="description"
          content="Learn about H.264 (AVC) and VP9 video codecs, their compatibility, and when to use each one."
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
              <h1 className="text-3xl font-bold text-indigo-700 mb-4">
                Understanding Video Codecs
              </h1>
              <p className="text-gray-600 mb-8">
                When downloading videos, you'll often have a choice between
                different codecs. Here's what you need to know about H.264 (AVC)
                and VP9 to make the best choice for your needs.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-indigo-50 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <ComparisonTable />

              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <h2 className="text-xl font-semibold text-yellow-800 mb-4">
                  Important Note
                </h2>
                <p className="text-yellow-700">
                  H.264 (AVC) is recommended for better compatibility with older
                  devices and software like QuickTime Player. While it's
                  available for most videos up to 1080p, higher resolutions may
                  only offer the modern higher quality VP9 codec.
                  <br /> <br />
                  To get a QuickTime-compatible format, use the drop-down codec
                  option below (if the avc1 codec is available for the selected
                  video). Alternatively, you can use&nbsp;
                  <a href="https://www.videolan.org/vlc/" target="_blank" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                    VLC Media Player
                  </a>
                  &nbsp; to enjoy high-quality VP9 videos on Windows, macOS, or
                  Linux. Or, use a free tool like &nbsp;
                  <a href="https://handbrake.fr/" target="_blank" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                    Handbrake
                  </a>
                  &nbsp; to convert it to your preferred codec.
                  <br /> <br />
                  <img
                    src="./images/avc1-codec-support.png"
                    alt="Easy Video Codec Support"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCodecs;