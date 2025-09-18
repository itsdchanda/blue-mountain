import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Homepage = React.lazy(() => import('./pages/Homepage'));
const About = React.lazy(() => import('./pages/About'));
const Shop = React.lazy(() => import('./pages/Shop'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-charcoal flex items-center justify-center">
    <div className="text-luxury-gold text-xl">Loading...</div>
  </div>
);

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-stone-950 text-stone-100 font-inter">
          <Navigation />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;