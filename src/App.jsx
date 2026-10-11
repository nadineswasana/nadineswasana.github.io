import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ProjectDetailLumbox from './pages/ProjectDetailLumbox';
import ProjectDetailKorpus from './pages/ProjectDetailKorpus';
import ProjectDetailEEG from './pages/ProjectDetailEEG';
import './App.css';

function getRouteFromHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#/project/lumbox') || hash.startsWith('#project/lumbox')) {
    return 'lumbox';
  }
  if (hash.startsWith('#/project/korpus') || hash.startsWith('#project/korpus')) {
    return 'korpus';
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
    let route = 'landing';
    let targetHash = '';
    if (projectName === 'lumbox') {
      route = 'lumbox';
      targetHash = '#/project/lumbox';
    } else if (projectName === 'korpus') {
      route = 'korpus';
      targetHash = '#/project/korpus';
    } else if (projectName === 'eeg-seizure' || projectName === 'eeg' || projectName === 'eeg-paper') {
      route = 'eeg';
      targetHash = '#/project/eeg-seizure';
    }

    setCurrentRoute(route);
    if (targetHash && window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
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

  if (currentRoute === 'korpus') {
    return (
      <ProjectDetailKorpus 
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

  return <LandingPage onNavigateProject={handleNavigateProject} />;
}

export default App;
