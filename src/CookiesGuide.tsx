import React from 'react';
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

function CookiesGuide() {
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

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                    Step 1: Install a Cookie Exporter web-extension for your
                    browser:
                  </h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <a
                        href="https://chrome.google.com/webstore/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Chrome className="w-8 h-8 text-indigo-600" />
                          <h3 className="font-semibold text-gray-800">
                            Chrome
                          </h3>
                        </div>
                        <p className="text-indigo-600 hover:text-indigo-700">
                          Get cookies.txt locally
                        </p>
                      </a>

                      <a
                        href="https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Monitor className="w-8 h-8 text-indigo-600" />
                          <h3 className="font-semibold text-gray-800">
                            Firefox
                          </h3>
                        </div>
                        <p className="text-indigo-600 hover:text-indigo-700">
                          cookies.txt
                        </p>
                      </a>

                      <a
                        href="https://addons.opera.com/en/extensions/details/edit-this-cookie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Globe className="w-8 h-8 text-indigo-600" />
                          <h3 className="font-semibold text-gray-800">Opera</h3>
                        </div>
                        <p className="text-indigo-600 hover:text-indigo-700">
                          Edit This Cookie
                        </p>
                      </a>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Installation Notes:
                      </h4>
                      <ul className="list-disc ml-6 space-y-2 text-gray-600">
                        <li>
                          Click your browser's link above to open the extension
                          store
                        </li>
                        <li>Click <strong>"Add to [Browser]"</strong> or <strong>"Install"</strong></li>
                        <li>Accept any permissions the extension requires</li>
                        <li>
                          Look for the extension icon in your browser toolbar
                        </li>
                        <br /> <br />
                        <img
                          src="./images/cookie-export-1.png"
                          alt="Easy Video Cookie Import"
                        />
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                    Step 2: Sign in to the Website
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ol className="list-decimal ml-6 space-y-3 text-gray-600">
                        <li>
                          Open the website you want to download from (like
                          YouTube.com, Facebook.com, etc.)
                        </li>
                        <li>Click the <strong>"Sign In"</strong> or <strong>"Log In"</strong> button</li>
                        <li>Log in with your account credentials</li>
                        <li>
                          Verify you can access the private/members-only content
                          you want to download
                        </li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-blue-800">
                          Make sure you're properly signed in before proceeding.
                          Try accessing a private or members-only video to
                          confirm your access.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                    Step 3: Export Cookies
                  </h2>
                  <div className="space-y-6">
                    <div className="grid gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-4">
                          Instructions for Firefox
                        </h3>
                        <ol className="list-decimal ml-6 space-y-3 text-gray-600">
                          <li>
                            Make sure you're on the website you want to download
                            from
                          </li>
                          <li>
                            Click the <strong>"Get cookies.txt locally"</strong> extension icon
                            and click <strong>"Current Site"</strong>
                          </li>
                          <img
                            src="./images/cookie-export-2.png"
                            alt="Easy Video Cookie Import"
                          />
                          <li>Click <strong>"Export"</strong> in the popup</li>
                          <li>
                            Choose a location to save the cookies.txt file
                          </li>
                          <li>Remember where you saved the file</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                    Step 4: Import to Easy Video Downloader Express
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ol className="list-decimal ml-6 space-y-3 text-gray-600">
                        <li>Open Easy Video Downloader Express</li>
                        <li>
                          Click the <strong>Authentication icon (Key)</strong> in the bottom left
                          corner
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
                              <li>
                                Access private videos (if you have permission)
                              </li>
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
                            <li>Delete the cookies.txt file after importing</li>
                            <li>
                              Never share your cookies.txt file with anyone
                            </li>
                            <li>
                              Re-import cookies if you sign out of the website
                            </li>
                            <li>Only use official browser extensions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiesGuide;