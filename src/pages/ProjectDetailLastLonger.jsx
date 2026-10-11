import { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import './ProjectDetailLastLonger.css';

// LastLonger Mockup Assets
import heroDevicesImg from '../assets/project-detail/lastlonger/lastlonger-hero-devices.png';
import personaAmandaImg from '../assets/project-detail/lastlonger/lastlonger-persona-amanda.png';
import personaTomoImg from '../assets/project-detail/lastlonger/lastlonger-persona-tomo.png';
import personaBayuImg from '../assets/project-detail/lastlonger/lastlonger-persona-bayu.png';
import loop1Img from '../assets/project-detail/lastlonger/lastlonger-loop-1.png';
import loop2Img from '../assets/project-detail/lastlonger/lastlonger-loop-2.png';
import loop3Img from '../assets/project-detail/lastlonger/lastlonger-loop-3.png';
import loop4Img from '../assets/project-detail/lastlonger/lastlonger-loop-4.png';
import feature1Img from '../assets/project-detail/lastlonger/lastlonger-feature-1.png';
import feature2Img from '../assets/project-detail/lastlonger/lastlonger-feature-2.png';
import feature3Img from '../assets/project-detail/lastlonger/lastlonger-feature-3.png';
import feature4Img from '../assets/project-detail/lastlonger/lastlonger-feature-4.png';
import feature5Img from '../assets/project-detail/lastlonger/lastlonger-feature-5.png';
import feature6Img from '../assets/project-detail/lastlonger/lastlonger-feature-6.png';
import conclusionImg from '../assets/project-detail/lastlonger/lastlonger-conclusion.png';

// Related Projects Assets
import projectLumbox from '../assets/projects/project-lumbox.png';
import projectKorpus from '../assets/projects/project-korpus.png';
import projectEeg from '../assets/projects/project-eeg.png';

export default function ProjectDetailLastLonger({ onBack, onNavigateExperience, onNavigateProject }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#projects';
    }
  };

  const handleGoToExperiences = () => {
    if (onNavigateExperience) {
      onNavigateExperience();
    } else {
      window.location.hash = '#experiences';
    }
  };

  const handleOpenLumbox = () => {
    if (onNavigateProject) {
      onNavigateProject('lumbox');
    } else {
      window.location.hash = '#/project/lumbox';
    }
  };

  const handleOpenKorpus = () => {
    if (onNavigateProject) {
      onNavigateProject('korpus');
    } else {
      window.location.hash = '#/project/korpus';
    }
  };

  const handleOpenEEG = () => {
    if (onNavigateProject) {
      onNavigateProject('eeg-seizure');
    } else {
      window.location.hash = '#/project/eeg-seizure';
    }
  };

  return (
    <div className="lastlonger-detail-page">
      {/* 1. STICKY HEADER (Matches Unified Design System: Lumbox, EEG & Korpus) */}
      <header className="lastlonger-header">
        <div className="lastlonger-header-inner">
          <button 
            type="button" 
            className="lastlonger-brand-btn" 
            onClick={handleClose}
            aria-label="Back to home"
          >
            Nadine Swasana
          </button>
          <button 
            type="button" 
            className="lastlonger-close-btn" 
            onClick={handleClose}
            aria-label="Close project detail"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <main className="lastlonger-main-content">
        {/* 2. MAIN / HERO SECTION (Figma Node 671:5) */}
        <section className="lastlonger-hero-section">
          <div className="lastlonger-container">
            <div className="lastlonger-hero-intro">
              <h1 className="lastlonger-hero-title">
                <strong>LastLonger</strong>: Smart Asset Lifecycle Ecosystem
              </h1>
              <p className="lastlonger-hero-description">
                A mobile app that serves as a personal companion throughout the entire gadget lifecycle, from the initial purchase, proactive performance maintenance, all the way to secure offboarding via repair, trade-in, or certified recycling.
              </p>
            </div>

            <div className="lastlonger-hero-mockup-wrapper">
              <img 
                src={heroDevicesImg} 
                alt="LastLonger device mockup preview showing mobile app" 
                className="lastlonger-hero-mockup-img"
              />
            </div>

            {/* Metadata Bar (Figma Node 671:9) */}
            <div className="lastlonger-meta-grid">
              <div className="lastlonger-meta-card">
                <span className="lastlonger-meta-label">TYPE</span>
                <p className="lastlonger-meta-value">
                  UI/UX Case Submission, INSPACE UI/UX Competition 2026
                </p>
              </div>

              <div className="lastlonger-meta-card">
                <span className="lastlonger-meta-label">THE TEAM</span>
                <p className="lastlonger-meta-value">
                  Nadya Euvania (UX Researcher)<br />
                  Abdul Aziz Zaki Hidayat (UI/UX Designer)
                </p>
              </div>

              <div className="lastlonger-meta-card">
                <span className="lastlonger-meta-label">ROLE</span>
                <p className="lastlonger-meta-value">Project Manager</p>
              </div>

              <div className="lastlonger-meta-card">
                <span className="lastlonger-meta-label">TIME</span>
                <p className="lastlonger-meta-value">August 2026</p>
              </div>

              <div className="lastlonger-meta-card">
                <span className="lastlonger-meta-label">RESULT</span>
                <p className="lastlonger-meta-value lastlonger-result-highlight">
                  2nd Place, INSPACE UI/UX Competition 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OVERVIEW SECTION (Figma Node 671:32) */}
        <section className="lastlonger-section lastlonger-overview-section">
          <div className="lastlonger-container lastlonger-two-col">
            <div className="lastlonger-col-left">
              <span className="lastlonger-section-tag">OVERVIEW</span>
            </div>
            <div className="lastlonger-col-right">
              <h2 className="lastlonger-section-heading">
                Indonesians replace phones quickly, yet almost nobody knows where the old ones should go. LastLonger turns impulsive upgrades into sustainable lifecycle habits.
              </h2>
              <hr className="lastlonger-divider-line" />

              <div className="lastlonger-card-pair">
                {/* Problem Summary Card */}
                <div className="lastlonger-surface-card">
                  <div className="lastlonger-card-header">
                    <span className="lastlonger-card-icon" role="img" aria-label="sad face">😢</span>
                    <span className="lastlonger-card-title">THE PROBLEM</span>
                  </div>
                  <p className="lastlonger-card-body">
                    Indonesia's e-waste is projected to double from 2.1 million tons (2023) to 4.4 million tons by 2030, driven by rapid consumer turnover, low formal recycling rates (only 17-20%), and widespread fear of data theft on discarded devices.
                  </p>
                </div>

                {/* Solution Summary Card */}
                <div className="lastlonger-surface-card">
                  <div className="lastlonger-card-header">
                    <span className="lastlonger-card-icon" role="img" aria-label="pin">📌</span>
                    <span className="lastlonger-card-title">THE SOLUTION</span>
                  </div>
                  <p className="lastlonger-card-body">
                    An ecosystem built around a loop called L.O.O.P: Life Extension, Offboarding, Ownership Pride, Processing Transparency. One app connecting phone maintenance, triage diagnostics, certified repair/trade-in partners, and real-time recycling tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROBLEM SECTION, RESEARCH INSIGHTS & USER PERSONAS (Figma Node 671:52) */}
        <section className="lastlonger-section lastlonger-problem-section">
          <div className="lastlonger-container lastlonger-two-col">
            <div className="lastlonger-col-left">
              <span className="lastlonger-section-tag">PROBLEM</span>
            </div>
            <div className="lastlonger-col-right">
              <h2 className="lastlonger-section-heading">
                Indonesia's e-waste is projected to double from 2.1 million tons (2023) to 4.4 million tons by 2030.
              </h2>
              <hr className="lastlonger-divider-line" />

              {/* 4 Metrics Grid */}
              <div className="lastlonger-metrics-grid">
                <div className="lastlonger-metric-card">
                  <div className="lastlonger-metric-num">4.4M tons</div>
                  <p className="lastlonger-metric-desc">
                    projected e-waste by 2030, up from 2.1M tons in 2023.
                  </p>
                </div>
                <div className="lastlonger-metric-card">
                  <div className="lastlonger-metric-num">36%</div>
                  <p className="lastlonger-metric-desc">
                    of people replace their phone every year or so.
                  </p>
                </div>
                <div className="lastlonger-metric-card">
                  <div className="lastlonger-metric-num">45%</div>
                  <p className="lastlonger-metric-desc">
                    keep old phones at home out of confusion and fear of data leaks.
                  </p>
                </div>
                <div className="lastlonger-metric-card">
                  <div className="lastlonger-metric-num">17–20%</div>
                  <p className="lastlonger-metric-desc">
                    share of e-waste that is formally managed.
                  </p>
                </div>
              </div>

              {/* Highlight Quote Box */}
              <div className="lastlonger-quote-box">
                <p className="lastlonger-quote-text">
                  “The issue is not a lack of recycling points. It is impulsive upgrading and a deep lack of trust in repair services.”
                </p>
              </div>

              {/* Research Insights Sub-Section */}
              <div className="lastlonger-research-block">
                <h3 className="lastlonger-subheading">Research Insights</h3>
                <hr className="lastlonger-divider-line" />
                <p className="lastlonger-body-text">
                  We interviewed users aged 20, 27, and 54. Three findings shaped the whole product:
                </p>

                <div className="lastlonger-insights-stack">
                  <div className="lastlonger-insight-row">
                    <span className="lastlonger-insight-bullet">1</span>
                    <p className="lastlonger-insight-content">
                      <strong>People upgrade because of slowdowns, not total breakage.</strong> Small performance dips or battery degradation prompt replacements prematurely.
                    </p>
                  </div>
                  <div className="lastlonger-insight-row">
                    <span className="lastlonger-insight-bullet">2</span>
                    <p className="lastlonger-insight-content">
                      <strong>Nobody has a clear plan for the old device.</strong> A common fear is <em>"what if my private photos or banking data get restored?"</em>
                    </p>
                  </div>
                  <div className="lastlonger-insight-row">
                    <span className="lastlonger-insight-bullet">3</span>
                    <p className="lastlonger-insight-content">
                      <strong>Repair is seen as expensive, short-lived, and untrustworthy.</strong> Users worry about fake parts, hidden fees, or technicians browsing personal files.
                    </p>
                  </div>
                </div>

                <p className="lastlonger-body-text" style={{ marginTop: '24px' }}>
                  The empathy map and journey reduced these to four core problems: <strong>impulsive upgrade culture</strong>, a <strong>trust deficit in repair</strong>, an <strong>absence of trusted offboarding channels</strong>, and <strong>zero perceived incentive</strong> to hold onto a phone longer.
                </p>
              </div>

              {/* User Personas */}
              <div className="lastlonger-personas-block">
                <h3 className="lastlonger-subheading">User Persona</h3>
                <hr className="lastlonger-divider-line" />
                <p className="lastlonger-body-text">
                  Three people we designed for across the device lifecycle: the owner who needs a decision, and the partners who need trust and visibility.
                </p>

                <div className="lastlonger-personas-grid">
                  {/* Persona 1: Amanda */}
                  <div className="lastlonger-persona-card">
                    <div className="lastlonger-persona-header">
                      <img 
                        src={personaAmandaImg} 
                        alt="Amanda avatar" 
                        className="lastlonger-persona-avatar"
                      />
                      <div className="lastlonger-persona-meta">
                        <strong className="lastlonger-persona-name">Amanda, 24</strong>
                        <span className="lastlonger-persona-role">Worker</span>
                      </div>
                    </div>
                    <p className="lastlonger-persona-bio">
                      Amanda is used to replacing her smartphone every 1-2 years when performance starts to decline, such as battery draining faster or memory running out. She is hesitant to service it because of expensive costs and uncertainty.
                    </p>
                    <div className="lastlonger-persona-lists">
                      <div className="lastlonger-persona-list-col">
                        <span className="lastlonger-list-label">⚠️ PAIN POINTS</span>
                        <ul>
                          <li>The performance of smartphones declines rapidly after a few years.</li>
                          <li>Feels that service costs are high and do not guarantee long-term results.</li>
                        </ul>
                      </div>
                      <div className="lastlonger-persona-list-col">
                        <span className="lastlonger-list-label">🎯 GOALS</span>
                        <ul>
                          <li>Make the most appropriate and worthwhile decisions regarding smartphone usage.</li>
                          <li>Not complicated in managing old or unused smartphones.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Persona 2: Tomo */}
                  <div className="lastlonger-persona-card">
                    <div className="lastlonger-persona-header">
                      <img 
                        src={personaTomoImg} 
                        alt="Tomo avatar" 
                        className="lastlonger-persona-avatar"
                      />
                      <div className="lastlonger-persona-meta">
                        <strong className="lastlonger-persona-name">Tomo, 32</strong>
                        <span className="lastlonger-persona-role">Service Technician</span>
                      </div>
                    </div>
                    <p className="lastlonger-persona-bio">
                      Tomo works as a smartphone service technician and has received several devices in poor condition. However, he often faces challenges in reaching potential customers and building trust regarding price transparency.
                    </p>
                    <div className="lastlonger-persona-lists">
                      <div className="lastlonger-persona-list-col">
                        <span className="lastlonger-list-label">⚠️ PAIN POINTS</span>
                        <ul>
                          <li>Low user trust in services.</li>
                          <li>Difficult to reach new customers.</li>
                        </ul>
                      </div>
                      <div className="lastlonger-persona-list-col">
                        <span className="lastlonger-list-label">🎯 GOALS</span>
                        <ul>
                          <li>To gain more customers.</li>
                          <li>To build trust in service offerings.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Persona 3: Bayu */}
                  <div className="lastlonger-persona-card">
                    <div className="lastlonger-persona-header">
                      <img 
                        src={personaBayuImg} 
                        alt="Bayu avatar" 
                        className="lastlonger-persona-avatar"
                      />
                      <div className="lastlonger-persona-meta">
                        <strong className="lastlonger-persona-name">Bayu, 28</strong>
                        <span className="lastlonger-persona-role">Smartphone Salesperson</span>
                      </div>
                    </div>
                    <p className="lastlonger-persona-bio">
                      Bayu is a smartphone salesperson at a store. He strives to give the best advice to customers, but often feels unsure due to limited or not always up-to-date information, especially when comparing many models with similar specifications.
                    </p>
                    <div className="lastlonger-persona-lists">
                      <div className="lastlonger-persona-list-col">
                        <span className="lastlonger-list-label">⚠️ PAIN POINTS</span>
                        <ul>
                          <li>Lack of complete and always updated specification information.</li>
                          <li>No clear standards or references for determining trade-in prices.</li>
                        </ul>
                      </div>
                      <div className="lastlonger-persona-list-col">
                        <span className="lastlonger-list-label">🎯 GOALS</span>
                        <ul>
                          <li>To provide appropriate smartphone recommendations that meet customer needs.</li>
                          <li>To determine trade-in prices more clearly and consistently.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GOALS & INTENDED IMPACT (Figma Node 671:124) */}
        <section className="lastlonger-section lastlonger-goals-section">
          <div className="lastlonger-container lastlonger-two-col">
            <div className="lastlonger-col-left">
              <span className="lastlonger-section-tag">SOLUTION</span>
            </div>
            <div className="lastlonger-col-right">
              <h2 className="lastlonger-section-heading">Goals &amp; Intended Impact</h2>
              <hr className="lastlonger-divider-line" />
              <p className="lastlonger-body-text">
                Target for a pilot of 10,000 users and about 3,000 active users (30% adoption).
              </p>

              <div className="lastlonger-table-wrap">
                <table className="lastlonger-goals-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Baseline</th>
                      <th>Target</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="lastlonger-goal-name">Replace → repair</td>
                      <td className="lastlonger-baseline">36% replace</td>
                      <td className="lastlonger-target">30%</td>
                      <td className="lastlonger-impact-text">180 users switch</td>
                    </tr>
                    <tr>
                      <td className="lastlonger-goal-name">Idle devices at home</td>
                      <td className="lastlonger-baseline">45%</td>
                      <td className="lastlonger-target">38%</td>
                      <td className="lastlonger-impact-text">210 devices re-enter reuse/recycle</td>
                    </tr>
                    <tr>
                      <td className="lastlonger-goal-name">Formal e-waste channel</td>
                      <td className="lastlonger-baseline">20%</td>
                      <td className="lastlonger-target">25%</td>
                      <td className="lastlonger-impact-text">150 extra devices</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="lastlonger-quote-box">
                <p className="lastlonger-quote-text">
                  The impact also supports the national targets of 30% waste reduction and 70% waste handling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HOW MIGHT WE (Figma Node 674:313) */}
        <section className="lastlonger-section lastlonger-hmw-section">
          <div className="lastlonger-container lastlonger-two-col">
            <div className="lastlonger-col-left">
              <span className="lastlonger-section-tag">HOW MIGHT WE</span>
            </div>
            <div className="lastlonger-col-right">
              <div className="lastlonger-hmw-box">
                <p className="lastlonger-hmw-quote">
                  “How might we facilitate the release of old devices securely, turn maintenance into an enjoyable habit, and connect owners with trusted lifecycle partners?”
                </p>
                <span className="lastlonger-hmw-caption">
                  Companion insight: turn the impulse to replace into a proactive habit of caring for the device.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE L.O.O.P ECOSYSTEM (Figma Node 674:319) */}
        <section className="lastlonger-section lastlonger-loop-section">
          <div className="lastlonger-container lastlonger-two-col">
            <div className="lastlonger-col-left">
              <span className="lastlonger-section-tag">SOLUTION</span>
            </div>
            <div className="lastlonger-col-right">
              <h2 className="lastlonger-section-heading">The L.O.O.P ecosystem</h2>
              <hr className="lastlonger-divider-line" />

              <div className="lastlonger-loop-grid">
                {/* Card 1: L */}
                <div className="lastlonger-pillar-card">
                  <div className="lastlonger-pillar-badge">L</div>
                  <h3 className="lastlonger-pillar-title">Life Extension</h3>
                  <span className="lastlonger-pillar-subtitle">Extension of Life and Performance</span>
                  <div className="lastlonger-pillar-img-wrap">
                    <img 
                      src={loop1Img} 
                      alt="Life Extension mockup" 
                      className="lastlonger-pillar-mockup"
                    />
                  </div>
                  <p className="lastlonger-pillar-desc">
                    Through Daily Tune-Up, LastLonger helps users maintain device performance from the start to extend its lifespan.
                  </p>
                </div>

                {/* Card 2: O */}
                <div className="lastlonger-pillar-card">
                  <div className="lastlonger-pillar-badge">O</div>
                  <h3 className="lastlonger-pillar-title">Ownership Pride</h3>
                  <span className="lastlonger-pillar-subtitle">Pride of Ownership</span>
                  <div className="lastlonger-pillar-img-wrap">
                    <img 
                      src={loop2Img} 
                      alt="Ownership Pride mockup" 
                      className="lastlonger-pillar-mockup"
                    />
                  </div>
                  <p className="lastlonger-pillar-desc">
                    The Asset Valuation Dashboard and Eco-Flex Rewind impact elements help users see the value of their devices and the positive impact of longer usage.
                  </p>
                </div>

                {/* Card 3: O */}
                <div className="lastlonger-pillar-card">
                  <div className="lastlonger-pillar-badge">O</div>
                  <h3 className="lastlonger-pillar-title">Offboarding</h3>
                  <span className="lastlonger-pillar-subtitle">Safe Release</span>
                  <div className="lastlonger-pillar-img-wrap">
                    <img 
                      src={loop3Img} 
                      alt="Offboarding mockup" 
                      className="lastlonger-pillar-mockup"
                    />
                  </div>
                  <p className="lastlonger-pillar-desc">
                    The Secure-Wipe Checklist makes the device release process feel safer before servicing, trading in, or recycling.
                  </p>
                </div>

                {/* Card 4: P */}
                <div className="lastlonger-pillar-card">
                  <div className="lastlonger-pillar-badge">P</div>
                  <h3 className="lastlonger-pillar-title">Processing Transparency</h3>
                  <span className="lastlonger-pillar-subtitle">Transparent Tracking</span>
                  <div className="lastlonger-pillar-img-wrap">
                    <img 
                      src={loop4Img} 
                      alt="Processing Transparency mockup" 
                      className="lastlonger-pillar-mockup"
                    />
                  </div>
                  <p className="lastlonger-pillar-desc">
                    Tracking features and status updates provide clearer visibility during the processing of the device.
                  </p>
                </div>
              </div>

              <div className="lastlonger-quote-box" style={{ marginTop: '36px' }}>
                <p className="lastlonger-quote-text">
                  “The competitor matrix puts LastLonger as the only platform covering all eight capabilities: pickup, tracking, carbon report, privacy guide, maintenance, valuation, service and trade-in ecosystem, and social features.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PRODUCTS OF LASTLONGER (FEATURES 1-6) */}
        <section className="lastlonger-section lastlonger-features-section">
          <div className="lastlonger-container">
            <div className="lastlonger-features-top">
              <span className="lastlonger-section-tag">PRODUCTS OF LASTLONGER</span>
              <h2 className="lastlonger-section-heading" style={{ marginTop: '16px' }}>
                One app. Four moments. Every stage of a device's life, from the day it's bought to the day it's responsibly let go, finally connected.
              </h2>
            </div>

            <div className="lastlonger-features-list">
              {/* Feature 1 */}
              <div className="lastlonger-feature-item">
                <h3 className="lastlonger-feature-title">
                  DAILY TUNE-UP &amp; DIGITAL SWEEPER: KEEPING DEVICES ALIVE LONGER
                </h3>
                <p className="lastlonger-feature-desc">
                  Guided routines clear cache, manage passive apps, and flag oversized files. A daily streak turns care into a habit, so slowdown stops looking like a reason to buy a new phone.
                </p>
                <div className="lastlonger-feature-mockup-wrap">
                  <img 
                    src={feature1Img} 
                    alt="Daily Tune-Up and Digital Sweeper interface" 
                    className="lastlonger-feature-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="lastlonger-feature-item">
                <h3 className="lastlonger-feature-title">
                  DEVICE TRIAGE: REPAIR, TRADE-IN, OR RECYCLE?
                </h3>
                <p className="lastlonger-feature-desc">
                  Users answer a short quiz and run a condition check on buttons, screen, and software stability. The app then recommends the smartest next step using technical data and cost estimates, and points them to the right partner.
                </p>
                <div className="lastlonger-feature-mockup-wrap">
                  <img 
                    src={feature2Img} 
                    alt="Device Triage interface" 
                    className="lastlonger-feature-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="lastlonger-feature-item">
                <h3 className="lastlonger-feature-title">
                  ONE PLACE FOR REPAIR, TRADE-IN &amp; RECYCLE WITH SEAMLESS PICKUP
                </h3>
                <p className="lastlonger-feature-desc">
                  Verified technicians, trade-in partners, and certified recyclers sit in one flow with transparent price, time, and status. Pickup is free with no minimum weight, so even one old phone can enter the formal channel.
                </p>
                <div className="lastlonger-service-badges-row">
                  <span className="lastlonger-service-badge badge-green">🌿 Daur Ulang</span>
                  <span className="lastlonger-service-badge badge-purple">🔁 Trade-In / Tukar Tambah</span>
                  <span className="lastlonger-service-badge badge-teal">🛠️ Repair (Service)</span>
                </div>
                <div className="lastlonger-feature-mockup-wrap">
                  <img 
                    src={feature3Img} 
                    alt="One place for repair, trade-in and recycle interface" 
                    className="lastlonger-feature-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Feature 4: My Garage */}
              <div className="lastlonger-feature-item">
                <h3 className="lastlonger-feature-title">
                  MY GARAGE: DIGITAL ASSET DASHBOARD
                </h3>
                <p className="lastlonger-feature-desc">
                  Every device lives in one dashboard with battery health, storage, component condition, and depreciation value. A "Start Diagnosis" call-to-action shows how much value the device is losing, nudging users to act.
                </p>
                <div className="lastlonger-garage-points-grid">
                  <div className="lastlonger-garage-item">
                    <span className="lastlonger-garage-icon">📳</span>
                    <p>Pengguna dapat mendaftarkan seluruh perangkat yang mereka miliki dalam satu akun dan garasi LastLonger.</p>
                  </div>
                  <div className="lastlonger-garage-item">
                    <span className="lastlonger-garage-icon">🔋</span>
                    <p>Sistem melacak persentase <strong>Battery Health</strong> dan kapasitas penyimpanan yang tersisa untuk mencegah penurunan performa secara proaktif.</p>
                  </div>
                  <div className="lastlonger-garage-item">
                    <span className="lastlonger-garage-icon">📲</span>
                    <p>Menyajikan rangkuman akurat terkait kondisi komponen eksternal (layar, tombol) dan tingkat stabilitas software gawai saat ini.</p>
                  </div>
                  <div className="lastlonger-garage-item">
                    <span className="lastlonger-garage-icon">⚡</span>
                    <p>Tombol "Mulai Diagnosis" memvisualisasikan penyusutan nilai finansial (depresiasi) gawai saat ini, memicu pengguna untuk segera mengambil keputusan logis: perbaiki, tukar tambah, atau daur ulang.</p>
                  </div>
                </div>
                <div className="lastlonger-feature-mockup-wrap">
                  <img 
                    src={feature4Img} 
                    alt="My Garage Digital Asset Dashboard" 
                    className="lastlonger-feature-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Feature 5 */}
              <div className="lastlonger-feature-item">
                <h3 className="lastlonger-feature-title">
                  ECO-FLEX REWIND: IMPACT YOU CAN SHOW OFF
                </h3>
                <p className="lastlonger-feature-desc">
                  A visual report shows device durability and total carbon saved. Pride moves from "newest phone" to "biggest footprint saved."
                </p>
                <div className="lastlonger-feature-mockup-wrap">
                  <img 
                    src={feature5Img} 
                    alt="Eco-Flex Rewind Impact Report" 
                    className="lastlonger-feature-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Feature 6 */}
              <div className="lastlonger-feature-item">
                <h3 className="lastlonger-feature-title">
                  END-TO-END DEVICE TRACKING: PROOF, NOT PROMISES
                </h3>
                <p className="lastlonger-feature-desc">
                  After pickup, users follow their device through dismantling and material extraction, with impact lines like "X grams of copper recovered." They see their device was recycled properly, not dumped in a landfill.
                </p>
                <div className="lastlonger-feature-mockup-wrap">
                  <img 
                    src={feature6Img} 
                    alt="End-to-End Device Tracking interface" 
                    className="lastlonger-feature-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONCLUSION SECTION */}
        <section className="lastlonger-section lastlonger-conclusion-section">
          <div className="lastlonger-container lastlonger-two-col">
            <div className="lastlonger-col-left">
              <span className="lastlonger-section-tag">CONCLUSION</span>
            </div>
            <div className="lastlonger-col-right">
              <p className="lastlonger-body-text">
                We treat the e-waste emergency as a habit problem, not just a recycling problem. LastLonger turns the impulse to upgrade into the habit of saving carbon.
                <br /><br />
                Here is the future we aspire to build with LastLonger:
              </p>
              <hr className="lastlonger-divider-line" />

              <div className="lastlonger-conclusion-mockup-wrap">
                <img 
                  src={conclusionImg} 
                  alt="LastLonger conclusion vision mockup" 
                  className="lastlonger-conclusion-img"
                />
              </div>

              <div className="lastlonger-quote-box" style={{ textAlign: 'center', marginTop: '16px' }}>
                <p className="lastlonger-quote-text" style={{ fontSize: '26px' }}>
                  “Make it last longer. Close the loop.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. DISCOVER MORE PROJECTS */}
        <section className="lastlonger-section lastlonger-discover-section">
          <div className="lastlonger-container">
            <h2 className="lastlonger-discover-heading">DISCOVER MORE PROJECTS</h2>

            <div className="lastlonger-discover-grid">
              {/* Card 1: Lumbox */}
              <article className="lastlonger-discover-card" onClick={handleOpenLumbox}>
                <div className="lastlonger-discover-img-wrap">
                  <img 
                    src={projectLumbox} 
                    alt="LUMBOX project preview" 
                    className="lastlonger-discover-img" 
                  />
                </div>
                <div className="lastlonger-discover-info">
                  <span className="lastlonger-discover-cat">Project Management / UX Research</span>
                  <h3 className="lastlonger-discover-title">LUMBOX: B2B Platform for Indonesia’s Agricultural Supply Chain</h3>
                  <p className="lastlonger-discover-desc">
                    Designing an integrated platform for aggregators, smallholder farmers, buyers, and ID FOOD's staff and executives, connecting every layer of Indonesia's agricultural supply chain.
                  </p>
                </div>
              </article>

              {/* Card 2: Korpus */}
              <article className="lastlonger-discover-card" onClick={handleOpenKorpus}>
                <div className="lastlonger-discover-img-wrap">
                  <img 
                    src={projectKorpus} 
                    alt="KORPUS project preview" 
                    className="lastlonger-discover-img" 
                  />
                </div>
                <div className="lastlonger-discover-info">
                  <span className="lastlonger-discover-cat">Product Management / UX Research</span>
                  <h3 className="lastlonger-discover-title">KORPUS: Fullstack Digital Platform to Activate Indonesia’s 83.000+ Village Cooperatives</h3>
                  <p className="lastlonger-discover-desc">
                    A frictionless onboarding and digital wallet system to scale cooperative participation nationwide for Hackathon Digital Cooperatives Expo 2026.
                  </p>
                </div>
              </article>

              {/* Card 3: Seizure */}
              <article className="lastlonger-discover-card" onClick={handleOpenEEG}>
                <div className="lastlonger-discover-img-wrap">
                  <img 
                    src={projectEeg} 
                    alt="EEG Seizure detection research preview" 
                    className="lastlonger-discover-img" 
                  />
                </div>
                <div className="lastlonger-discover-info">
                  <span className="lastlonger-discover-cat">Research / Machine Learning</span>
                  <h3 className="lastlonger-discover-title">Evaluating the Robustness of Classical Machine Learning in Cross-Subject EEG Seizure Detection</h3>
                  <p className="lastlonger-discover-desc">
                    A classical ML pipeline trained on 3.5M+ EEG segments to flag seizure risk and accelerate clinical triage, presented at BIOXPLORE 2026. IEEE &amp; Scopus-indexed.
                  </p>
                </div>
              </article>
            </div>

            <div className="lastlonger-cta-row">
              <button 
                type="button" 
                className="lastlonger-gold-btn" 
                onClick={handleGoToExperiences}
              >
                View My Experiences
              </button>
            </div>
          </div>
        </section>

        {/* 11. FOOTER (Shared component) */}
        <Footer />
      </main>
    </div>
  );
}
