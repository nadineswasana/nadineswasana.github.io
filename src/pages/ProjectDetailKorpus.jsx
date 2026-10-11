import { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import './ProjectDetailKorpus.css';

// Korpus Mockup Assets
import heroDevicesImg from '../assets/project-detail/korpus/korpus-hero-devices.png';
import feature1Img from '../assets/project-detail/korpus/korpus-feature-1.png';
import feature2Img from '../assets/project-detail/korpus/korpus-feature-2.png';
import feature3Img from '../assets/project-detail/korpus/korpus-feature-3.png';
import feature4Img from '../assets/project-detail/korpus/korpus-feature-4.png';
import feature5Img from '../assets/project-detail/korpus/korpus-feature-5.png';
import expertAvatarImg from '../assets/project-detail/korpus/korpus-expert-avatar.png';

// Related Projects Assets
import projectLastLonger from '../assets/projects/project-lastlonger.png';
import projectLumbox from '../assets/projects/project-lumbox.png';
import projectEeg from '../assets/projects/project-eeg.png';

export default function ProjectDetailKorpus({ onBack, onNavigateExperience, onNavigateProject }) {
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

  const handleOpenLastLonger = () => {
    if (onNavigateProject) {
      onNavigateProject('lastlonger');
    } else {
      window.location.hash = '#/project/lastlonger';
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
    <div className="korpus-detail-page">
      {/* 1. STICKY HEADER (Matches Figma Node 688:467 & Design System) */}
      <header className="korpus-header">
        <div className="korpus-header-inner">
          <button 
            type="button" 
            className="korpus-brand-btn" 
            onClick={handleClose}
            aria-label="Back to home"
          >
            Nadine Swasana
          </button>
          <button 
            type="button" 
            className="korpus-close-btn" 
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

      <main className="korpus-main-content">
        {/* 2. MAIN / HERO (Figma Node 688:165) */}
        <section className="korpus-hero-section">
          <div className="korpus-container">
            <div className="korpus-hero-intro">
              <h1 className="korpus-hero-title">
                <strong>KORPUS</strong>: Fullstack Digital Platform to Activate Indonesia's 83,000+ Village Cooperatives
              </h1>
              <p className="korpus-hero-description">
                A frictionless onboarding and digital wallet system that turns empty cooperative buildings into working village economies.
              </p>
            </div>

            <div className="korpus-hero-mockup-wrapper">
              <img 
                src={heroDevicesImg} 
                alt="KORPUS device mockup preview showing web dashboard and mobile app" 
                className="korpus-hero-mockup-img"
              />
            </div>

            {/* Metadata Grid (Figma Node 688:169) */}
            <div className="korpus-meta-grid">
              <div className="korpus-meta-card">
                <span className="korpus-meta-label">TYPE</span>
                <p className="korpus-meta-value">
                  Hackathon by the Ministry of Cooperatives, Digital Cooperatives Expo 2026
                </p>
              </div>
              <div className="korpus-meta-card">
                <span className="korpus-meta-label">THE TEAM</span>
                <p className="korpus-meta-value">
                  Filbert Christian Winch<br />(Full-Stack / ML / DevOps)<br />Abdul Aziz Zaki Hidayat<br />(Frontend Developer / UI Engineer)
                </p>
              </div>
              <div className="korpus-meta-card">
                <span className="korpus-meta-label">ROLE</span>
                <p className="korpus-meta-value">Product Manager / UX Researcher</p>
              </div>
              <div className="korpus-meta-card">
                <span className="korpus-meta-label">TIME</span>
                <p className="korpus-meta-value">July 2026</p>
              </div>
              <div className="korpus-meta-card">
                <span className="korpus-meta-label">RESULT</span>
                <p className="korpus-meta-value">Finalist</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OVERVIEW (Figma Node 688:188) */}
        <section className="korpus-section korpus-overview-section">
          <div className="korpus-container korpus-two-col">
            <div className="korpus-col-left">
              <span className="korpus-section-tag">OVERVIEW</span>
            </div>
            <div className="korpus-col-right">
              <h2 className="korpus-section-heading">
                Indonesia has built more than 83,000 village cooperatives (KDKMP), but the buildings alone do not create a cooperative. People do. KORPUS is our hackathon submission, built around one question: how do we get villagers to join, trust, and spend inside their own cooperative?
              </h2>
              <hr className="korpus-divider-line" />

              <div className="korpus-card-pair">
                <div className="korpus-surface-card">
                  <div className="korpus-card-header">
                    <span className="korpus-card-icon" role="img" aria-label="sad face">😢</span>
                    <span className="korpus-card-title">THE PROBLEM</span>
                  </div>
                  <p className="korpus-card-body">
                    Only about 2 million of roughly 270 million villagers are active members, an average of 29 per cooperative. Of 83,362 legal cooperatives, just 1,061 actually operate.
                  </p>
                </div>

                <div className="korpus-surface-card">
                  <div className="korpus-card-header">
                    <span className="korpus-card-icon" role="img" aria-label="pin">📌</span>
                    <span className="korpus-card-title">THE SOLUTION</span>
                  </div>
                  <p className="korpus-card-body">
                    A software layer with three parts: instant onboarding without NIK paperwork, a digital wallet (CooPay) that keeps money circulating in the village, and a digital cashier with transparent profit sharing (SHU).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROBLEM & RESEARCH INSIGHTS (Figma Node 688:207 & 690:484) */}
        <section className="korpus-section korpus-problem-section">
          <div className="korpus-container korpus-two-col">
            <div className="korpus-col-left">
              <span className="korpus-section-tag">PROBLEM</span>
            </div>
            <div className="korpus-col-right">
              <h2 className="korpus-section-heading">
                Only about 2 million of roughly 270 million villagers are active members, an average of 29 per cooperative. Of 83,362 legal cooperatives, just 1,061 actually operate.
              </h2>
              <hr className="korpus-divider-line" />

              <div className="korpus-metrics-grid">
                <div className="korpus-metric-card">
                  <div className="korpus-metric-num">&lt;1%</div>
                  <p className="korpus-metric-desc">
                    village participation, with about 2M active members out of roughly 270M villagers.
                  </p>
                </div>
                <div className="korpus-metric-card">
                  <div className="korpus-metric-num">29</div>
                  <p className="korpus-metric-desc">
                    members per cooperative on average.
                  </p>
                </div>
                <div className="korpus-metric-card">
                  <div className="korpus-metric-num">1.2%</div>
                  <p className="korpus-metric-desc">
                    operating cooperatives, only 1,061 of 83,362.
                  </p>
                </div>
                <div className="korpus-metric-card">
                  <div className="korpus-metric-num">82%</div>
                  <p className="korpus-metric-desc">
                    rural residents without formal banking access.
                  </p>
                </div>
              </div>

              <p className="korpus-body-text">
                The government wants 40,000 cooperatives running in 2026, and reality is at 2.65% of that target. Without a way to attract members, the national project risks becoming "tens of thousands of empty buildings."
              </p>

              {/* Highlight Quote Box */}
              <div className="korpus-quote-box">
                <p className="korpus-quote-text">
                  “A cooperative is driven by people, not capital or buildings. The best infrastructure still does nothing if nobody joins.”
                </p>
              </div>

              {/* Research Insights Sub-Section */}
              <div className="korpus-research-block">
                <h3 className="korpus-research-heading">Research Insights</h3>
                <hr className="korpus-divider-line" />
                <p className="korpus-body-text">
                  We interviewed people from top to bottom of the system:
                </p>

                <div className="korpus-insights-grid">
                  {/* Expert Card */}
                  <div className="korpus-insight-card korpus-insight-card--expert">
                    <p className="korpus-insight-quote">
                      “The KDKMP operations are only considered to be running when there are goods being sold (there is buying/selling or saving/borrowing activity). The biggest obstacles are literacy and bureaucratic verification. The villagers are still trapped in an instant 'money mindset' and do not understand the concept of SHU.”
                    </p>
                    <div className="korpus-insight-author">
                      <img 
                        src={expertAvatarImg} 
                        alt="Shely Nurfadya Iskandar" 
                        className="korpus-author-avatar"
                      />
                      <div className="korpus-author-meta">
                        <strong className="korpus-author-name">Shely Nurfadya Iskandar</strong>
                        <span className="korpus-author-role">Digitalization Expert for Simkopdes</span>
                      </div>
                    </div>
                  </div>

                  {/* Stakeholder Quotes Stack */}
                  <div className="korpus-stakeholders-stack">
                    <div className="korpus-insight-card">
                      <p className="korpus-insight-quote">
                        “I am not interested in joining the cooperative because the registration process is too complicated, asking for various data, and I don't understand how it works. As for saving, I have been saving little by little for decades to go on pilgrimage, but I keep it myself.”
                      </p>
                      <div className="korpus-author-meta">
                        <strong className="korpus-author-name">Sutrisno</strong>
                        <span className="korpus-author-role">Farmer</span>
                      </div>
                    </div>

                    <div className="korpus-insight-card">
                      <p className="korpus-insight-quote">
                        “Because the village cooperative is not yet active, farmers usually borrow initial capital from me, and later when they harvest, I buy their rice. If not, their economic cycle dies, especially if market prices suddenly drop and a lot of rice is left unsold.”
                      </p>
                      <div className="korpus-author-meta">
                        <strong className="korpus-author-name">Budiyono</strong>
                        <span className="korpus-author-role">Rice Trader</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GOALS & INTENDED IMPACT (Figma Node 688:239) */}
        <section className="korpus-section korpus-goals-section">
          <div className="korpus-container korpus-two-col">
            <div className="korpus-col-left">
              <span className="korpus-section-tag">
                GOALS &<br />INTENDED<br />IMPACT
              </span>
            </div>
            <div className="korpus-col-right">
              <h2 className="korpus-section-heading">
                Moving cooperatives from L0 (paper and memory) to L1 (digitally recorded) to L2 (connected, with digital payments).
              </h2>
              <hr className="korpus-divider-line" />

              {/* Goals Table */}
              <div className="korpus-table-wrap">
                <table className="korpus-goals-table">
                  <thead>
                    <tr>
                      <th>Goal</th>
                      <th>Baseline</th>
                      <th>Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="korpus-goal-name">Village participation in cooperatives</td>
                      <td className="korpus-baseline">2 million</td>
                      <td className="korpus-target">+30% (about 81 million)</td>
                    </tr>
                    <tr>
                      <td className="korpus-goal-name">Operating cooperatives (2026)</td>
                      <td className="korpus-baseline">1,061</td>
                      <td className="korpus-target">40,000</td>
                    </tr>
                    <tr>
                      <td className="korpus-goal-name">Retention</td>
                      <td className="korpus-baseline">None</td>
                      <td className="korpus-target">10% of the membership fee returned as cashback</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HOW MIGHT WE (Figma Node 688:280) */}
        <section className="korpus-section korpus-hmw-section">
          <div className="korpus-container korpus-two-col">
            <div className="korpus-col-left">
              <span className="korpus-section-tag">HOW MIGHT WE</span>
            </div>
            <div className="korpus-col-right">
              <div className="korpus-hmw-box">
                <blockquote className="korpus-hmw-quote">
                  “How might we design a frictionless cooperative ecosystem that breaks registration bureaucracy, motivates villagers to join, and equips managers with a digital cashier so money keeps circulating inside the village?”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SOLUTION: THE KEY FEATURES (Figma Node 688:285) */}
        <section className="korpus-section korpus-solution-section">
          <div className="korpus-container">
            <div className="korpus-two-col korpus-solution-top">
              <div className="korpus-col-left">
                <span className="korpus-section-tag">SOLUTION</span>
              </div>
              <div className="korpus-col-right">
                <h2 className="korpus-section-heading">The Key Features</h2>
              </div>
            </div>

            <div className="korpus-features-list">
              {/* Feature 1 */}
              <div className="korpus-feature-item">
                <h3 className="korpus-feature-title">
                  1. Frictionless onboarding with face and iris ID
                </h3>
                <p className="korpus-feature-desc">
                  Registration works instantly without requiring NIK. This removes the first barrier that stopped Udin.
                </p>
                <div className="korpus-feature-mockup-wrap">
                  <img 
                    src={feature1Img} 
                    alt="Frictionless onboarding with face and iris ID mockup" 
                    className="korpus-feature-img korpus-feature-img--1-phone"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="korpus-feature-item">
                <h3 className="korpus-feature-title">
                  2. Membership fee that becomes savings (Tabungan Impian)
                </h3>
                <p className="korpus-feature-desc">
                  The basic membership fee (Simpanan Pokok) is not lost. 5% goes back as starting balance for a long-term "Dream Savings" goal, such as the Hajj or a child's education, and 5% goes to the CooPay wallet to encourage a first transaction. A progress bar moves with every deposit.
                </p>
                <div className="korpus-feature-mockup-wrap">
                  <img 
                    src={feature2Img} 
                    alt="Membership fee that becomes savings (Tabungan Impian) mockup" 
                    className="korpus-feature-img korpus-feature-img--2-phones"
                  />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="korpus-feature-item">
                <h3 className="korpus-feature-title">
                  3. CooPay wallet + QRIS
                </h3>
                <p className="korpus-feature-desc">
                  A cashless wallet for daily use. Members pay savings or shop at cooperative units with one QRIS scan. Spending earns points toward cashback and shopping vouchers, keeping money in the village loop.
                </p>
                <div className="korpus-feature-mockup-wrap">
                  <img 
                    src={feature3Img} 
                    alt="CooPay wallet with QRIS scan and cashback features mockup" 
                    className="korpus-feature-img korpus-feature-img--4-phones"
                  />
                </div>
              </div>

              {/* Feature 4 */}
              <div className="korpus-feature-item">
                <h3 className="korpus-feature-title">
                  4. Digital POS and proactive SHU
                </h3>
                <p className="korpus-feature-desc">
                  Cashiers record top-ups, savings, and sales automatically. A fund-visibility dashboard in the member app lets villagers see where money goes. Time-limited SHU vouchers keep stock on the shelf moving.
                </p>
                <div className="korpus-feature-mockup-wrap">
                  <img 
                    src={feature4Img} 
                    alt="Digital POS and proactive SHU fund-visibility dashboard mockup" 
                    className="korpus-feature-img korpus-feature-img--pos"
                  />
                </div>
              </div>

              {/* Feature 5 */}
              <div className="korpus-feature-item">
                <h3 className="korpus-feature-title">
                  5. System architecture in three phases
                </h3>
                <p className="korpus-feature-desc">
                  <strong>Phase 1</strong> is verification and a dashboard. <strong>Phase 2</strong> is CooPay payments and savings tracking. <strong>Phase 3</strong> is the POS with inventory and transaction history.
                </p>
                <div className="korpus-feature-mockup-wrap">
                  <img 
                    src={feature5Img} 
                    alt="System architecture in three phases workflow diagram" 
                    className="korpus-feature-img korpus-feature-img--arch"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONCLUSION (Figma Node 688:417) */}
        <section className="korpus-section korpus-conclusion-section">
          <div className="korpus-container korpus-two-col">
            <div className="korpus-col-left">
              <span className="korpus-section-tag">CONCLUSION</span>
            </div>
            <div className="korpus-col-right">
              <h2 className="korpus-section-heading">
                KORPUS transforms village cooperatives into living digital ecosystems where every citizen participates, transacts with confidence, and shares the economic surplus.
              </h2>
              <hr className="korpus-divider-line" />

              <div className="korpus-pillar-cards">
                <div className="korpus-pillar-card">
                  <span className="korpus-pillar-emoji" role="img" aria-label="touch id">⚡</span>
                  <div className="korpus-pillar-content">
                    <strong className="korpus-pillar-title">Frictionless Access</strong>
                    <p className="korpus-pillar-desc">Zero-paperwork biometric onboarding for every villager.</p>
                  </div>
                </div>

                <div className="korpus-pillar-card">
                  <span className="korpus-pillar-emoji" role="img" aria-label="wallet loop">🔄</span>
                  <div className="korpus-pillar-content">
                    <strong className="korpus-pillar-title">Local Circulation</strong>
                    <p className="korpus-pillar-desc">CooPay &amp; QRIS keeping capital circulating inside the village.</p>
                  </div>
                </div>

                <div className="korpus-pillar-card">
                  <span className="korpus-pillar-emoji" role="img" aria-label="shield trust">🤝</span>
                  <div className="korpus-pillar-content">
                    <strong className="korpus-pillar-title">Transparent Equity</strong>
                    <p className="korpus-pillar-desc">Digital POS and proactive SHU vouchers for collective trust.</p>
                  </div>
                </div>
              </div>

              <p className="korpus-conclusion-tagline">
                “A cooperative driven by people, powered by trust.”
              </p>
            </div>
          </div>
        </section>

        {/* 9. DISCOVER MORE PROJECTS (Figma Node 688:434) */}
        <section className="korpus-section korpus-discover-section">
          <div className="korpus-container">
            <h2 className="korpus-discover-heading">DISCOVER MORE PROJECTS</h2>

            <div className="korpus-discover-grid">
              {/* Card 1: LastLonger */}
              <article className="korpus-discover-card" onClick={handleOpenLastLonger}>
                <div className="korpus-discover-img-wrap">
                  <img 
                    src={projectLastLonger} 
                    alt="LastLonger project preview" 
                    className="korpus-discover-img" 
                  />
                </div>
                <div className="korpus-discover-info">
                  <span className="korpus-discover-cat">Project Management / UX Research</span>
                  <h3 className="korpus-discover-title">LastLonger: End-to-End Device Lifecycle Management App</h3>
                  <p className="korpus-discover-desc">
                    An app driving sustainable solutions and a circular economy through responsible device lifecycles, reducing e-waste through responsible reuse and resale pathways.
                  </p>
                </div>
              </article>

              {/* Card 2: Lumbox */}
              <article className="korpus-discover-card" onClick={handleOpenLumbox}>
                <div className="korpus-discover-img-wrap">
                  <img 
                    src={projectLumbox} 
                    alt="LUMBOX project preview" 
                    className="korpus-discover-img" 
                  />
                </div>
                <div className="korpus-discover-info">
                  <span className="korpus-discover-cat">Project Management / UX Research</span>
                  <h3 className="korpus-discover-title">LUMBOX: B2B Platform for Indonesia’s Agricultural Supply Chain</h3>
                  <p className="korpus-discover-desc">
                    Designing an integrated platform for aggregators, smallholder farmers, buyers, and ID FOOD's staff and executives, connecting every layer of Indonesia's agricultural supply chain.
                  </p>
                </div>
              </article>

              {/* Card 3: Seizure */}
              <article className="korpus-discover-card" onClick={handleOpenEEG}>
                <div className="korpus-discover-img-wrap">
                  <img 
                    src={projectEeg} 
                    alt="EEG Seizure detection research preview" 
                    className="korpus-discover-img" 
                  />
                </div>
                <div className="korpus-discover-info">
                  <span className="korpus-discover-cat">Research / Machine Learning</span>
                  <h3 className="korpus-discover-title">Evaluating the Robustness of Classical Machine Learning in Cross-Subject EEG Seizure Detection</h3>
                  <p className="korpus-discover-desc">
                    A classical ML pipeline trained on 3.5M+ EEG segments to flag seizure risk and accelerate clinical triage, presented at BIOXPLORE 2026. IEEE &amp; Scopus-indexed.
                  </p>
                </div>
              </article>
            </div>

            <div className="korpus-cta-row">
              <button 
                type="button" 
                className="korpus-gold-btn" 
                onClick={handleGoToExperiences}
              >
                View My Experiences
              </button>
            </div>
          </div>
        </section>

        {/* 10. FOOTER (matches shared component & Figma Node 688:457) */}
        <Footer />
      </main>
    </div>
  );
}
