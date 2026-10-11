import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';

import flowerLeft from '../../../assets/hero/hero-flower-left.png';
import flowerRight from '../../../assets/hero/hero-flower-right.png';
import widgetDashboard from '../../../assets/hero/hero-dashboard-widget.png';
import widgetFolder from '../../../assets/hero/hero-folder-figma.png';
import widgetFlowchart from '../../../assets/hero/hero-db-flowchart.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const widget1Ref = useRef(null);
  const widget2Ref = useRef(null);
  const widget3Ref = useRef(null);
  const headlineRef = useRef(null);
  const bioRef = useRef(null);
  const flowerLeftRef = useRef(null);
  const flowerRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })
      .from(bioRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9
      }, '-=0.6')
      .from([widget1Ref.current, widget2Ref.current, widget3Ref.current], {
        scale: 0.75,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.5)'
      }, '-=0.7');

      // Subtle organic floating bobbing loops for widgets
      gsap.to(widget1Ref.current, {
        y: '-=12',
        x: '+=6',
        rotation: 2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(widget2Ref.current, {
        y: '+=14',
        x: '-=5',
        rotation: -2,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });

      gsap.to(widget3Ref.current, {
        y: '-=10',
        x: '-=7',
        rotation: 1.5,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      });

      // Gentle, smooth scroll-driven rotation for background flowers
      gsap.to(flowerLeftRef.current, {
        rotation: 140,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      gsap.to(flowerRightRef.current, {
        rotation: -140,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWorks = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Background Decorative Smiling Flowers */}
      <img ref={flowerLeftRef} src={flowerLeft} alt="" className="hero-bg-flower flower-left" aria-hidden="true" />
      <img ref={flowerRightRef} src={flowerRight} alt="" className="hero-bg-flower flower-right" aria-hidden="true" />

      {/* Floating 3D Technology & Design Widgets */}
      <div className="hero-widget widget-dashboard" ref={widget1Ref}>
        <img src={widgetDashboard} alt="System dashboard and analytics illustration" />
      </div>

      <div className="hero-widget widget-folder" ref={widget2Ref}>
        <img src={widgetFolder} alt="Design and wireframe folder illustration" />
      </div>

      <div className="hero-widget widget-flowchart" ref={widget3Ref}>
        <img src={widgetFlowchart} alt="Database and process architecture illustration" />
      </div>

      {/* Central Content */}
      <div className="container hero-content-wrapper">
        <h1 className="hero-headline" ref={headlineRef}>
          Bridging business goals, values, and human needs through intelligent technology
        </h1>

        <div className="hero-intro-card" ref={bioRef}>
          <div className="hero-greeting">
            <span className="wave-hand">👋🏻</span> Hi, I’m <strong>Nadine Swasana</strong>
          </div>

          <p className="hero-bio-lead">
            A system analyst and digital product enthusiast who turns complex business challenges into intuitive, high-impact user experiences.
          </p>

          <p className="hero-bio-detail">
            <strong>I am highly driven to</strong> help sustainable enterprises integrate their core business values with seamless digital solutions.
          </p>

          <div className="hero-dashed-divider" />

          <div className="hero-action-row">
            <a 
              href="mailto:nadine.swasana@binus.ac.id"
              className="btn-primary-gradient hero-cta-btn"
              aria-label="Email Nadine Swasana at nadine.swasana@binus.ac.id"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
              </svg>
              <span>Contact Me</span>
            </a>

            <a 
              href="https://drive.google.com/file/d/19ccYx7GZsDbUziOGffB6d7-guiEKyvKN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gold hero-resume-btn"
              aria-label="View Nadine's Resume"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
              </svg>
              <span>View Resume</span>
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToWorks} 
          className="hero-scroll-prompt"
          aria-label="Scroll down to view works"
        >
          <span>↓ Scroll down to view my works</span>
        </button>
      </div>
    </section>
  );
}
