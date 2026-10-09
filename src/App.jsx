import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ProjectDetailLumbox from './pages/ProjectDetailLumbox';
import ProjectDetailEEG from './pages/ProjectDetailEEG';
import './App.css';

function getRouteFromHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#/project/lumbox') || hash.startsWith('#project/lumbox')) {
    return 'lumbox';
  }
  if (
    hash.startsWith('#/project/eeg') || 
    hash.startsWith('#project/eeg') ||
    hash.startsWith('#/project/eeg-seizure') ||
    hash.startsWith('#/project/eeg-paper')
  ) {
    return 'eeg';
  }
  return 'landing';
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
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

  const handleNavigateProject = (projectName) => {
    if (projectName === 'lumbox') {
      window.location.hash = '#/project/lumbox';
    } else if (projectName === 'eeg-seizure' || projectName === 'eeg') {
      window.location.hash = '#/project/eeg-seizure';
    }
  };

  if (currentRoute === 'lumbox') {
    return (
      <ProjectDetailLumbox 
        onBack={() => handleBackToLanding('projects')}
        onNavigateExperience={() => handleBackToLanding('experiences')}
        onNavigateProject={handleNavigateProject}
      />
    );
  }

  if (currentRoute === 'eeg') {
    return (
      <ProjectDetailEEG 
        onBack={() => handleBackToLanding('projects')}
        onNavigateExperience={() => handleBackToLanding('experiences')}
        onNavigateProject={handleNavigateProject}
      />
    );
  }

  return <LandingPage />;
}

export default App;
