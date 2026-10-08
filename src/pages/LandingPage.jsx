import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/hero/HeroSection';
import ProjectsSection from '../components/sections/projects/ProjectsSection';
import CurrentlyBuildingSection from '../components/sections/currently-building/CurrentlyBuildingSection';
import BehindBuilderSection from '../components/sections/behind-builder/BehindBuilderSection';
import WorkExperiencesSection from '../components/sections/work-experiences/WorkExperiencesSection';
import HonorsSection from '../components/sections/honors/HonorsSection';
import PublicationSection from '../components/sections/publication/PublicationSection';
import Footer from '../components/layout/Footer';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <main className="landing-main-content">
        <HeroSection />
        <ProjectsSection />
        <CurrentlyBuildingSection />
        <BehindBuilderSection />
        <WorkExperiencesSection />
        <HonorsSection />
        <PublicationSection />
      </main>
      <Footer />
    </div>
  );
}
