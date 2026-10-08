import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PublicationSection.css';

import paperBg from '../../../assets/publication/publication-card-bg.png';
import ieeeLogo from '../../../assets/publication/publication-ieee-logo.png';
import scopusLogo from '../../../assets/publication/publication-scopus-logo.png';
import bioxploreLogo from '../../../assets/publication/publication-bioxplore-logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function PublicationSection() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const paperRef = useRef(null);
  const envelopeBackRef = useRef(null);
  const envelopePocketRef = useRef(null);
  const flapRef = useRef(null);
  const sealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({
        isMobile: '(max-width: 640px)',
        isDesktop: '(min-width: 641px)'
      }, (context) => {
        const { isMobile } = context.conditions;
        const initialScale = isMobile ? 0.62 : 0.88;
        const paperSlideY = isMobile ? -30 : -50;
        const paperInsideY = isMobile ? 80 : 130;
        const envelopeDropY = isMobile ? 140 : 200;

        // 1. Initial State:
        // Whole package (envelope with paper inside) starts scaled down (especially on mobile!)
        gsap.set(sceneRef.current, {
          y: isMobile ? 40 : 70,
          opacity: 0,
          scale: initialScale,
          transformOrigin: 'center center'
        });

        // All envelope pieces share the exact same top hinge origin so they never detach
        gsap.set([envelopeBackRef.current, envelopePocketRef.current, flapRef.current], {
          transformOrigin: 'top center',
          autoAlpha: 1
        });

        // Flap is sealed at the front over the pocket (z-index 4)
        gsap.set(flapRef.current, {
          rotateX: 0,
          transformOrigin: 'top center',
          zIndex: 4
        });

        // Paper is tucked safely inside the envelope pocket
        // Bottom is clipped so it never pokes out below the envelope
        gsap.set(paperRef.current, {
          y: paperInsideY,
          opacity: 1,
          scale: 0.94,
          clipPath: 'inset(0% 0% 28% 0%)',
          transformOrigin: 'center center'
        });

        // 2. ScrollTrigger Timeline triggered when the envelope scene is visible
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sceneRef.current,
            start: isMobile ? 'top 80%' : 'top 75%',
            once: true
          }
        });

        // PHASE 1: "awal2 animasinya paper masih didalam envelope lalu mereka move in"
        tl.to(sceneRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power2.out'
        })
        // Subtle brief pause so user sees the sealed envelope intact
        .to({}, { duration: 0.15 })

        // PHASE 2: "lalu setelah itu envelope dibuka"
        .to(flapRef.current, {
          rotateX: 180,
          duration: 0.65,
          ease: 'power2.inOut',
          onComplete: () => {
            // Once opened upwards, flap is now BEHIND the emerging paper!
            if (flapRef.current) {
              flapRef.current.style.zIndex = '1';
            }
          }
        })
        .to(sealRef.current, {
          opacity: 0.35,
          scale: 0.8,
          duration: 0.35
        }, '<0.05')

        // PHASE 3: "lalu paper move in dan envelope move out back"
        // Paper moves in (slides up & forward out of the pocket)
        .to(paperRef.current, {
          y: paperSlideY,
          scale: 0.98,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.95,
          ease: 'power2.out'
        }, '+=0.05')
        // Simultaneously, envelope moves out back (drops, fades away cleanly with autoAlpha)
        .to([envelopeBackRef.current, envelopePocketRef.current, flapRef.current], {
          y: envelopeDropY,
          autoAlpha: 0,
          duration: 0.75,
          ease: 'power2.in'
        }, '<0.25')

        // PHASE 4: "tar pas udah papernya berpisah dari envelopenya baru membesar ke ukuran aslinya"
        // Both scene and paper smoothly scale up to 1 (full 100% natural size) and settle into place
        .to(sceneRef.current, {
          scale: 1,
          duration: 0.75,
          ease: 'back.out(1.2)'
        }, '-=0.1')
        .to(paperRef.current, {
          scale: 1,
          y: 0,
          duration: 0.75,
          ease: 'back.out(1.2)'
        }, '<');
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="publication" className="publication-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Publication</h2>
        </div>

        {/* Scene Container with true direct sandwich layers */}
        <div className="publication-scene" ref={sceneRef}>
          {/* LAYER 1 (Bottom): Envelope Back Base (Behind the paper) */}
          <div className="envelope-layer-back" ref={envelopeBackRef} aria-hidden="true" />

          {/* LAYER 2 (Middle): Parchment Paper Card (Inside the envelope) */}
          <div className="publication-parchment-wrapper" ref={paperRef}>
            <img 
              src={paperBg} 
              alt="" 
              className="parchment-bg-texture" 
              aria-hidden="true" 
            />

            <div className="parchment-content">
              {/* Top Block: Title & Authors */}
              <div className="parchment-top-group">
                <h3 className="paper-title">
                  Evaluating the Robustness of Classical Machine Learning in Cross-Subject EEG Seizure Detection.
                </h3>

                <div className="paper-authors-block">
                  <p className="paper-authors">
                    <strong>Authors:</strong> D.F.P. Tarigan, K. Fransisco, A. Ananti, M.Z. Al-Farizi, <strong>N.S. Swasana</strong>, N.S. Azzahra.
                  </p>
                  <p className="paper-conference">
                    Presented at 1st International Conference on Bioinformatics, Biomedical Engineering, and Biotechnology (BIOXPLORE 2026), August 2026.
                  </p>
                </div>
              </div>

              {/* Middle Block: Logos & Summary */}
              <div className="parchment-middle-group">
                <div className="publication-logos-row">
                  <img src={ieeeLogo} alt="IEEE Logo" className="pub-logo ieee-logo" loading="lazy" />
                  <img src={scopusLogo} alt="Indexed by Scopus" className="pub-logo scopus-logo" loading="lazy" />
                  <img src={bioxploreLogo} alt="BIOXPLORE Conference" className="pub-logo bioxplore-logo" loading="lazy" />
                </div>

                <p className="publication-summary">
                  Co-authored a study evaluating classical ML models for cross-subject EEG seizure detection on 3.5M+ CHB-MIT windows under extreme class imbalance (0.067% seizures)
                </p>
              </div>

              {/* Bottom Link */}
              <a 
                href="https://ieeexplore.ieee.org/document/11709894" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="publication-link"
                aria-label="Read paper on IEEE Xplore"
              >
                &#123;&nbsp; Read on IEEE Xplore &nbsp;&#125;
              </a>
            </div>
          </div>

          {/* LAYER 3 (Front Pocket): Crisp Vector SVG Pocket (Zero clip-path bugs on mobile) */}
          <div className="envelope-layer-pocket" ref={envelopePocketRef} aria-hidden="true">
            <svg viewBox="0 0 600 360" preserveAspectRatio="none" className="envelope-pocket-svg">
              <defs>
                <linearGradient id="pocketGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F3DFBF" />
                  <stop offset="100%" stopColor="#E2C29B" />
                </linearGradient>
              </defs>
              <path 
                d="M 0 0 L 300 70 L 600 0 L 600 340 Q 600 360 580 360 L 20 360 Q 0 360 0 340 Z" 
                fill="url(#pocketGrad)" 
                stroke="rgba(139, 102, 40, 0.25)" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>

          {/* LAYER 4 (Top Flap): Crisp Vector SVG Flap with Wax Seal */}
          <div className="envelope-layer-flap" ref={flapRef} aria-hidden="true">
            <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="envelope-flap-svg">
              <defs>
                <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DDB98E" />
                  <stop offset="100%" stopColor="#F0DAB8" />
                </linearGradient>
              </defs>
              <path 
                d="M 0 0 L 600 0 L 300 300 Z" 
                fill="url(#flapGrad)" 
                stroke="rgba(139, 102, 40, 0.25)" 
                strokeWidth="1.5" 
              />
            </svg>
            <div className="envelope-wax-seal" ref={sealRef}>
              <span className="seal-icon">⚜</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
