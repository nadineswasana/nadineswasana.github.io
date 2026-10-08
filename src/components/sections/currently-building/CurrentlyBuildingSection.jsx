import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CurrentlyBuildingSection.css';
import buildingPreview from '../../../assets/currently-building/building-preview.png';

export default function CurrentlyBuildingSection() {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            cardRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="currently-building" className="currently-building-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Currently Building</h2>
          <p className="section-subtitle">
            Something new is taking shape behind the scenes – here's a sneak peek before it's ready 👀
          </p>
        </div>

        <div className="currently-building-card" ref={cardRef}>
          <div className="building-image-wrapper">
            <img 
              src={buildingPreview} 
              alt="Customs Brokerage Portal in progress" 
              className="building-image"
              loading="lazy"
            />
          </div>

          <div className="building-info">
            <span className="building-category">
              Project Management / Product Design / System Analysis
            </span>
            <h3 className="building-title">
              (DUMMY PROJECT) System Design and Analysis for End-to-End Brokerage Portal, Cloud-Ready Customs Management
            </h3>
            <p className="building-desc">
              This is my final project for <strong>Minor Project in Information Systems</strong> course, where students have to work directly with a real company to solve an actual business problem. I'm partnering with a real customs brokerage firm managing end-to-end import-export operations, conducting system analysis to identify inefficiencies in their current processes and designing a solution to streamline their workflows across regulatory, logistics, and stakeholder coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
