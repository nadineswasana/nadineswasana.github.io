import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorkExperiencesSection.css';

// Import Washi Tape Tag Assets
import tagSql from '../../../assets/work-experiences/tag-sql.png';
import tagOracleApex from '../../../assets/work-experiences/tag-oracle-apex.png';
import tagRelationalDb from '../../../assets/work-experiences/tag-relational-db.png';
import tagUml from '../../../assets/work-experiences/tag-uml.png';
import tagDrawio from '../../../assets/work-experiences/tag-drawio.png';
import tagSystemArch from '../../../assets/work-experiences/tag-system-arch.png';
import tagFigma from '../../../assets/work-experiences/tag-figma.png';
import tagUxResearch from '../../../assets/work-experiences/tag-ux-research.png';
import tagPrototyping from '../../../assets/work-experiences/tag-prototyping.png';
import cardBackImg from '../../../assets/work-experiences/card-back.png';

gsap.registerPlugin(ScrollTrigger);

const teachingCourses = [
  {
    id: 'db',
    title: 'Database Fundamental',
    tags: [
      { img: tagSql, alt: 'SQL' },
      { img: tagOracleApex, alt: 'Oracle APEX' },
      { img: tagRelationalDb, alt: 'Relational Database' }
    ],
    action: 'Mentored',
    metric: '26 students',
    description: 'in SQL, relational database design, and Oracle APEX, achieving a 100% pass rate on the practical final exam.'
  },
  {
    id: 'isad',
    title: 'Information Systems Analysis & Design',
    tags: [
      { img: tagUml, alt: 'UML' },
      { img: tagDrawio, alt: 'Draw.io' },
      { img: tagSystemArch, alt: 'System Architecture' }
    ],
    action: 'Delivered hands-on sessions to',
    metric: '51 students',
    description: 'covering System Sequence Diagrams, Class Diagrams, and Client-Server Architecture.'
  },
  {
    id: 'ux',
    title: 'User Experience Research & Design',
    tags: [
      { img: tagFigma, alt: 'Figma' },
      { img: tagUxResearch, alt: 'UX Research' },
      { img: tagPrototyping, alt: 'Prototyping' }
    ],
    action: 'Guided',
    metric: '31 students',
    description: 'through the end-to-end design process, from problem discovery and target user research to high-fidelity Figma prototyping.'
  }
];

export default function WorkExperiencesSection() {
  const sectionRef = useRef(null);
  const teachingGridRef = useRef(null);
  const cardRefs = useRef([]);
  const [flippedStates, setFlippedStates] = useState([false, false, false]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal experience containers smoothly
      gsap.fromTo(
        '.experience-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // 2. AUTOMATIC sequential 1-by-1 flip when card section enters 40% of viewport
      // "top 60%" triggers when the top of teachingGrid reaches 60% of viewport height
      // (which is exactly 40% into the viewport window)
      ScrollTrigger.create({
        trigger: teachingGridRef.current,
        start: 'top 60%',
        once: true,
        onEnter: () => {
          cardRefs.current.forEach((cardEl, idx) => {
            if (cardEl) {
              gsap.to(cardEl, {
                rotateY: 180,
                duration: 0.9,
                delay: idx * 0.35, // 1 by 1 sequential stagger
                ease: 'back.out(1.3)',
                onComplete: () => {
                  setFlippedStates((prev) => {
                    const next = [...prev];
                    next[idx] = true;
                    return next;
                  });
                }
              });
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Optional manual flip toggle if user wants to flip a card back again
  const handleCardClick = (idx) => {
    const cardEl = cardRefs.current[idx];
    if (!cardEl) return;

    const isFlipped = flippedStates[idx];
    const target = isFlipped ? 0 : 180;

    gsap.to(cardEl, {
      rotateY: target,
      duration: 0.7,
      ease: 'back.out(1.2)'
    });

    setFlippedStates((prev) => {
      const next = [...prev];
      next[idx] = !isFlipped;
      return next;
    });
  };

  return (
    <section id="experiences" className="experiences-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experiences</h2>
        </div>

        <div className="experiences-stack">
          {/* Experience Item 1: Marketing BINUS */}
          <article className="experience-card">
            <div className="experience-top">
              <div className="experience-heading">
                <h3 className="exp-company">Marketing BINUS University</h3>
                <h4 className="exp-role">Sales and Marketing Promotion Team</h4>
              </div>
              <span className="exp-period">Mar 2026 - Present</span>
            </div>

            <p className="exp-desc">
              Led campus tours across 5+ partner high schools and represented BINUS at the 33rd IIETE 2026. Designed and deployed audience-driven sales campaigns to improve conversion.
            </p>
          </article>

          {/* Experience Item 2: Lab Assistant BINUS */}
          <article className="experience-card lab-assistant-card">
            <div className="experience-top">
              <div className="experience-heading">
                <h3 className="exp-company">Information Systems Laboratory BINUS University</h3>
                <h4 className="exp-role">Laboratory Assistant</h4>
              </div>
              <span className="exp-period">Jan 2026 - Present</span>
            </div>

            <p className="exp-desc">
              Delivered hands-on practicum sessions across three core courses, equivalent to an 8 SCU teaching load.
            </p>

            {/* 3 Teaching Course Flip Cards with automatic 1-by-1 animation */}
            <div className="teaching-cards-grid" ref={teachingGridRef}>
              {teachingCourses.map((course, idx) => (
                <div 
                  key={course.id} 
                  className="course-flip-wrapper"
                  onClick={() => handleCardClick(idx)}
                  title="Click to flip card"
                >
                  <div 
                    className="course-flip-inner"
                    ref={(el) => (cardRefs.current[idx] = el)}
                  >
                    {/* BACK SIDE (Design node 626:806 - starts face-up, flips automatically) */}
                    <div className="course-card-face course-card-back">
                      <div className="card-back-frame">
                        <span className="card-back-brand">Nadine Swasana</span>
                      </div>
                      <img 
                        src={cardBackImg} 
                        alt="Course card back" 
                        className="card-back-img-fallback" 
                        aria-hidden="true" 
                      />
                    </div>

                    {/* FRONT SIDE (Revealed automatically 1-by-1 upon reaching 40% viewport) */}
                    <div className="course-card-face course-card-front">
                      <h5 className="course-title">{course.title}</h5>

                      {/* Washi Tape Stickers */}
                      <div className="course-washi-tags">
                        {course.tags.map((tag, tIdx) => (
                          <img 
                            key={tIdx} 
                            src={tag.img} 
                            alt={tag.alt} 
                            className="washi-tag-img" 
                            loading="lazy" 
                          />
                        ))}
                      </div>

                      <div className="course-impact-box">
                        <span className="impact-action">{course.action}</span>
                        <span className="impact-metric">{course.metric}</span>
                        <p className="impact-desc">{course.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
