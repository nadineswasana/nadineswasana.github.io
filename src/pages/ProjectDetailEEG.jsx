import { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import './ProjectDetailEEG.css';

// Publication Credentials Logo
import pubLogosImg from '../assets/project-detail/eeg/pub_logo_662_1686.png';

// Related Projects Assets
import projectLastLonger from '../assets/projects/project-lastlonger.png';
import projectKorpus from '../assets/projects/project-korpus.png';
import projectLumbox from '../assets/projects/project-lumbox.png';

export default function ProjectDetailEEG({ onBack, onNavigateExperience, onNavigateProject }) {
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

  const handleOpenIeee = () => {
    window.open('https://ieeexplore.ieee.org/document/11709894', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="eeg-detail-page">
      {/* 1. STICKY HEADER (Matches Home Navbar Branding & Figma Node 649:1052) */}
      <header className="eeg-header">
        <div className="eeg-header-inner">
          <button 
            type="button" 
            className="eeg-brand-btn" 
            onClick={handleClose}
            aria-label="Back to home"
          >
            Nadine Swasana
          </button>
          <button 
            type="button" 
            className="eeg-close-btn" 
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

      <main className="eeg-main-content">
        {/* 2. MAIN / HERO (Figma Node 649:830) */}
        <section className="eeg-hero-section">
          <div className="eeg-container">
            {/* Project title and description (649:831) */}
            <div className="eeg-hero-head">
              <h1 className="eeg-hero-title">
                Evaluating the Robustness of Classical Machine Learning in Cross-Subject EEG Seizure Detection
              </h1>
              <p className="eeg-hero-desc">
                A classical ML pipeline trained on 3.5M+ EEG windows to test whether seizure detection still works on patients the model has never seen. Presented at BIOXPLORE 2026 (IEEE &amp; Scopus-indexed).
              </p>
            </div>

            {/* Project details / Metadata Grid (649:842) - Matches Lumbox: Clean borders, no card wrapper */}
            <div className="eeg-meta-grid">
              <div className="eeg-meta-card">
                <span className="eeg-meta-label">TYPE</span>
                <p className="eeg-meta-value">
                  Research Paper / Machine Learning Study, IEEE Conference
                </p>
              </div>
              <div className="eeg-meta-card">
                <span className="eeg-meta-label">THE TEAM</span>
                <p className="eeg-meta-value">
                  Daffa Farras Putra Tarigan<br />
                  Kevin Fransisco<br />
                  Aqila Ananti<br />
                  Muhammad Zick Al-Farizi<br />
                  Nadya Syifa Azzahra
                </p>
              </div>
              <div className="eeg-meta-card">
                <span className="eeg-meta-label">ROLE</span>
                <p className="eeg-meta-value">Researcher</p>
              </div>
              <div className="eeg-meta-card">
                <span className="eeg-meta-label">TIME</span>
                <p className="eeg-meta-value">March 2026 - August 2026</p>
              </div>
              <div className="eeg-meta-card">
                <span className="eeg-meta-label">RESULT</span>
                <p className="eeg-meta-value">
                  Presented at BIOXPLORE 2026 (IEEE Conference No. 68070X, Bantul, 5 August 2026). Indexed by IEEE &amp; Scopus.
                </p>
              </div>
            </div>

            {/* Frame 37707 (662:1699): Publication Logos & "Read on IEEE Xplore" CTA Button */}
            <div className="eeg-pub-cta-banner">
              <div className="eeg-pub-logos-wrap">
                <img 
                  src={pubLogosImg} 
                  alt="IEEE, Scopus, and BIOXPLORE publication credentials" 
                  className="eeg-pub-logos-img"
                />
              </div>
              <div className="eeg-pub-action">
                <button 
                  type="button" 
                  className="eeg-gold-btn"
                  onClick={handleOpenIeee}
                >
                  Read on IEEE Xplore
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OVERVIEW (Figma Node 649:858) */}
        <section className="eeg-section eeg-overview-section">
          <div className="eeg-container eeg-two-col">
            <div className="eeg-col-left">
              <span className="eeg-section-tag">OVERVIEW</span>
            </div>
            <div className="eeg-col-right">
              <h2 className="eeg-section-heading">
                Epilepsy affects millions of people, and EEG interpretation still depends on specialists reviewing recordings by hand, which is slow and hard to scale. Many published models report near-perfect accuracy, but they are often tested on data from the same patients they trained on.
              </h2>
              <p className="eeg-body-text">
                This project is our research submission to BIOXPLORE 2026. We ask a harder question: how well do classical machine learning models work on completely unseen patients?
              </p>

              <div className="eeg-card-pair">
                <div className="eeg-surface-card">
                  <div className="eeg-card-header">
                    <span className="eeg-card-icon" role="img" aria-label="sad face">😢</span>
                    <span className="eeg-card-title">THE PROBLEM</span>
                  </div>
                  <p className="eeg-card-body">
                    Seizure windows make up only 0.067% of the data, and every patient's brain signals look different. Under these conditions, accuracy and ROC-AUC can make a useless model look excellent.
                  </p>
                </div>
                <div className="eeg-surface-card">
                  <div className="eeg-card-header">
                    <span className="eeg-card-icon" role="img" aria-label="pin">📌</span>
                    <span className="eeg-card-title">THE SOLUTION</span>
                  </div>
                  <p className="eeg-card-body">
                    We built a strict, leak-free evaluation pipeline. It combines subject-wise splitting, Leave-One-Subject-Out validation, and AUC-PR as the primary metric. We used it to benchmark four classical models under realistic deployment conditions. We did not propose a new algorithm. Instead, we provide an honest empirical baseline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROBLEM (Figma Node 649:878) */}
        <section className="eeg-section eeg-problem-section">
          <div className="eeg-container eeg-two-col">
            <div className="eeg-col-left">
              <span className="eeg-section-tag">PROBLEM</span>
            </div>
            <div className="eeg-col-right">
              <h2 className="eeg-section-heading">
                To see why seizure detection breaks in practice, we looked at the CHB-MIT scalp EEG data and measured how hard the task is.
              </h2>

              {/* 4 Key Metrics (649:883) */}
              <div className="eeg-metrics-grid">
                <div className="eeg-metric-item">
                  <span className="eeg-metric-num">3,537,881</span>
                  <p className="eeg-metric-label">
                    two-second EEG windows from the CHB-MIT database (23 cases, 198 annotated seizures).
                  </p>
                </div>
                <div className="eeg-metric-item">
                  <span className="eeg-metric-num">0.067%</span>
                  <p className="eeg-metric-label">
                    only 2,365 windows are seizures, against 3,535,516 non-seizure windows.
                  </p>
                </div>
                <div className="eeg-metric-item">
                  <span className="eeg-metric-num">787 features</span>
                  <p className="eeg-metric-label">
                    extracted per window (77 zero-variance features were removed afterward).
                  </p>
                </div>
                <div className="eeg-metric-item">
                  <span className="eeg-metric-num">0 patient overlap</span>
                  <p className="eeg-metric-label">
                    train and test sets contain different patients (2,768,685 train and 769,196 test windows).
                  </p>
                </div>
              </div>

              {/* Problem Callout 1 (649:896) */}
              <div className="eeg-highlight-quote-box">
                <p className="eeg-highlight-quote">
                  "The crisis is not a lack of harvest, capital, or ambition, it is the absence of a unifying layer that connects what already exists"
                </p>
              </div>

              {/* Three Difficulties (649:1248) */}
              <h3 className="eeg-subheading" style={{ marginTop: '16px' }}>
                Three things make this task difficult:
              </h3>
              <div className="eeg-diff-cards-grid">
                <div className="eeg-diff-card">
                  <h4 className="eeg-diff-title">Severe class imbalance.</h4>
                  <p className="eeg-diff-desc">
                    A model that always predicts "no seizure" is right 99.9% of the time.
                  </p>
                </div>
                <div className="eeg-diff-card">
                  <h4 className="eeg-diff-title">Inter-subject variability.</h4>
                  <p className="eeg-diff-desc">
                    Different patients produce different EEG patterns, so a model that works on one patient often fails on another.
                  </p>
                </div>
                <div className="eeg-diff-card">
                  <h4 className="eeg-diff-title">Misleading metrics.</h4>
                  <p className="eeg-diff-desc">
                    High accuracy or ROC-AUC does not mean good seizure detection.
                  </p>
                </div>
              </div>

              {/* Problem Callout 2 (649:1264) */}
              <div className="eeg-highlight-quote-box">
                <p className="eeg-highlight-quote">
                  "The problem is not a lack of models or accuracy scores. It is the lack of evaluation that reflects real clinical conditions."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GOALS & INTENDED IMPACT (Figma Node 649:897) */}
        <section className="eeg-section eeg-goals-section">
          <div className="eeg-container eeg-two-col">
            <div className="eeg-col-left">
              <span className="eeg-section-tag">GOALS &amp;<br />INTENDED IMPACT</span>
            </div>
            <div className="eeg-col-right">
              <h2 className="eeg-section-heading">
                Reliable seizure detection needs honest evaluation before it needs a bigger model. We set out to test three hypotheses:
              </h2>

              <ul className="eeg-hypotheses-list">
                <li>
                  <span className="eeg-hypo-num">1.</span>
                  <span>No significant performance difference exists among classical models for cross-subject detection.</span>
                </li>
                <li>
                  <span className="eeg-hypo-num">2.</span>
                  <span>Severe class imbalance degrades detection performance.</span>
                </li>
                <li>
                  <span className="eeg-hypo-num">3.</span>
                  <span>Accuracy alone is insufficient for evaluating seizure detection.</span>
                </li>
              </ul>

              {/* Target Metrics Comparison Table (650:1299) */}
              <div className="eeg-table-wrap">
                <table className="eeg-data-table">
                  <thead>
                    <tr>
                      <th scope="col">Goal</th>
                      <th scope="col">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Leakage-free validation</td>
                      <td>Subject-wise split plus LOSO</td>
                    </tr>
                    <tr>
                      <td>Primary metric</td>
                      <td>AUC-PR</td>
                    </tr>
                    <tr>
                      <td>Imbalance strategies compared</td>
                      <td>2 (class weighting, random under-sampling)</td>
                    </tr>
                    <tr>
                      <td>Models benchmarked</td>
                      <td>4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Intended Impact (650:1345) */}
              <h3 className="eeg-subheading" style={{ marginTop: '24px' }}>
                Intended impact:
              </h3>
              <ul className="eeg-impact-list">
                <li>
                  <span className="eeg-impact-bullet">•</span>
                  <span>A reliable baseline for future patient-independent EEG research.</span>
                </li>
                <li>
                  <span className="eeg-impact-bullet">•</span>
                  <span>Evidence that clinically meaningful metrics should replace accuracy-only reporting.</span>
                </li>
                <li>
                  <span className="eeg-impact-bullet">•</span>
                  <span>Guidance on models that fit initial clinical screening, where missed seizures cost more than false alarms.</span>
                </li>
              </ul>

              {/* Research Question Card (650:1358) */}
              <div className="eeg-research-question-box">
                <span className="eeg-rq-tag">RESEARCH QUESTION</span>
                <p className="eeg-rq-quote">
                  "How well do classical machine learning models generalize to completely unseen patients under extreme class imbalance and inter-subject variability?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONCLUSION (Figma Node 649:1007) */}
        <section className="eeg-section eeg-conclusion-section">
          <div className="eeg-container eeg-two-col">
            <div className="eeg-col-left">
              <span className="eeg-section-tag">CONCLUSION</span>
            </div>
            <div className="eeg-col-right">
              <h2 className="eeg-section-heading">
                Classical ML struggles with cross-subject seizure detection. Accuracy is unreliable for imbalanced medical data, so AUC-PR should be used instead. Future work will explore autoencoder-based anomaly detection, contrastive learning (Siamese networks), Focal Loss with hard example mining, and repeated LOSO runs with non-parametric significance tests.
              </h2>

              {/* 3 Pillar Cards (658:1651) */}
              <div className="eeg-pillars-grid">
                <div className="eeg-pillar-card">
                  <div className="eeg-pillar-icon">⚖️</div>
                  <h4 className="eeg-pillar-title">Honest Evaluation</h4>
                  <p className="eeg-pillar-desc">
                    Patient-independent validation, not inflated scores.
                  </p>
                </div>
                <div className="eeg-pillar-card">
                  <div className="eeg-pillar-icon">🎯</div>
                  <h4 className="eeg-pillar-title">Right Metrics</h4>
                  <p className="eeg-pillar-desc">
                    AUC-PR over accuracy for clinical relevance.
                  </p>
                </div>
                <div className="eeg-pillar-card">
                  <div className="eeg-pillar-icon">🚀</div>
                  <h4 className="eeg-pillar-title">Next Step</h4>
                  <p className="eeg-pillar-desc">
                    Representation learning and anomaly detection.
                  </p>
                </div>
              </div>

              {/* Quote Banner (649:1026) */}
              <div className="eeg-conclusion-quote-box">
                <p className="eeg-conclusion-quote">
                  "High accuracy is not detection. Measuring honestly is the first step to saving lives."
                </p>
              </div>

              {/* Button "Read on IEEE Xplore" in Conclusion (681:581) */}
              <div className="eeg-cta-row" style={{ marginTop: '36px' }}>
                <button 
                  type="button" 
                  className="eeg-gold-btn"
                  onClick={handleOpenIeee}
                >
                  Read on IEEE Xplore
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DISCOVER MORE PROJECTS (Figma Node 649:1027) */}
        <section className="eeg-section eeg-discover-section">
          <div className="eeg-container">
            <h2 className="eeg-discover-heading">DISCOVER MORE PROJECTS</h2>
            
            <div className="eeg-discover-grid">
              {/* Card 1: LastLonger */}
              <article className="eeg-discover-card" onClick={handleClose}>
                <div className="eeg-discover-img-wrap">
                  <img 
                    src={projectLastLonger} 
                    alt="LastLonger project preview" 
                    className="eeg-discover-img" 
                  />
                </div>
                <div className="eeg-discover-info">
                  <span className="eeg-discover-cat">Project Management / UX Research</span>
                  <h3 className="eeg-discover-title">LastLonger: End-to-End Device Lifecycle Management App</h3>
                  <p className="eeg-discover-desc">
                    An app driving sustainable solutions and a circular economy through responsible device lifecycles, reducing e-waste through responsible reuse and resale pathways.
                  </p>
                </div>
              </article>

              {/* Card 2: KORPUS */}
              <article className="eeg-discover-card" onClick={handleClose}>
                <div className="eeg-discover-img-wrap">
                  <img 
                    src={projectKorpus} 
                    alt="KORPUS project preview" 
                    className="eeg-discover-img" 
                  />
                </div>
                <div className="eeg-discover-info">
                  <span className="eeg-discover-cat">Product Management / UX Research</span>
                  <h3 className="eeg-discover-title">KORPUS: Fullstack Digital Platform to Activate Indonesia’s 83.000+ Village Cooperatives</h3>
                  <p className="eeg-discover-desc">
                    A frictionless onboarding and digital wallet system to scale cooperative participation nationwide for Hackathon Digital Cooperatives Expo 2026
                  </p>
                </div>
              </article>

              {/* Card 3: LUMBOX */}
              <article className="eeg-discover-card" onClick={handleOpenLumbox}>
                <div className="eeg-discover-img-wrap">
                  <img 
                    src={projectLumbox} 
                    alt="Lumbox project preview" 
                    className="eeg-discover-img" 
                  />
                </div>
                <div className="eeg-discover-info">
                  <span className="eeg-discover-cat">Product Management / UX Design</span>
                  <h3 className="eeg-discover-title">LUMBOX: Digital B2B Food Supply Chain Ecosystem</h3>
                  <p className="eeg-discover-desc">
                    A multi-sided ecosystem with ID FOOD as orchestrator, connecting 48M smallholder farmers to institutional buyers and village cooperatives.
                  </p>
                </div>
              </article>
            </div>

            <div className="eeg-cta-row">
              <button 
                type="button" 
                className="eeg-gold-btn" 
                onClick={handleGoToExperiences}
              >
                View My Experiences
              </button>
            </div>
          </div>
        </section>

        {/* 8. FOOTER (Figma Node 658:1640) */}
        <Footer />
      </main>
    </div>
  );
}
