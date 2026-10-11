import { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import './ProjectDetailLumbox.css';

// Lumbox Mockup Assets
import heroDevicesImg from '../assets/project-detail/lumbox/lumbox-hero-devices.png';
import solutionOverviewImg from '../assets/project-detail/lumbox/lumbox-solution-overview.png';
import productsSurfacesImg from '../assets/project-detail/lumbox/lumbox-products-surfaces.png';
import feature1Img from '../assets/project-detail/lumbox/lumbox-feature-1-connect.png';
import feature2Img from '../assets/project-detail/lumbox/lumbox-feature-2-integrity.png';
import feature3Img from '../assets/project-detail/lumbox/lumbox-feature-3-lumbung.png';
import feature4Img from '../assets/project-detail/lumbox/lumbox-feature-4-price-forecast.png';
import feature5Img from '../assets/project-detail/lumbox/lumbox-feature-5-buyer-match.png';
import feature6Img from '../assets/project-detail/lumbox/lumbox-feature-6-cold-chain.png';
import feature7Img from '../assets/project-detail/lumbox/lumbox-feature-7-route.png';
import feature8Img from '../assets/project-detail/lumbox/lumbox-feature-8-command-center.png';

// Related Project Assets
import projectLastLonger from '../assets/projects/project-lastlonger.png';
import projectKorpus from '../assets/projects/project-korpus.png';
import projectEeg from '../assets/projects/project-eeg.png';

export default function ProjectDetailLumbox({ onBack, onNavigateExperience, onNavigateProject }) {
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
    <div className="lumbox-detail-page">
      {/* 1. STICKY HEADER (Matches Home Navbar Branding & Figma Node 383:1317) */}
      <header className="lumbox-header">
        <div className="lumbox-header-inner">
          <button 
            type="button" 
            className="lumbox-brand-btn" 
            onClick={handleClose}
            aria-label="Back to home"
          >
            Nadine Swasana
          </button>
          <button 
            type="button" 
            className="lumbox-close-btn" 
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

      <main className="lumbox-main-content">
        {/* 2. MAIN / HERO (Figma Node 383:1300) */}
        <section className="lumbox-hero-section">
          <div className="lumbox-container">
            <div className="lumbox-hero-intro">
              <h1 className="lumbox-hero-title">
                <strong>LUMBOX</strong>: B2B Platform for Indonesia’s Agricultural Supply Chain
              </h1>
              <p className="lumbox-hero-description">
                Designing an integrated platform for aggregators, smallholder farmers, buyers, and ID FOOD's staff and executives, connecting every layer of Indonesia's agricultural supply chain in one system.
              </p>
            </div>

            <div className="lumbox-hero-mockup-wrapper">
              <img 
                src={heroDevicesImg} 
                alt="LUMBOX devices mockup showing mobile app and desktop platform" 
                className="lumbox-hero-mockup-img"
              />
            </div>

            {/* Metadata Grid (Figma Node 437:2445) */}
            <div className="lumbox-meta-grid">
              <div className="lumbox-meta-card">
                <span className="lumbox-meta-label">TYPE</span>
                <p className="lumbox-meta-value">
                  Case Submission for Prototype Design Competition (International Level)
                </p>
              </div>
              <div className="lumbox-meta-card">
                <span className="lumbox-meta-label">THE TEAM</span>
                <p className="lumbox-meta-value">
                  Nadya Euvania<br />(UX Researcher)<br />Abdul Aziz Zaki Hidayat<br />(UI/UX Designer)
                </p>
              </div>
              <div className="lumbox-meta-card">
                <span className="lumbox-meta-label">ROLE</span>
                <p className="lumbox-meta-value">Project Manager</p>
              </div>
              <div className="lumbox-meta-card">
                <span className="lumbox-meta-label">TIME</span>
                <p className="lumbox-meta-value">June 2026</p>
              </div>
              <div className="lumbox-meta-card">
                <span className="lumbox-meta-label">RESULT</span>
                <p className="lumbox-meta-value">
                  6th Place,<br />Top 10 Global<br />(10 countries)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OVERVIEW (Figma Node 447:2478) */}
        <section className="lumbox-section lumbox-overview-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">OVERVIEW</span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                Every year, Indonesia loses enough food to feed <strong>125 million people</strong>, while farmers capture only a fraction of what it's worth.
              </h2>
              <hr className="lumbox-divider-line" />
              <p className="lumbox-body-text">
                Lumbox is our submission for <strong>Proto-A-Thon International Design Competition 2026</strong>, developed for a case study in collaboration with <strong>ID FOOD</strong>, Indonesia's state-owned food holding company. Here's the problem we uncovered, and the system we designed to solve it.
              </p>

              <div className="lumbox-card-pair">
                <div className="lumbox-surface-card">
                  <div className="lumbox-card-header">
                    <span className="lumbox-card-icon" role="img" aria-label="sad face">😢</span>
                    <span className="lumbox-card-title">THE PROBLEM</span>
                  </div>
                  <p className="lumbox-card-body">
                    Indonesia's food supply chain loses <strong>IDR 551 trillion</strong> annually (<strong>4–5% of GDP</strong>) to inefficiency. <strong>Prices markup 7–10x</strong> from farmer to consumer, yet <strong>farmers capture just 15–20%</strong> of that value, leaving 48 million smallholder farmers excluded from formal markets and fair pricing.
                  </p>
                </div>

                <div className="lumbox-surface-card">
                  <div className="lumbox-card-header">
                    <span className="lumbox-card-icon" role="img" aria-label="pin">📌</span>
                    <span className="lumbox-card-title">THE SOLUTION</span>
                  </div>
                  <p className="lumbox-card-body">
                    A platform that formalizes, not eliminates, the informal actors already holding the chain together (<em>tengkulak</em>). Connecting 500,000+ aggregators and 48 million smallholder farmers to verified B2B buyers, tailored across every level of the organization, from field collectors to ID FOOD's staff and executives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROBLEM (Figma Node 450:2530) */}
        <section className="lumbox-section lumbox-problem-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">PROBLEM</span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                To understand why the system was breaking, we started by mapping where the money and the food were actually going.
              </h2>
              <hr className="lumbox-divider-line" />

              <div className="lumbox-metrics-grid">
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">IDR 551 trilion</div>
                  <p className="lumbox-metric-desc">
                    Lost annually 4–5% of GDP, exceeding the entire Ministry of Agriculture budget.
                  </p>
                </div>
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">3-5 days</div>
                  <p className="lumbox-metric-desc">
                    Average distribution time for fresh produce, against a 1–3 day shelf life.
                  </p>
                </div>
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">7-10x</div>
                  <p className="lumbox-metric-desc">
                    Price markup from farmer to consumer while farmers capture only 15–20%.
                  </p>
                </div>
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">48 million</div>
                  <p className="lumbox-metric-desc">
                    Smallholder farmers still excluded from formal markets and digital systems.
                  </p>
                </div>
              </div>

              <p className="lumbox-body-text lumbox-summary-callout">
                The crisis is not a lack of harvest, capital, or ambition, it is the absence of a unifying layer that connects what already exists
              </p>
            </div>
          </div>
        </section>

        {/* 5. GOALS & INTENDED IMPACT (Figma Node 458:3186) */}
        <section className="lumbox-section lumbox-goals-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">
                GOALS &<br />INTENDED<br />IMPACT
              </span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                The future of Indonesia’s food supply chain is not built by removing intermediaries entirely, but by formalizing and orchestrating their essential functions into a transparent, tech-enabled ecosystem
              </h2>
              <hr className="lumbox-divider-line" />
              <p className="lumbox-body-text">
                Here’s what we’re committing to build:
              </p>

              <div className="lumbox-impact-grid">
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Food Waste</span>
                  <div className="lumbox-impact-value"><strong>30-40%</strong> ➡️ <strong>26%</strong></div>
                </div>
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Farmer Price Share</span>
                  <div className="lumbox-impact-value"><strong>15-20%</strong> ➡️ <strong>22%</strong></div>
                </div>
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Supply Chain Layers</span>
                  <div className="lumbox-impact-value"><strong>7-10</strong> ➡️ <strong>4-6</strong></div>
                </div>
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Farmers Reached in Pilot</span>
                  <div className="lumbox-impact-value lumbox-impact-highlight">50.000 - 100.000</div>
                </div>
              </div>

              <p className="lumbox-body-text lumbox-summary-callout">
                Rather than disrupting the actors already holding this chain together (informal aggregators/<em>tengkulak</em>), we set out to formalize and orchestrate them, building a system where every role becomes more valuable, not obsolete.
              </p>
            </div>
          </div>
        </section>

        {/* 6. HOW MIGHT WE (Figma Node 458:3327) */}
        <section className="lumbox-section lumbox-hmw-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">HOW MIGHT WE</span>
            </div>
            <div className="lumbox-col-right">
              <p className="lumbox-body-text lumbox-hmw-intro">
                After interviewing farmers and middlemen across the supply chain and analyzing where the system breaks down, we distilled everything into one core question:
              </p>
              <div className="lumbox-hmw-box">
                <blockquote className="lumbox-hmw-quote">
                  “How might we create a more transparent, connected, and efficient food supply chain ecosystem that helps farmers, middlemen, and businesses access fair pricing, smarter distribution, reliable logistics, and data-driven decision making while reducing food waste and market uncertainty?”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SOLUTION (Figma Node 458:3349) */}
        <section className="lumbox-section lumbox-solution-section">
          <div className="lumbox-container">
            <div className="lumbox-two-col lumbox-solution-top">
              <div className="lumbox-col-left">
                <span className="lumbox-section-tag">SOLUTION</span>
              </div>
              <div className="lumbox-col-right">
                <p className="lumbox-body-text">
                  With that question in mind, we looked at why past agritech solutions had failed and realized most of them tried to eliminate the very actors, like <em>tengkulak</em> (middlemen), who were quietly holding the chain together. So instead of removing them, we designed a system to formalize what they already do.
                </p>
              </div>
            </div>

            <div className="lumbox-solution-hero-img-wrap">
              <img 
                src={solutionOverviewImg} 
                alt="Lumbox complete ecosystem solution overview" 
                className="lumbox-solution-hero-img"
              />
            </div>

            <div className="lumbox-products-header">
              <span className="lumbox-products-tag">PRODUCTS OF LUMBOX</span>
              <h2 className="lumbox-products-title">
                Three surfaces. One ecosystem. Every actor in chain, from the farmer who grows it, to the collector who moves it, to the business that needs it, finally connected
              </h2>
            </div>

            <div className="lumbox-products-mockup-wrap">
              <img 
                src={productsSurfacesImg} 
                alt="Products of Lumbox: Three surfaces (Lumbox Connect WhatsApp bot, Lumbox for Business Desktop Web, and Lumbox Mobile App)" 
                className="lumbox-products-mockup-img"
              />
            </div>
          </div>
        </section>

        {/* 8. FEATURES (Figma Node 476:3450) */}
        <section className="lumbox-section lumbox-features-section">
          <div className="lumbox-container lumbox-features-container">
            {/* Feature 1 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                TRANSPARENT FARM PRODUCTS COLLECTION &amp; CONNECTIVITY THROUGH LUMBOX CONNECT
              </h3>
              <p className="lumbox-feature-desc">
                The collector negotiates with the farmer on-site and inputs the transaction details into the app: Farmer’s Name/NIK, Commodity, Volume, Agreed Price/kg, and Payment Method (Cash or Cashless via Bank Account). To finalize the purchase, the collector must trigger an automated summary sent directly to the farmer’s WhatsApp/SMS. This forces a transparent, honest ledger where the offered price is benchmarked against real-time market data.
              </p>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature1Img} 
                  alt="Transparent farm products collection and connectivity mockup" 
                  className="lumbox-feature-img lumbox-feature-img--wide"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                INTEGRITY TRAIL FOR BUYER’S INSURANCE CLAIM
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature2Img} 
                  alt="Integrity trail for buyer's insurance claim mockup" 
                  className="lumbox-feature-img lumbox-feature-img--2-phones"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                SMART LUMBUNG: DIGITAL INVENTORY DASHBOARD
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature3Img} 
                  alt="Smart Lumbung digital inventory dashboard mockup" 
                  className="lumbox-feature-img lumbox-feature-img--3-phones"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                NATIONAL MARKET PRICE FORECASTING
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature4Img} 
                  alt="National market price forecasting mockup" 
                  className="lumbox-feature-img lumbox-feature-img--3-phones"
                />
              </div>
            </div>

            {/* Feature 5 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                BUYER MATCH
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature5Img} 
                  alt="Buyer match platform mockup" 
                  className="lumbox-feature-img lumbox-feature-img--laptop"
                />
              </div>
            </div>

            {/* Feature 6 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                SMART COLD CHAIN: API-DRIVEN STORAGE &amp; IOT ORCHESTRATION
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature6Img} 
                  alt="Smart cold chain storage and IoT orchestration mockup" 
                  className="lumbox-feature-img lumbox-feature-img--2-phones"
                />
              </div>
            </div>

            {/* Feature 7 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                ROUTE CONSOLIDATION: INTEGRATED WITH ID FOOD’S FIONA API
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature7Img} 
                  alt="Route consolidation integrated with ID FOOD Fiona API mockup" 
                  className="lumbox-feature-img lumbox-feature-img--2-phones"
                />
              </div>
            </div>

            {/* Feature 8 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                NATIONAL COMMAND CENTER FOR ID FOOD ADMIN
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature8Img} 
                  alt="National command center for ID FOOD admin mockup" 
                  className="lumbox-feature-img lumbox-feature-img--dashboard"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONCLUSION (Figma Node 476:6226) */}
        <section className="lumbox-section lumbox-conclusion-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">CONCLUSION</span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                By activating ID FOOD's existing infrastructure, Lumbox aims to transform informal networks into a connected digital ecosystem, shifting national food governance from reactive monitoring to real-time orchestration.
              </h2>
              
              <hr className="lumbox-divider-line" />

              <div className="lumbox-pillar-cards">
                <div className="lumbox-pillar-card">
                  <span className="lumbox-pillar-emoji" role="img" aria-label="mobile phone">📲</span>
                  <span className="lumbox-pillar-label">Tech-Enabled Ecosystem Integration</span>
                </div>
                <div className="lumbox-pillar-card">
                  <span className="lumbox-pillar-emoji" role="img" aria-label="indonesia flag">🇮🇩</span>
                  <span className="lumbox-pillar-label">Powering B2B and National Agendas</span>
                </div>
                <div className="lumbox-pillar-card">
                  <span className="lumbox-pillar-emoji" role="img" aria-label="transformation loop">🔁</span>
                  <span className="lumbox-pillar-label">Transformation, Not Distruption</span>
                </div>
              </div>

              <p className="lumbox-conclusion-tagline">
                From scatterd harvest to a connected nation, built chain by <strong>GRAIN</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* 10. DISCOVER MORE PROJECTS (Figma Node 492:2) */}
        <section className="lumbox-section lumbox-discover-section">
          <div className="lumbox-container">
            <h2 className="lumbox-discover-heading">DISCOVER MORE PROJECTS</h2>

            <div className="lumbox-discover-grid">
              {/* Card 1: LastLonger */}
              <article className="lumbox-discover-card" onClick={handleClose}>
                <div className="lumbox-discover-img-wrap">
                  <img 
                    src={projectLastLonger} 
                    alt="LastLonger project preview" 
                    className="lumbox-discover-img" 
                  />
                </div>
                <div className="lumbox-discover-info">
                  <span className="lumbox-discover-cat">Project Management / UX Research</span>
                  <h3 className="lumbox-discover-title">LastLonger: End-to-End Device Lifecycle Management App</h3>
                  <p className="lumbox-discover-desc">
                    An app driving sustainable solutions and a circular economy through responsible device lifecycles, reducing e-waste through responsible reuse and resale pathways.
                  </p>
                </div>
              </article>

              {/* Card 2: Korpus */}
              <article className="lumbox-discover-card" onClick={handleOpenKorpus}>
                <div className="lumbox-discover-img-wrap">
                  <img 
                    src={projectKorpus} 
                    alt="KORPUS project preview" 
                    className="lumbox-discover-img" 
                  />
                </div>
                <div className="lumbox-discover-info">
                  <span className="lumbox-discover-cat">Product Management / UX Research</span>
                  <h3 className="lumbox-discover-title">KORPUS: Fullstack Digital Platform to Activate Indonesia’s 83.000+ Village Cooperatives</h3>
                  <p className="lumbox-discover-desc">
                    A frictionless onboarding and digital wallet system to scale cooperative participation nationwide for Hackathon Digital Cooperatives Expo 2026
                  </p>
                </div>
              </article>

              {/* Card 3: Seizure */}
              <article className="lumbox-discover-card" onClick={handleOpenEEG}>
                <div className="lumbox-discover-img-wrap">
                  <img 
                    src={projectEeg} 
                    alt="EEG Seizure detection research preview" 
                    className="lumbox-discover-img" 
                  />
                </div>
                <div className="lumbox-discover-info">
                  <span className="lumbox-discover-cat">Research / Machine Learning</span>
                  <h3 className="lumbox-discover-title">Evaluating the Robustness of Classical Machine Learning in Cross-Subject EEG Seizure Detection</h3>
                  <p className="lumbox-discover-desc">
                    A classical ML pipeline trained on 3.5M+ EEG segments to flag seizure risk and accelerate clinical triage, presented at BIOXPLORE 2026. IEEE &amp; Scopus-indexed.
                  </p>
                </div>
              </article>
            </div>

            <div className="lumbox-cta-row">
              <button 
                type="button" 
                className="lumbox-gold-btn" 
                onClick={handleGoToExperiences}
              >
                View My Experiences
              </button>
            </div>
          </div>
        </section>

        {/* 11. FOOTER (matches Figma node 658:1629) */}
        <Footer />
      </main>
    </div>
  );
}
