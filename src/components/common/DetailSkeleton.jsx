import { useEffect } from 'react';
import './DetailSkeleton.css';

export default function DetailSkeleton({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="detail-skeleton-page" aria-busy="true" aria-label="Loading project detail">
      {/* Header Skeleton */}
      <header className="skeleton-header">
        <div className="skeleton-header-inner">
          <div className="skeleton-shimmer skeleton-brand-btn" />
          <button 
            type="button" 
            className="skeleton-close-btn-wrap" 
            onClick={onBack}
            aria-label="Back"
          >
            <div className="skeleton-shimmer skeleton-close-btn" />
          </button>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="skeleton-main-content">
        {/* Hero Section Skeleton */}
        <section className="skeleton-hero-section">
          <div className="skeleton-container">
            <div className="skeleton-hero-intro">
              <div className="skeleton-shimmer skeleton-title" />
              <div className="skeleton-shimmer skeleton-subtitle" />
              <div className="skeleton-shimmer skeleton-desc-line" />
              <div className="skeleton-shimmer skeleton-desc-line skeleton-w-80" />
            </div>

            <div className="skeleton-hero-mockup-wrapper">
              <div className="skeleton-shimmer skeleton-hero-mockup-box" />
            </div>

            {/* Metadata Bar Skeleton */}
            <div className="skeleton-meta-grid">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="skeleton-meta-col">
                  <div className="skeleton-shimmer skeleton-meta-label" />
                  <div className="skeleton-shimmer skeleton-meta-val" />
                  <div className="skeleton-shimmer skeleton-meta-val skeleton-w-60" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 (Overview) Skeleton */}
        <section className="skeleton-section">
          <div className="skeleton-container skeleton-two-col">
            <div className="skeleton-col-left">
              <div className="skeleton-shimmer skeleton-tag" />
            </div>
            <div className="skeleton-col-right">
              <div className="skeleton-shimmer skeleton-heading" />
              <div className="skeleton-shimmer skeleton-heading skeleton-w-75" />
              <div className="skeleton-divider-line" />

              <div className="skeleton-card-pair">
                <div className="skeleton-surface-card">
                  <div className="skeleton-card-header">
                    <div className="skeleton-shimmer skeleton-icon-circle" />
                    <div className="skeleton-shimmer skeleton-card-title" />
                  </div>
                  <div className="skeleton-shimmer skeleton-card-text" />
                  <div className="skeleton-shimmer skeleton-card-text skeleton-w-85" />
                  <div className="skeleton-shimmer skeleton-card-text skeleton-w-60" />
                </div>

                <div className="skeleton-surface-card">
                  <div className="skeleton-card-header">
                    <div className="skeleton-shimmer skeleton-icon-circle" />
                    <div className="skeleton-shimmer skeleton-card-title" />
                  </div>
                  <div className="skeleton-shimmer skeleton-card-text" />
                  <div className="skeleton-shimmer skeleton-card-text skeleton-w-85" />
                  <div className="skeleton-shimmer skeleton-card-text skeleton-w-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 (Metrics) Skeleton */}
        <section className="skeleton-section">
          <div className="skeleton-container skeleton-two-col">
            <div className="skeleton-col-left">
              <div className="skeleton-shimmer skeleton-tag" />
            </div>
            <div className="skeleton-col-right">
              <div className="skeleton-shimmer skeleton-heading" />
              <div className="skeleton-divider-line" />

              <div className="skeleton-metrics-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="skeleton-metric-card">
                    <div className="skeleton-shimmer skeleton-metric-num" />
                    <div className="skeleton-shimmer skeleton-metric-text" />
                    <div className="skeleton-shimmer skeleton-metric-text skeleton-w-70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
