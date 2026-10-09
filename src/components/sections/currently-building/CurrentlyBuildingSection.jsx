import { useEffect, useRef } from 'react';
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
              alt="HSE Consulting Firm Platform preview" 
              className="building-image"
              loading="lazy"
            />
          </div>

          <div className="building-info">
            <span className="building-category">
              Project Management / Product Design / System Analysis
            </span>
            <h3 className="building-title">
              System Design and Analysis for an HSE Consulting Firm’s Training Management &amp; Certification Platform
            </h3>
            <p className="building-desc">
              Designing a system for an HSE (health, safety, and environment) consulting firm serving clients across oil &amp; gas, construction, and mining — covering from a catalog of BNSP (National Professional Certification Agency) accredited training schemes to client registration, contracts, invoicing, and an LMS where materials unlock once payment is confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
