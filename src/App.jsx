import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ProjectDetailLumbox from './pages/ProjectDetailLumbox';
import './App.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash.startsWith('#/project/lumbox') ? 'lumbox' : 'landing';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#/project/lumbox')) {
        setCurrentRoute('lumbox');
      } else {
        setCurrentRoute('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToLanding = (targetSection = 'projects') => {
    setCurrentRoute('landing');
    // Clear project hash and point to target section
    if (targetSection) {
      window.location.hash = targetSection;
    } else {
      // Remove hash cleanly without page reload
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }

    setTimeout(() => {
      if (targetSection) {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  if (currentRoute === 'lumbox') {
    return (
      <ProjectDetailLumbox 
        onBack={() => handleBackToLanding('projects')}
        onNavigateExperience={() => handleBackToLanding('experiences')}
      />
    );
  }

  return <LandingPage />;
}

export default App;
