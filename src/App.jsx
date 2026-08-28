import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import FunnelLanding from './components/FunnelLanding';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import LegalPage from './pages/LegalPage';
import LegalModals from './components/LegalModals';
import ScrollToTop from './components/ScrollToTop';
import { triggerContentLocker } from './utils/locker';

// Automatically upgrade any legacy #/ links to clean / URLs
function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        const cleanPath = window.location.hash.slice(1);
        if (cleanPath) {
          navigate(cleanPath, { replace: true });
        }
      }
    } catch (err) {
      console.warn('Legacy hash redirect error:', err);
    }
  }, [navigate]);

  return null;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b0c10] text-[#eae8e3] flex flex-col items-center justify-center p-6 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#dfc58b] mb-3">Art of Stamina</h1>
          <p className="text-[#8e909a] mb-6 max-w-md">An unexpected loading error occurred. Click below to reload the main book page.</p>
          <button 
            onClick={() => { window.location.href = window.location.origin + '/'; window.location.reload(); }}
            className="px-6 py-3 rounded-xl bg-[#c5a059] text-black font-bold cursor-pointer"
          >
            Reload Website
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  /**
   * Direct Action CTA Handler:
   * Always triggers the CPAGrip content locker on all "Get Free Book" download clicks.
   */
  const handleOpenGuide = (e) => {
    triggerContentLocker(e);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <LegacyHashRedirect />

        <Routes>
          {/* 1. Main Landing Funnel Route (URL: /) */}
          <Route 
            path="/" 
            element={
              <FunnelLanding 
                onOpenGuide={handleOpenGuide} 
                onOpenLegal={(modalKey) => setActiveLegalModal(modalKey)}
              />
            } 
          />

          {/* 2. Dedicated Blog Hub / Index Route (URL: /blog) */}
          <Route 
            path="/blog" 
            element={
              <BlogIndexPage 
                onOpenGuide={handleOpenGuide}
              />
            } 
          />

          {/* 3. Dedicated Individual Blog Post Routes (URL: /blog/nitric-oxide-blueprint-nutrition, etc.) */}
          <Route 
            path="/blog/:slug" 
            element={
              <BlogPostPage 
                onOpenGuide={handleOpenGuide}
              />
            } 
          />

          {/* 4. Standalone Legal Routes (URL: /privacy-policy, etc.) */}
          <Route 
            path="/privacy-policy" 
            element={<LegalPage onOpenGuide={handleOpenGuide} />} 
          />
          <Route 
            path="/terms-of-service" 
            element={<LegalPage onOpenGuide={handleOpenGuide} />} 
          />
          <Route 
            path="/medical-disclaimer" 
            element={<LegalPage onOpenGuide={handleOpenGuide} />} 
          />

          {/* 5. Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Global Legal & Policy Modals */}
        <LegalModals 
          activeModal={activeLegalModal} 
          onClose={() => setActiveLegalModal(null)} 
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
