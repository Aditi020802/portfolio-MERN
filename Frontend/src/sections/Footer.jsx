import "../styles/footer.css";
import gitHub from "../assets/github-100.png";
import linkedin from "../assets/linkedin-100.png";
import email from "../assets/email-100.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-section">
      {/* ===== FOOTER SVG DECOR ===== */}
      <svg
        className="footer-decor"
        viewBox="0 0 400 160"
        aria-hidden="true"
      >
        <path
          d="M0 80 
             C 60 20, 120 140, 180 80
             S 300 20, 360 80"
          fill="none"
          stroke="#6366f1"
          strokeWidth="4"
          strokeLinecap="round"
          opacity=".35"
        />
      </svg>

      <div className="footer-container">
        {/* ===== BRAND ===== */}
        <div className="footer-brand">
          <h3>Aditi Modhvadiya</h3>
          <p>Junior Web Developer • MERN Stack</p>
        </div>

        {/* ===== SOCIAL ===== */}
        <div className="footer-socials">
          <a href="https://github.com/Aditi020802" aria-label="GitHub">
            <img src={gitHub} alt="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/aditi-modhvadia-3046b7375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn">
            <img src={linkedin} alt="LinkedIn" />
          </a>

          <a
            href="mailto:aditimodhvadia02@gmail.com"
            aria-label="Email"
          >
            <img src={email} alt="email" />
          </a>

          <a
            href="http://localhost:5050/api/resume/download"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="footer-bottom">
        <span>© 2025 Aditi Modhvadiya</span>

        <button
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
