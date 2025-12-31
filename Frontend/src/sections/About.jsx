import "../styles/about.css";
import useReveal from "../hooks/useReveal";
import aboutimg from "../assets/about.svg";
import resume from "../assets/Aditi Modhvadia.pdf";

export default function About() {
  useReveal();
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    closeMenu();
  };

  return (
    <section className="about" id="about">

      {/* SVG DECORATIONS */}
      <div class="about-svg about-svg-1">
        <svg viewBox="0 0 200 200">
          <path fill="#6366f1"
            d="M40,-60C52,-52,61,-40,66,-26C71,-12,72,4,66,18C59,33,45,46,30,55C14,64,-3,69,-18,64C-33,59,-46,44,-55,28C-64,12,-69,-6,-65,-22C-61,-38,-48,-52,-33,-60C-18,-68,-1,-70,14,-66C29,-62,40,-60Z" />
        </svg>
      </div>

      <div class="about-svg about-svg-2">
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="#8b5cf6" />
        </svg>
      </div>
      <div class="about-svg about-svg-dots">
        <svg viewBox="0 0 200 200">
          <defs>
            <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dotPattern)" />
        </svg>
      </div>
      <div class="about-svg about-svg-ring">
        <svg viewBox="0 0 200 200">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#6366f1" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#ringGrad)" stroke-width="12"
            stroke-dasharray="40 14" />
        </svg>
      </div>
      <div class="about-svg about-svg-wave">
        <svg viewBox="0 0 400 120">
          <path d="M0 60 C 60 20, 120 100, 180 60
         S 300 20, 360 60" fill="none" stroke="#8b5cf6" stroke-width="4" stroke-linecap="round" />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="about-container">

        <div className="about-image reveal-left">
          <div className="image-wrapper">
            <img src={aboutimg} alt="aboutimg" />;
          </div>
        </div>

        <div class="about-content reveal-right">
          <h2 class="about-title">
            About Me
            <span class="title-line"></span>
          </h2>

          <p>
            Hi, I’m <strong>Aditi Modhvadiya</strong>, a passionate
            <strong>Junior Web Developer (Fresher)</strong> who loves building
            clean, responsive, and user-friendly web interfaces.
          </p>

          <p>
            I specialize in the <strong>MERN Stack</strong> and enjoy creating
            smooth UI animations, modern layouts, and interactive experiences.
          </p>

          <p>
            My goal is to grow as a full-stack developer and work on meaningful
            products that solve real-world problems.
          </p>

          <div class="about-buttons">
            <a
            href="http://localhost:5050/api/resume/download"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >Download Resume</a>
            <button onClick={() => scrollToSection("projects")} class="btn outline">View Projects</button>
          </div>
        </div>

      </div>
    </section>
  );
}
