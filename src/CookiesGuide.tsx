import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  Cookie,
  AlertCircle,
  CheckCircle2,
  Chrome,
  Monitor,
  Globe,
  Info,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DocSidebar from './components/DocSidebar';

type BrowserType = 'chrome' | 'firefox' | 'opera' | 'unknown';

interface BrowserInfo {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  extensionUrl: string;
  extensionName: string;
  shortcut: {
    windows: string;
    mac: string;
  };
}

const browserData: Record<BrowserType, BrowserInfo> = {
  chrome: {
    name: 'Chrome',
    icon: Chrome,
    extensionUrl: 'https://chrome.google.com/webstore/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc',
    extensionName: 'Get cookies.txt locally',
    shortcut: {
      windows: 'Ctrl+Shift+N',
      mac: 'Cmd+Shift+N'
    }
  },
  firefox: {
    name: 'Firefox',
    icon: Monitor,
    extensionUrl: 'https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/',
    extensionName: 'cookies.txt',
    shortcut: {
      windows: 'Ctrl+Shift+P',
      mac: 'Cmd+Shift+P'
    }
  },
  opera: {
    name: 'Opera',
    icon: Globe,
    extensionUrl: 'https://addons.opera.com/en/extensions/details/edit-this-cookie',
    extensionName: 'Edit This Cookie',
    shortcut: {
      windows: 'Ctrl+Shift+N',
      mac: 'Cmd+Shift+N'
    }
  },
  unknown: {
    name: 'Unknown',
    icon: Globe,
    extensionUrl: '',
    extensionName: '',
    shortcut: {
      windows: '',
      mac: ''
    }
  }
};

