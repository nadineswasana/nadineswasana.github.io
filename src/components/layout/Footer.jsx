import './Footer.css';

export default function Footer() {
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="footer" className="footer-section">
      {/* Top Striped Awning Pattern */}
      <div className="footer-awning-stripes" aria-hidden="true" />

      <div className="container footer-content-container">
        <div className="footer-header">
          <h2 className="footer-headline">
            Let’s bridge your next business goals with intelligent technology.
          </h2>
          <p className="footer-description">
            Always open to collaborating on complex challenges and turning them into seamless, high-impact user experiences.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="footer-buttons-row">
          <a 
            href="mailto:nadine.swasana@binus.ac.id"
            className="footer-action-btn"
            aria-label="Email Nadine Swasana at nadine.swasana@binus.ac.id"
          >
            Email Me
          </a>

          <button 
            type="button"
            onClick={handleLinkedInClick}
            className="footer-action-btn"
            aria-label="Visit Nadine Swasana's LinkedIn profile"
          >
            LinkedIn
          </button>
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          © 2026 Nadine Swasana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
