import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './HonorsSection.css';

import flowerLeft from '../../../assets/honors/honors-flower-left.png';
import flowerRight from '../../../assets/honors/honors-flower-right.png';

const globalAwards = [
  {
    id: 'best-paper',
    title: 'Best Paper Award',
    desc: '1st International Conference on Bioinformatics, Biomedical Engineering, and Biotechnology Exploring New Frontiers in Healthcare (BIOXPLORE) 2026',
    org: 'Universitas Muhammadiyah Yogyakarta'
  },
  {
    id: 'protoathon',
    title: 'Top 10 Global Finalist (6th Place)',
    desc: 'Proto-A-Thon International Design Competition 2026',
    org: 'BINUS University'
  },
  {
    id: 'vocational-olympiad',
    title: '3rd Place',
    desc: 'International UI/UX Design Competition Vocational Worldwide Olympiad 2025',
    org: 'University of Indonesia'
  }
];

const nationalAwards = [
  {
    id: 'uxtoday-2026',
    title: '2nd Place',
    desc: 'UXToday IT TODAY 2026',
    org: 'IPB University'
  },
  {
    id: 'inspace-2026',
    title: '2nd Place',
    desc: 'INSPACE 2026 UI/UX Design Competition',
    org: 'Institut Teknologi Kalimantan'
  },
  {
    id: 'specta-2025',
    title: '3nd Place',
    desc: 'Information Technology Specta 2025 UI/UX Design Competition',
    org: 'Universitas Muhammadiyah Yogyakarta'
  },
  {
    id: 'gemastik-2025',
    title: 'Finalist',
    desc: 'GEMASTIK XVIII 2025 UX Design',
    org: 'Ministry of Higher Education, Science, and Technology of Indonesia'
  },
  {
    id: 'uxtoday-2025',
    title: 'Finalist',
    desc: 'UXToday IT TODAY 2025',
    org: 'IPB University'
  }
];

const academicAwards = [
  {
    id: 'most-outstanding',
    title: 'Most Outstanding Student: Multicategory International Award',
    desc: 'BINUS Appreciation Day 2026',
    org: 'BINUS University'
  },
  {
    id: 'lab-assistant',
    title: 'Dedicated Laboratory Assistant',
    desc: 'Information Systems Laboratory BINUS University',
    org: 'BINUS University'
  },
  {
    id: 'excellence-2026',
    title: 'Excellence Awardee',
    desc: 'School of Information Systems, BINUS University 2026',
    org: 'BINUS University'
  },
  {
    id: 'appreciation-2025',
    title: 'Appreciation Day Awardee',
    desc: 'School of Information Systems, BINUS University 2025',
    org: 'BINUS University'
  }
];

export default function HonorsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              '.award-category-col',
              { y: 35, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="honors" className="honors-section" ref={sectionRef}>
      {/* Background Decorative Smiling Flowers */}
      <img src={flowerLeft} alt="" className="honors-bg-flower honors-flower-left" aria-hidden="true" />
      <img src={flowerRight} alt="" className="honors-bg-flower honors-flower-right" aria-hidden="true" />

      <div className="container honors-container">
        <div className="section-header">
          <h2 className="section-title">Honors & Awards</h2>
          <p className="section-subtitle">
            A look at the milestones and recognitions that marked my journey in the last 2 years
          </p>
        </div>

        <div className="awards-main-grid">
          {/* Column 1: Global & Research */}
          <div className="award-category-col">
            <h3 className="category-title">
              <span className="category-icon">🌍</span> Global & Research Excellence
            </h3>
            <div className="award-items-list">
              {globalAwards.map((award) => (
                <div key={award.id} className="award-item">
                  <h4 className="award-name">{award.title}</h4>
                  <p className="award-desc">{award.desc}</p>
                  <span className="award-org">{award.org}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: National Competitions */}
          <div className="award-category-col">
            <h3 className="category-title">
              <span className="category-icon">🇮🇩</span> National Competitions
            </h3>
            <div className="award-items-list">
              {nationalAwards.map((award) => (
                <div key={award.id} className="award-item">
                  <h4 className="award-name">{award.title}</h4>
                  <p className="award-desc">{award.desc}</p>
                  <span className="award-org">{award.org}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Academic & Leadership (Spans full width) */}
          <div className="award-category-col academic-col">
            <h3 className="category-title">
              <span className="category-icon">📚</span> Academic & Leadership
            </h3>
            <div className="award-items-grid-2col">
              {academicAwards.map((award) => (
                <div key={award.id} className="award-item">
                  <h4 className="award-name">{award.title}</h4>
                  <p className="award-desc">{award.desc}</p>
                  <span className="award-org">{award.org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
