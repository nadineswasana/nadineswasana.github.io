import { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import './ProjectDetailEEG.css';

// EEG Figure Assets
import fig1Img from '../assets/project-detail/eeg/eeg-fig1-chbmit-overview.png';
import fig2Img from '../assets/project-detail/eeg/eeg-fig2-channel-correlation.png';
import fig3Img from '../assets/project-detail/eeg/eeg-fig3-bandpass-filtering.png';
import fig4Img from '../assets/project-detail/eeg/eeg-fig4-windowing-labeling.png';
import fig56Img from '../assets/project-detail/eeg/eeg-fig5-6-features-pipeline.png';
import fig7Img from '../assets/project-detail/eeg/eeg-fig7-edf-feature-pipeline.png';
import fig8Img from '../assets/project-detail/eeg/eeg-fig8-roc-pr-curves.png';
import fig9Img from '../assets/project-detail/eeg/eeg-fig9-baseline-confusion-matrices.png';
import fig10Img from '../assets/project-detail/eeg/eeg-fig10-undersampling-confusion-matrices.png';
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
      {/* 1. STICKY HEADER */}
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
        {/* 2. MAIN / HERO */}
        <section className="eeg-hero-section">
          <div className="eeg-container">
            <div className="eeg-hero-head">
              <span className="eeg-hero-type-tag">
                Research Paper / Machine Learning Study, IEEE Conference
              </span>
              <h1 className="eeg-hero-title">
                Evaluating the Robustness of Classical Machine Learning in Cross-Subject EEG Seizure Detection
              </h1>
              <p className="eeg-hero-desc">
                A classical ML pipeline trained on 3.5M+ EEG windows to test whether seizure detection still works on patients the model has never seen. Presented at BIOXPLORE 2026 (IEEE & Scopus-indexed).
              </p>
            </div>

            {/* Publication Logos Banner & IEEE CTA */}
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
                  className="eeg-ieee-btn"
                  onClick={handleOpenIeee}
                >
                  <span>Read on IEEE Xplore</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Metadata Grid */}
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
                  Presented at BIOXPLORE 2026 (IEEE Conference No. 68070X, Bantul, 5 August 2026). Indexed by IEEE & Scopus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OVERVIEW */}
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

        {/* 4. PROBLEM */}
        <section className="eeg-section eeg-problem-section">
          <div className="eeg-container eeg-two-col">
            <div className="eeg-col-left">
              <span className="eeg-section-tag">PROBLEM</span>
            </div>
            <div className="eeg-col-right">
              <h2 className="eeg-section-heading">
                To see why seizure detection breaks in practice, we looked at the CHB-MIT scalp EEG data and measured how hard the task is.
              </h2>

              {/* 4 Key Metrics */}
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

              {/* Three Difficulties */}
              <h3 className="eeg-subheading" style={{ marginTop: '3.5rem' }}>
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

              {/* Core Problem Callout */}
              <div className="eeg-highlight-quote-box">
                <p className="eeg-highlight-quote">
                  "The problem is not a lack of models or accuracy scores. It is the lack of evaluation that reflects real clinical conditions."
                </p>
              </div>

              {/* Side-by-side Figures 1 & 2 */}
              <div className="eeg-figures-row">
                <div className="eeg-figure-box">
                  <img 
                    src={fig1Img} 
                    alt="Fig. 1: Dataset distribution across 23 subjects in CHB-MIT" 
                    className="eeg-figure-img"
                  />
                </div>
                <div className="eeg-figure-box">
                  <img 
                    src={fig2Img} 
                    alt="Fig. 2: Channel correlation heatmap" 
                    className="eeg-figure-img"
                  />
                </div>
              </div>
              <p className="eeg-figure-caption">
                <strong>Fig. 1:</strong> Dataset distribution across 23 subjects. <strong>Fig. 2:</strong> Channel correlation heatmap showing near-zero linear correlation with the label and strong multicollinearity between neighboring electrodes, which is expected because of volume conduction.
              </p>
            </div>
          </div>
        </section>

        {/* 5. GOALS & INTENDED IMPACT */}
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

              {/* Research Question Box */}
              <div className="eeg-research-question-box">
                <span className="eeg-rq-tag">RESEARCH QUESTION</span>
                <p className="eeg-rq-quote">
                  "How well do classical machine learning models generalize to completely unseen patients under extreme class imbalance and inter-subject variability?"
                </p>
              </div>

              {/* Target Metrics Comparison Table */}
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

              {/* Intended Impact */}
              <h3 className="eeg-subheading" style={{ marginTop: '3.5rem' }}>
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
            </div>
          </div>
        </section>

        {/* 6. SOLUTION / PIPELINE */}
        <section className="eeg-section eeg-solution-section">
          <div className="eeg-container eeg-two-col">
            <div className="eeg-col-left">
              <span className="eeg-section-tag">SOLUTION</span>
            </div>
            <div className="eeg-col-right">
              {/* Step 1 */}
              <div className="eeg-step-item">
                <h3 className="eeg-step-title">1. Signal cleaning (bandpass filtering)</h3>
                <p className="eeg-body-text">
                  Raw EEG was filtered with a zero-phase, 4th-order Butterworth band-pass filter at 0.5–40 Hz. The 0.5 Hz cutoff removes baseline wander and sweat artifacts. The 40 Hz cutoff suppresses muscle noise and interference.
                </p>
                <div className="eeg-figure-box single">
                  <img 
                    src={fig3Img} 
                    alt="Fig. 3: First 1,000 samples of channel FP1-F7 before and after filtering" 
                    className="eeg-figure-img"
                  />
                </div>
                <p className="eeg-figure-caption">
                  <strong>Fig. 3:</strong> First 1,000 samples of channel FP1-F7 before and after filtering.
                </p>
              </div>

              {/* Step 2 */}
              <div className="eeg-step-item">
                <h3 className="eeg-step-title">2. Windowing and labeling</h3>
                <p className="eeg-body-text">
                  The signal is cut into 2-second windows with a 1-second step. A window is labeled "seizure" if it overlaps any part of an annotated seizure.
                </p>
                <div className="eeg-figure-box single">
                  <img 
                    src={fig4Img} 
                    alt="Fig. 4: Windowing and labeling of EEG segments" 
                    className="eeg-figure-img"
                  />
                </div>
                <p className="eeg-figure-caption">
                  <strong>Fig. 4:</strong> Windowing and labeling of EEG segments.
                </p>
              </div>

              {/* Step 3 */}
              <div className="eeg-step-item">
                <h3 className="eeg-step-title">3. Feature engineering (787 features)</h3>
                <p className="eeg-body-text">
                  <strong>Time domain:</strong> mean, standard deviation, variance, and Shannon entropy. Lower entropy often signals seizure-related hypersynchrony.<br /><br />
                  <strong>Frequency domain:</strong> Welch's power spectral density and band power in Delta (0.5–4 Hz), Theta (4–8 Hz), Alpha (8–13 Hz), and Beta (13–30 Hz).
                </p>
                <div className="eeg-figure-box single">
                  <img 
                    src={fig56Img} 
                    alt="Fig. 5: Average alpha power by brain region. Fig. 6: Full EDF-to-feature pipeline" 
                    className="eeg-figure-img"
                  />
                </div>
                <p className="eeg-figure-caption">
                  <strong>Fig. 5:</strong> Average alpha power by brain region. <strong>Fig. 6:</strong> Full EDF-to-feature pipeline.
                </p>
              </div>

              {/* Step 4 */}
              <div className="eeg-step-item">
                <h3 className="eeg-step-title">4. Modeling and imbalance handling</h3>
                <p className="eeg-body-text">
                  Data is split by patient, never by window. Logistic Regression, SVM (RBF), Random Forest, and XGBoost (GPU, Optuna-tuned) were tested. Class weighting and random under-sampling were applied to training data only, to avoid evaluation bias. LOSO validation was run on Logistic Regression, because simple models keep learned weights interpretable.
                </p>
                <div className="eeg-figure-box single">
                  <img 
                    src={fig7Img} 
                    alt="Fig. 7: EDF-to-feature pipeline and modeling flow" 
                    className="eeg-figure-img"
                  />
                </div>
                <p className="eeg-figure-caption">
                  <strong>Fig. 7:</strong> EDF-to-feature pipeline.
                </p>
              </div>

              {/* Step 5 */}
              <div className="eeg-step-item">
                <h3 className="eeg-step-title">5. Why AUC-PR, not accuracy</h3>
                <p className="eeg-body-text">
                  ROC curves look strong, but PR curves reveal poor detection of the minority seizure class.
                </p>
                <div className="eeg-figure-box single">
                  <img 
                    src={fig8Img} 
                    alt="Fig. 8: ROC and PR curves side by side" 
                    className="eeg-figure-img"
                  />
                </div>
                <p className="eeg-figure-caption">
                  <strong>Fig. 8:</strong> ROC and PR curves side by side.
                </p>
              </div>

              {/* Step 6 */}
              <div className="eeg-step-item">
                <h3 className="eeg-step-title">6. Results and trade-offs</h3>
                
                {/* Performance Results Table */}
                <div className="eeg-table-wrap">
                  <table className="eeg-data-table eeg-results-table">
                    <thead>
                      <tr>
                        <th scope="col">Model</th>
                        <th scope="col">Accuracy</th>
                        <th scope="col">Precision</th>
                        <th scope="col">Recall</th>
                        <th scope="col">F1</th>
                        <th scope="col">AUC-PR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Logistic Regression</strong></td>
                        <td>0.8946</td>
                        <td>0.0043</td>
                        <td>0.7495</td>
                        <td>0.0085</td>
                        <td>0.0278</td>
                      </tr>
                      <tr>
                        <td><strong>SVM (RBF, GPU)</strong></td>
                        <td>0.9979</td>
                        <td>0.0121</td>
                        <td>0.0302</td>
                        <td>0.0172</td>
                        <td>0.0047</td>
                      </tr>
                      <tr>
                        <td><strong>Random Forest</strong></td>
                        <td>0.9991</td>
                        <td>0.0000</td>
                        <td>0.0000</td>
                        <td>0.0000</td>
                        <td>0.0079</td>
                      </tr>
                      <tr>
                        <td><strong>XGBoost (GPU, Optuna)</strong></td>
                        <td>0.9988</td>
                        <td>0.0000</td>
                        <td>0.0000</td>
                        <td>0.0000</td>
                        <td>0.0153</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Key Insights List */}
                <div className="eeg-tradeoffs-insights">
                  <p className="eeg-insight-para">
                    <strong>Random Forest and XGBoost:</strong> Accuracy is above 0.998, but recall is zero. They collapsed into predicting only "non-seizure".
                  </p>
                  <p className="eeg-insight-para">
                    <strong>Logistic Regression:</strong> It caught about 75% of seizure windows and has the highest AUC-PR. The cost is roughly 80,000 false positives, which could cause alarm fatigue for neurologists.
                  </p>
                  <p className="eeg-insight-para">
                    <strong>Under-sampling:</strong> Recall rose (Random Forest reached 0.9395), but precision fell to about 0.003. The SVM's AUC-PR could not be computed (NaN).
                  </p>
                  <p className="eeg-insight-para">
                    <strong>Class weighting:</strong> Results stayed close to baseline. Logistic Regression again led with an AUC-PR of 0.0278.
                  </p>
                  <p className="eeg-insight-para">
                    <strong>XGBoost tuning:</strong> Optuna tuning reached an objective score of 0.3353, yet recall was still zero. Model complexity did not fix the problem.
                  </p>
                </div>

                {/* Figures 9 & 10 */}
                <div className="eeg-figures-row">
                  <div className="eeg-figure-box">
                    <img 
                      src={fig9Img} 
                      alt="Fig. 9: Baseline confusion matrices" 
                      className="eeg-figure-img"
                    />
                  </div>
                  <div className="eeg-figure-box">
                    <img 
                      src={fig10Img} 
                      alt="Fig. 10: Confusion matrices after under-sampling" 
                      className="eeg-figure-img"
                    />
                  </div>
                </div>
                <p className="eeg-figure-caption">
                  <strong>Fig. 9:</strong> Baseline confusion matrices. <strong>Fig. 10:</strong> Confusion matrices after under-sampling.
                </p>

                {/* What's New Cards */}
                <div className="eeg-meta-summary-block">
                  <h4 className="eeg-cards-heading">What's New</h4>
                  <div className="eeg-tri-cards-grid">
                    <div className="eeg-tri-card">
                      <p className="eeg-tri-text">
                        <strong>Realistic evaluation protocol:</strong> Strict subject-wise split and LOSO validation to prevent leakage.
                      </p>
                    </div>
                    <div className="eeg-tri-card">
                      <p className="eeg-tri-text">
                        <strong>Proper metrics:</strong> AUC-PR as the primary metric, to avoid misleading performance claims.
                      </p>
                    </div>
                    <div className="eeg-tri-card">
                      <p className="eeg-tri-text">
                        <strong>Practical insight:</strong> Simpler models can outperform complex ones under extreme imbalance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Limitations Cards */}
                <div className="eeg-meta-summary-block">
                  <h4 className="eeg-cards-heading">Limitations</h4>
                  <div className="eeg-tri-cards-grid">
                    <div className="eeg-tri-card">
                      <p className="eeg-tri-text">
                        Repeated trials and statistical significance tests were not run because of limited compute.
                      </p>
                    </div>
                    <div className="eeg-tri-card">
                      <p className="eeg-tri-text">
                        LOSO was applied only to Logistic Regression.
                      </p>
                    </div>
                    <div className="eeg-tri-card">
                      <p className="eeg-tri-text">
                        Deep learning was intentionally excluded, to keep the comparison controlled and interpretable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONCLUSION */}
        <section className="eeg-section eeg-conclusion-section">
          <div className="eeg-container eeg-two-col">
            <div className="eeg-col-left">
              <span className="eeg-section-tag">CONCLUSION</span>
            </div>
            <div className="eeg-col-right">
              <h2 className="eeg-section-heading">
                Classical ML struggles with cross-subject seizure detection. Accuracy is unreliable for imbalanced medical data, so AUC-PR should be used instead. Future work will explore autoencoder-based anomaly detection, contrastive learning (Siamese networks), Focal Loss with hard example mining, and repeated LOSO runs with non-parametric significance tests.
              </h2>

              {/* 3 Pillar Cards */}
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

              {/* Quote Banner */}
              <div className="eeg-conclusion-quote-box">
                <p className="eeg-conclusion-quote">
                  "High accuracy is not detection. Measuring honestly is the first step to saving lives."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. DISCOVER MORE PROJECTS */}
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
                className="eeg-cta-btn" 
                onClick={handleGoToExperiences}
              >
                View My Experiences
              </button>
            </div>
          </div>
        </section>

        {/* 9. FOOTER */}
        <Footer />
      </main>
    </div>
  );
}
