import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ProjectsSection.css';

import projectLastLonger from '../../../assets/projects/project-lastlonger.png';
import projectLumbox from '../../../assets/projects/project-lumbox.png';
import projectKorpus from '../../../assets/projects/project-korpus.png';
import projectEeg from '../../../assets/projects/project-eeg.png';

const projects = [
  {
    id: 'lastlonger',
    category: 'Project Management / UX Research',
    title: 'LastLonger: End-to-End Device Lifecycle Management App',
    description:
      'An app driving sustainable solutions and a circular economy through responsible device lifecycles, reducing e-waste through responsible reuse and resale pathways.',
    image: projectLastLonger,
    alt: 'LastLonger Device Lifecycle App Preview'
  },
  {
    id: 'lumbox',
    category: 'Project Management / UX Research',
    title: 'LUMBOX: B2B Platform for Indonesia’s Agricultural Supply Chain',
    description:
      "A three-surface B2B platform built in collaboration with ID FOOD, Indonesia's state-owned food holding company for Proto-A-Thon International Design Competiton 2026.",
    image: projectLumbox,
    alt: 'LUMBOX B2B Agriculture Platform Preview'
  },
  {
    id: 'korpus',
    category: 'Product Management / UX Research',
    title: 'KORPUS: Fullstack Digital Platform to Activate Indonesia’s 83.000+ Village Cooperatives',
    description:
      'A frictionless onboarding and digital wallet system to scale cooperative participation nationwide for Hackathon Digital Cooperatives Expo 2026',
    image: projectKorpus,
    alt: 'KORPUS Village Cooperatives Platform Preview'
  },
  {
    id: 'eeg-paper',
    category: 'Research / Machine Learning',
    title: 'Evaluating the Robustness of Classical Machine Learning in Cross-Subject EEG Seizure Detection',
    description:
      'A classical ML pipeline trained on 3.5M+ EEG segments to flag seizure risk and accelerate clinical triage, presented at BIOXPLORE 2026. IEEE & Scopus-indexed.',
    image: projectEeg,
    alt: 'IEEE EEG Seizure Detection Research Paper Preview'
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal cards smoothly with IntersectionObserver fallback / GSAP
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                cardsRef.current,
                { y: 50, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: 'power3.out'
                }
              );
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            I build and collaborate closely with teams, users, and stakeholders to address business challenges through sustainable digital platforms that drive long-term customer success.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isClickable = project.id === 'lumbox' || project.id === 'eeg-paper';
            const projectHash = project.id === 'lumbox' ? '#/project/lumbox' : '#/project/eeg-seizure';

            return (
              <article 
                key={project.id} 
                className={`project-card ${isClickable ? 'project-card--clickable' : ''}`}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => {
                  if (isClickable) {
                    window.location.hash = projectHash;
                  }
                }}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    window.location.hash = projectHash;
                  }
                }}
              >
                <div className="project-image-box">
                  <img 
                    src={project.image} 
                    alt={project.alt} 
                    className="project-img"
                    loading="lazy"
                  />
                  {isClickable && (
                    <span className="project-badge-interactive">
                      {project.id === 'lumbox' ? 'View Case Study ↗' : 'View Research Paper ↗'}
                    </span>
                  )}
                </div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
