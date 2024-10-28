import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import DesktopApp from './DesktopApp.tsx'
import VideoCodecs from './VideoCodecs.tsx'
import CookiesGuide from './CookiesGuide.tsx'
import ApplicationSettings from './ApplicationSettings.tsx'
import InstallationGuide from './InstallationGuide.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/desktop-app" element={<DesktopApp />} />
          <Route path="/video-codecs" element={<VideoCodecs />} />
          <Route path="/cookies-guide" element={<CookiesGuide />} />
          <Route path="/application-settings" element={<ApplicationSettings />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
)