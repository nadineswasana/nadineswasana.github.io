import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './BehindBuilderSection.css';
import flowerAvatar from '../../../assets/behind-builder/builder-avatar-card.png';

export default function BehindBuilderSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            containerRef.current.children,
            { y: 35, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, stagger: 0.2, ease: 'power3.out' }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    // Provide clean resume action / alert or link
    window.open('#', '_blank');
  };

  return (
    <section id="behind-builder" className="behind-builder-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Behind the Builder</h2>
          <p className="section-subtitle">
            Beyond the digital platforms I build, here is a glimpse into the dynamic journey, professional experiences, and competitive achievements that shape my approach to technology and innovation.
          </p>
        </div>

        <div className="builder-layout" ref={containerRef}>
          {/* Left Bio Card */}
          <div className="builder-bio-card">
            <p className="builder-bio-text">
              Hi, I’m Nadine, an Information Systems student majoring in Business Information Technology, with an expected graduation in 2028. Currently, I am actively seeking new opportunities to learn, grow, and collaborate on impactful solutions. I have participated in over 10 national and international competitions and co-authored a paper published in Scopus during my fourth semester.
            </p>

            <div className="builder-actions">
              <button 
                type="button"
                onClick={handleDownloadResume} 
                className="btn-secondary-gold"
                aria-label="Download Nadine's Resume"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 18.804 19.021 18.412 19.413C18.02 19.805 17.5493 20.0007 17 20H6Z" fill="currentColor"/>
                </svg>
                <span>Download Resume</span>
              </button>

              <a 
                href="mailto:nadine.swasana@binus.ac.id" 
                className="btn-primary-gradient"
                aria-label="Connect with Nadine via email at nadine.swasana@binus.ac.id"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                </svg>
                <span>Connect with Me</span>
              </a>
            </div>
          </div>

          {/* Right Avatar Card */}
          <div className="builder-avatar-card">
            <img 
              src={flowerAvatar} 
              alt="Nadine's illustrated builder avatar" 
              className="builder-avatar-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