function CookiesGuide() {
  const [detectedBrowser, setDetectedBrowser] = useState<BrowserType>('unknown');
  const [activeTab, setActiveTab] = useState<BrowserType>('chrome');

  const detectBrowser = (): BrowserType => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('chrome') && !userAgent.includes('edg') && !userAgent.includes('opr')) {
      return 'chrome';
    } else if (userAgent.includes('firefox')) {
      return 'firefox';
    } else if (userAgent.includes('opr') || userAgent.includes('opera')) {
      return 'opera';
    }

    return 'unknown';
  };

  useEffect(() => {
    const browser = detectBrowser();
    setDetectedBrowser(browser);
    if (browser !== 'unknown') {
      setActiveTab(browser);
    }
  }, []);

  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-12 px-4">
      <Helmet>
        <title>Cookie Import Guide - Easy Video Downloader Express</title>
        <meta
          name="description"
          content="Learn how to import cookies for downloading members-only and private videos with Easy Video Downloader Express"
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
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-8 h-8 text-indigo-600" />
                <h1 className="text-3xl font-bold text-indigo-700">
                  How to Download Private & Members-Only Videos and Playlists
                </h1>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="text-blue-800">
                    <p className="mb-2">You should open this in your web-browser for better access and readability, use this link - https://dl.videodroid.org/cookies-guide</p>
                    <p className="mb-2">This guide will help you download:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        Private videos and playlists (that you have access to)
                      </li>
                      <li>Members-only videos (if you're a channel member)</li>
                      <li>Age-restricted videos</li>
                      <li>Videos that require sign-in</li>
                    </ul>

                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                      Before You Start
                    </h3>
                    <div className="text-yellow-700 space-y-2">
                      <p>Make sure you have:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>
                          An account for the website you want to access the
                          content from (like YouTube, Facebook, Twitter, Vimeo,
                          etc.)
                        </li>
                        <li>
                          Access to the private/members-only content you want to
                          download
                        </li>
                        <li>Easy Video Downloader Express installed</li>
                        <li>
                          One of the supported browsers: Chrome, Firefox, or
                          Opera to export the cookie from
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {detectedBrowser !== 'unknown' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">
                      We detected you're using <strong>{browserData[detectedBrowser].name}</strong>.
                      The instructions below are customized for your browser.
                    </p>
                  </div>
                </div>
              )}

              {/* Browser Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8">
                  {(Object.keys(browserData) as BrowserType[])
                    .filter(browser => browser !== 'unknown')
                    .map((browser) => {
                      const BrowserIcon = browserData[browser].icon;
                      const isActive = activeTab === browser;
                      const isDetected = detectedBrowser === browser;

                      return (
                        <button
                          key={browser}
                          onClick={() => setActiveTab(browser)}
                          className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${isActive
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                          <BrowserIcon className="w-5 h-5" />
                          {browserData[browser].name}
                          {isDetected && (
                            <span className="ml-1 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                              Detected
                            </span>
                          )}
                        </button>
                      );
                    })}
                </nav>
              </div>

              {/* Browser-Specific Content */}
              <div className="space-y-12">
                {(Object.keys(browserData) as BrowserType[])
                  .filter(browser => browser !== 'unknown')
                  .map((browser) => {
                    const BrowserIcon = browserData[browser].icon;
                    const data = browserData[browser];

                    return (
                      <div
                        key={browser}
                        className={activeTab === browser ? 'block' : 'hidden'}
                      >
                        {/* Step 1: Install Extension */}
                        <section className="mb-12">
                          <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
                            <BrowserIcon className="w-8 h-8" />
                            Step 1: Install {data.name} Cookie Extension
                          </h2>

                          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="space-y-4">
                              <div>
                                <a
                                  href={data.extensionUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                  Install {data.extensionName}
                                </a>
                              </div>

                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">
                                  Installation Steps:
                                </h4>
                                <ol className="list-decimal ml-6 space-y-2 text-gray-600">
                                  <li>Click the "Install {data.extensionName}" button above</li>
                                  <li>Click <strong>"Add to {data.name}"</strong> or <strong>"Install"</strong></li>
                                  <li>
                                    <strong>Important:</strong> When the permissions dialog appears, make sure to check
                                    <strong> "Allow extension to run in private windows"</strong>
                                  </li>
                                  <li>Accept any permissions the extension requires</li>
                                  <li>Look for the extension icon in your browser toolbar</li>
                                </ol>
                              </div>

                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                                <div className="flex items-start gap-2">
                                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                  <div className="text-yellow-800">
                                    <p className="font-medium mb-2">Critical: Enable Private Window Access</p>
                                    <p className="text-sm mb-2">
                                      You must enable the extension to run in private windows for the cookie export method to work properly.
                                    </p>
                                    <img
                                      src="./images/allow-extension-private-window.png"
                                      alt="Allow extension to run in private windows checkbox"
                                      className="rounded border shadow-sm max-w-md"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <div className="text-blue-800">
                                    <p className="font-medium mb-1">Extension Icon Location:</p>
                                    <p className="text-sm">
                                      {browser === 'chrome' && "After installation, look for the extension icon in your toolbar. You may need to click the puzzle piece icon to find it."}
                                      {browser === 'firefox' && "After installation, the extension icon will appear in your toolbar or extensions menu."}
                                      {browser === 'opera' && "After installation, the extension icon will appear in your toolbar or extensions sidebar."}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <img
                                src={`./images/cookie-export-1-${browser}.png`}
                                alt={`${data.name} extension installation`}
                                className="rounded border shadow-sm"
                                onError={(e) => {
                                  // Fallback to generic image if browser-specific image doesn't exist
                                  (e.target as HTMLImageElement).src = './images/cookie-export-1.png';
                                }}
                              />
                            </div>
                          </div>
                        </section>

                        {/* Step 2: Export YouTube Cookies */}
                        <section className="mb-12">
                          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                            Step 2: Export YouTube Cookies (Recommended Method)
                          </h2>

                          <div className="space-y-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                              <div className="flex items-start gap-3">
                                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <div className="text-blue-800">
                                  <p className="mb-2 font-semibold">Why this method works best:</p>
                                  <p>This method prevents cookie rotation on YouTube, which means your cookies will last longer and you won't need to re-export them frequently.</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="font-semibold text-gray-800 mb-4">
                                Step-by-Step Instructions for {data.name}
                              </h3>
                              <ol className="list-decimal ml-6 space-y-4 text-gray-600">
                                <li>
                                  <strong>Open a new private/incognito window</strong>
                                  <div className="mt-2 space-y-3">
                                    <div>
                                      <p className="font-medium text-gray-700 mb-1">Method 1: Keyboard Shortcut</p>
                                      <ul className="list-disc ml-6 space-y-1">
                                        <li>
                                          Press <code className="bg-gray-200 px-1 rounded">
                                            {isMac ? data.shortcut.mac : data.shortcut.windows}
                                          </code>
                                        </li>
                                      </ul>
                                    </div>

                                    <div>
                                      <p className="font-medium text-gray-700 mb-1">Method 2: Using Menu</p>
                                      <ul className="list-disc ml-6 space-y-1">
                                        {browser === 'chrome' && (
                                          <>
                                            <li>Click the three dots menu (⋮) in the top-right corner</li>
                                            <li>Select <strong>"New incognito window"</strong></li>
                                          </>
                                        )}
                                        {browser === 'firefox' && (
                                          <>
                                            <li>Click the hamburger menu (☰) in the top-right corner</li>
                                            <li>Select <strong>"New private window"</strong></li>
                                          </>
                                        )}
                                        {browser === 'opera' && (
                                          <>
                                            <li>Click the Opera menu in the top-left corner</li>
                                            <li>Select <strong>"New private window"</strong></li>
                                          </>
                                        )}
                                      </ul>
                                    </div>

                                    <div>
                                      <p className="font-medium text-gray-700 mb-1">Method 3: Right-click Browser Icon</p>
                                      <ul className="list-disc ml-6 space-y-1">
                                        <li>Right-click your {data.name} icon in the taskbar/dock</li>
                                        <li>Select <strong>"New {browser === 'firefox' ? 'private' : 'incognito'} window"</strong></li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <strong>Log into YouTube in the private window</strong>
                                  <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Go to <a href="https://youtube.com" className="text-indigo-600 hover:text-indigo-700">youtube.com</a></li>
                                    <li>Click "Sign In" and log in with your account credentials</li>
                                  </ul>
                                </li>

                                <li>
                                  <strong>Navigate to YouTube's robots.txt</strong>
                                  <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>In the same private window and same tab, go to: <a href="https://www.youtube.com/robots.txt" className="text-indigo-600 hover:text-indigo-700 font-mono">https://www.youtube.com/robots.txt</a></li>
                                    <li>This should be the <strong>only</strong> private/incognito tab you have open</li>
                                  </ul>
                                </li>

                                <li>
                                  <strong>Export the cookies using {data.extensionName}</strong>
                                  <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Click the <strong>"{data.extensionName}"</strong> extension icon in your toolbar</li>
                                    {browser === 'chrome' && (
                                      <>
                                        <li>Click <strong>"Current Site"</strong></li>
                                        <li>Click <strong>"Export"</strong></li>
                                      </>
                                    )}
                                    {browser === 'firefox' && (
                                      <>
                                        <li>The extension will automatically detect the current site</li>
                                        <li>Click <strong>"Current Container and Site"</strong></li>
                                      </>
                                    )}
                                    {browser === 'opera' && (
                                      <>
                                        <li>Select all cookies or click <strong>"Export All"</strong></li>
                                        <li>Choose <strong>"Netscape format"</strong> if prompted</li>
                                      </>
                                    )}
                                    <li>Choose a location to save the cookies.txt file</li>
                                    <li>Remember where you saved the file</li>
                                  </ul>
                                  <img
                                    src={`./images/cookie-export-2-${browser}.png`}
                                    alt={`${data.name} cookie export interface`}
                                    className="mt-3 rounded border"
                                    onError={(e) => {
                                      // Fallback to generic image if browser-specific image doesn't exist
                                      (e.target as HTMLImageElement).src = './images/cookie-export-2.png';
                                    }}
                                  />
                                </li>

                                <li>
                                  <strong>Close the private window immediately</strong>
                                  <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Close the entire private/incognito window</li>
                                    <li>This ensures the session is never opened in the browser again</li>
                                    <li>This prevents cookie rotation and keeps your exported cookies valid longer</li>
                                  </ul>
                                </li>
                              </ol>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                  <h4 className="font-semibold text-green-800 mb-2">
                                    Benefits of this method:
                                  </h4>
                                  <ul className="list-disc ml-6 space-y-1 text-green-700">
                                    <li>Prevents cookie rotation on YouTube</li>
                                    <li>Cookies last much longer before expiring</li>
                                    <li>Reduces the need to frequently re-export cookies</li>
                                    <li>More reliable for downloading private/members-only content</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* Step 3: Alternative Method */}
                        <section className="mb-12">
                          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                            Step 3: Alternative Method (Other Websites)
                          </h2>
                          <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="font-semibold text-gray-800 mb-4">
                                For websites other than YouTube using {data.name}
                              </h3>
                              <ol className="list-decimal ml-6 space-y-3 text-gray-600">
                                <li>Open the website you want to download from (Facebook, Twitter, Vimeo, etc.)</li>
                                <li>Click the <strong>"Sign In"</strong> or <strong>"Log In"</strong> button</li>
                                <li>Log in with your account credentials</li>
                                <li>Click the <strong>"{data.extensionName}"</strong> extension icon</li>
                                {browser === 'chrome' && <li>Select <strong>"Current Site"</strong> and click <strong>"Export"</strong></li>}
                                {browser === 'firefox' && <li>Click <strong>"Current Container and Site"</strong></li>}
                                {browser === 'opera' && <li>Select cookies and choose <strong>"Export All"</strong> in Netscape format</li>}
                                <li>Save the cookies.txt file to your preferred location</li>
                              </ol>
                            </div>
                          </div>
                        </section>

                        {/* Step 4: Import to App */}
                        <section>
                          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                            Step 4: Import to Easy Video Downloader Express
                          </h2>
                          <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                              <ol className="list-decimal ml-6 space-y-3 text-gray-600">
                                <li>Open Easy Video Downloader Express</li>
                                <li>
                                  Click the <strong>Authentication icon (Key)</strong> in the bottom left corner
                                </li>
                                <img
                                  src="./images/cookie-export-4.png"
                                  alt="Easy Video Cookie Import"
                                />
                                <li>
                                  Click <strong>"Browse"</strong> and locate your saved cookies.txt file
                                </li>
                                <img
                                  src="./images/cookie-export-5.png"
                                  alt="Easy Video Cookie Import"
                                />
                                <img
                                  src="./images/cookie-export-6.png"
                                  alt="Easy Video Cookie Import"
                                />
                                <li>Select and click <strong>"OK"</strong> to complete the process</li>
                                <img
                                  src="./images/cookie-export-7.png"
                                  alt="Easy Video Cookie Import"
                                />
                              </ol>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                                    You're All Set!
                                  </h3>
                                  <div className="text-green-700">
                                    <p className="mb-2">You can now:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                      <li>Download members-only videos</li>
                                      <li>Access private videos (if you have permission)</li>
                                      <li>Download age-restricted content</li>
                                      <li>Bypass sign-in requirements</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                              <div className="flex items-start gap-3">
                                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                                <div>
                                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                                    Important Security Tips
                                  </h3>
                                  <ul className="list-disc ml-6 space-y-2 text-yellow-700">
                                    <li>Never share your cookies.txt file with anyone</li>
                                    <li>Re-import cookies if you sign out of the website</li>
                                    <li>Only use official browser extensions</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiesGuide;