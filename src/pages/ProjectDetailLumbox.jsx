import React, { useEffect } from 'react';
import './ProjectDetailLumbox.css';

// Lumbox Mockup Assets
import heroDevicesImg from '../assets/project-detail/lumbox/lumbox-hero-devices.png';
import solutionOverviewImg from '../assets/project-detail/lumbox/lumbox-solution-overview.png';
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

export default function ProjectDetailLumbox({ onBack, onNavigateExperience }) {
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

  return (
    <div className="lumbox-detail-page">
      {/* 1. STICKY HEADER */}
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
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="#534203" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      <main className="lumbox-main-content">
        {/* 2. MAIN / HERO */}
        <section className="lumbox-hero-section">
          <div className="lumbox-container">
            <div className="lumbox-hero-intro">
              <h1 className="lumbox-hero-title">
                LUMBOX: B2B Platform for Indonesia’s Agricultural Supply Chain
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

            {/* Metadata Grid */}
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

        {/* 3. OVERVIEW */}
        <section className="lumbox-section lumbox-overview-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">OVERVIEW</span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                Every year, Indonesia loses enough food to feed 125 million people—while 48 million smallholder farmers remain trapped in volatile, low-margin informal supply chains.
              </h2>
              <p className="lumbox-body-text">
                Lumbox is our submission for&nbsp;Proto-A-Thon International Design Challenge 2026. Rather than building another marketplace that tries to eliminate informal middlemen, we designed an end-to-end B2B supply chain ecosystem connecting smallholder farmers, aggregators, verified buyers, and ID FOOD as the national orchestrator.
              </p>

              <div className="lumbox-card-pair">
                <div className="lumbox-surface-card">
                  <div className="lumbox-card-header">
                    <span className="lumbox-card-icon" role="img" aria-label="sad face">😢</span>
                    <span className="lumbox-card-title">THE PROBLEM</span>
                  </div>
                  <p className="lumbox-card-body">
                    Indonesia's food supply chain loses&nbsp;IDR 551 trillion annually to food loss and waste. Farmers capture only 15-20% of retail price, while 7-10 layers of disconnected middlemen drive up costs, prolong transit times (3-5 days for fresh produce), and create extreme market volatility.
                  </p>
                </div>

                <div className="lumbox-surface-card">
                  <div className="lumbox-card-header">
                    <span className="lumbox-card-icon" role="img" aria-label="pin">📌</span>
                    <span className="lumbox-card-title">THE SOLUTION</span>
                  </div>
                  <p className="lumbox-card-body">
                    A platform that formalizes, not eliminates, the informal actors already holding the chain together. Lumbox connects smallholders via WhatsApp, equips aggregators with mobile ERP tools, and gives ID FOOD a real-time command center for national food logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROBLEM */}
        <section className="lumbox-section lumbox-problem-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">PROBLEM</span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                To understand why the system was breaking, we started by mapping its fault lines.
              </h2>

              <div className="lumbox-metrics-grid">
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">IDR 551 trilion</div>
                  <p className="lumbox-metric-desc">
                    Lost annually 4–5% of GDP, exceeding the entire Ministry of Agriculture’s annual budget.
                  </p>
                </div>
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">3-5 days</div>
                  <p className="lumbox-metric-desc">
                    Average distribution time for fresh produce, against a 1–3 day freshness window.
                  </p>
                </div>
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">7-10x</div>
                  <p className="lumbox-metric-desc">
                    Price markup from farmer to consumer while farmers capture only 15–20% of retail price.
                  </p>
                </div>
                <div className="lumbox-metric-card">
                  <div className="lumbox-metric-num">48 million</div>
                  <p className="lumbox-metric-desc">
                    Smallholder farmers still excluded from formal markets and digital tools.
                  </p>
                </div>
              </div>

              <p className="lumbox-body-text lumbox-summary-callout">
                The crisis is not a lack of harvest, capital, or ambition, it is the fragmentation of information, trust, and physical logistics across thousands of disconnected actors.
              </p>
            </div>
          </div>
        </section>

        {/* 5. GOALS & INTENDED IMPACT */}
        <section className="lumbox-section lumbox-goals-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">
                GOALS &<br />INTENDED<br />IMPACT
              </span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                The future of Indonesia’s food supply chain is not built by eliminating middlemen, but by giving them the digital tools to become efficient, trusted logistics partners.
              </h2>
              <p className="lumbox-body-text">
                Here’s what we’re committing to build:
              </p>

              <div className="lumbox-impact-grid">
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Food Waste</span>
                  <div className="lumbox-impact-value">30-40% ➡️ 26%</div>
                </div>
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Farmer Price Share</span>
                  <div className="lumbox-impact-value">15-20% ➡️ 22%</div>
                </div>
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Supply Chain Layers</span>
                  <div className="lumbox-impact-value">7-10 ➡️ 4-6</div>
                </div>
                <div className="lumbox-impact-card">
                  <span className="lumbox-impact-label">Farmers Reached in Pilot</span>
                  <div className="lumbox-impact-value lumbox-impact-highlight">50.000 - 100.000</div>
                </div>
              </div>

              <p className="lumbox-body-text lumbox-summary-callout">
                Rather than disrupting the actors already holding this chain together (informal aggregators/tengkulak), we set out to formalize and orchestrate them, building a system where every role becomes more valuable, not obsolete.
              </p>
            </div>
          </div>
        </section>

        {/* 6. HOW MIGHT WE */}
        <section className="lumbox-section lumbox-hmw-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">HOW MIGHT WE</span>
            </div>
            <div className="lumbox-col-right">
              <p className="lumbox-body-text lumbox-hmw-intro">
                After interviewing farmers and middlemen across the supply chain and analyzing where the system breaks down, we distilled everything into one core question:
              </p>
              <blockquote className="lumbox-hmw-quote">
                “How might we create a more transparent, connected, and efficient food supply chain ecosystem that helps farmers, middlemen, and businesses access fair pricing, smarter distribution, reliable logistics, and data-driven decision making while reducing food waste and market uncertainty?”
              </blockquote>
            </div>
          </div>
        </section>

        {/* 7. SOLUTION */}
        <section className="lumbox-section lumbox-solution-section">
          <div className="lumbox-container">
            <div className="lumbox-two-col lumbox-solution-top">
              <div className="lumbox-col-left">
                <span className="lumbox-section-tag">SOLUTION</span>
              </div>
              <div className="lumbox-col-right">
                <p className="lumbox-body-text">
                  With that question in mind, we looked at why past agritech solutions had failed and realized most of them tried to eliminate the very actors, like&nbsp;tengkulak&nbsp;(middlemen), who were quietly holding the chain together. So instead of removing them, we designed a system to formalize what they already do.
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

            <div className="lumbox-products-cards-grid">
              <div className="lumbox-product-card">
                <h3 className="lumbox-product-title">Lumbox Mobile (Mobile App)</h3>
                <p className="lumbox-product-desc">for collectors, middlemen, and village cooperatives</p>
              </div>
              <div className="lumbox-product-card">
                <h3 className="lumbox-product-title">Lumbox for Business (Desktop Web - B2B Command Layer)</h3>
                <p className="lumbox-product-desc">for ID FOOD (orchestrator) and verified business buyers</p>
              </div>
              <div className="lumbox-product-card">
                <h3 className="lumbox-product-title">Lumbox Connect (WhatsApp Bot/Zero App Required)</h3>
                <p className="lumbox-product-desc">for Indonesia's 48 million smallholder farmers</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FEATURES */}
        <section className="lumbox-section lumbox-features-section">
          <div className="lumbox-container lumbox-features-container">
            {/* Feature 1 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                TRANSPARENT FARM PRODUCTS COLLECTION & CONNECTIVITY THROUGH LUMBOX CONNECT
              </h3>
              <p className="lumbox-feature-desc">
                The collector negotiates with the farmer on-site and inputs the transaction details into the app: Farmer’s Name/NIK, Commodity, Volume, Agreed Price/kg, and Payment Method (Cash or Cashless via Bank Account). To finalize the purchase, the collector must trigger an automated summary sent directly to the farmer’s WhatsApp/SMS. This forces a transparent, honest ledger where the offered price is benchmarked against real-time market data.
              </p>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature1Img} 
                  alt="Transparent farm products collection and connectivity mockup" 
                  className="lumbox-feature-img"
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
                  className="lumbox-feature-img"
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
                  className="lumbox-feature-img"
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
                  className="lumbox-feature-img"
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
                  className="lumbox-feature-img"
                />
              </div>
            </div>

            {/* Feature 6 */}
            <div className="lumbox-feature-item">
              <h3 className="lumbox-feature-title">
                SMART COLD CHAIN: API-DRIVEN STORAGE & IOT ORCHESTRATION
              </h3>
              <div className="lumbox-feature-mockup-wrap">
                <img 
                  src={feature6Img} 
                  alt="Smart cold chain storage and IoT orchestration mockup" 
                  className="lumbox-feature-img"
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
                  className="lumbox-feature-img"
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
                  className="lumbox-feature-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONCLUSION */}
        <section className="lumbox-section lumbox-conclusion-section">
          <div className="lumbox-container lumbox-two-col">
            <div className="lumbox-col-left">
              <span className="lumbox-section-tag">CONCLUSION</span>
            </div>
            <div className="lumbox-col-right">
              <h2 className="lumbox-section-heading">
                By activating ID FOOD's existing infrastructure, Lumbox aims to transform informal networks into a connected digital ecosystem, shifting national food governance from reactive monitoring to real-time orchestration.
              </h2>
              
              <div className="lumbox-conclusion-divider" />

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
                From scatterd harvest to a connected nation, built chain by GRAIN.
              </p>
            </div>
          </div>
        </section>

        {/* 10. DISCOVER MORE PROJECTS */}
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
              <article className="lumbox-discover-card" onClick={handleClose}>
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
              <article className="lumbox-discover-card" onClick={handleClose}>
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
                    A classical ML pipeline trained on 3.5M+ EEG segments to flag seizure risk and accelerate clinical triage, presented at BIOXPLORE 2026. IEEE & Scopus-indexed.
                  </p>
                </div>
              </article>
            </div>

            <div className="lumbox-cta-row">
              <button 
                type="button" 
                className="lumbox-cta-btn" 
                onClick={handleGoToExperiences}
              >
                View My Experiences
              </button>
            </div>
          </div>
        </section>

        {/* 11. CLOSING QUOTE BANNER */}
        <section className="lumbox-closing-banner">
          <div className="lumbox-container">
            <p className="lumbox-closing-quote">
              By activating ID FOOD's existing infrastructure, Lumbox aims to transform informal networks into a connected digital ecosystem, shifting national food governance from reactive monitoring to real-time orchestration.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
