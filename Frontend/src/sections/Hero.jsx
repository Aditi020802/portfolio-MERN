import { useRef } from "react";
import useTyping from "../hooks/useTyping";
import useHeroParallax from "../hooks/useHeroParallax";
import useDockHover from "../hooks/useDockHover";

import avatar from "../assets/avatar.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import emailIcon from "../assets/email-100.png";
import githubIcon from "../assets/github-100.png";
import linkedinIcon from "../assets/linkedin-100.png";
import "../styles/hero.css";

export default function   Hero() {
  const heroRef = useRef(null);
  const dockRef = useRef(null);
  const svgRefs = useRef([]);

  const typingText = useTyping([
    " Web Developer",
    " MERN Stack Fresher",
    " Frontend Enthusiast",
  ]);

  useHeroParallax(heroRef, svgRefs);
  useDockHover(dockRef);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div class="hero-svg hero-svg-blob">
        <svg viewBox="0 0 200 200">
          <path fill="#6366f1"
            d="M42,-60C56,-53,67,-41,70,-26C73,-11,68,7,59,22C50,37,37,49,22,57C7,65,-11,69,-27,64C-43,59,-58,45,-65,28C-72,11,-71,-9,-63,-26C-55,-43,-40,-58,-23,-64C-6,-70,10,-67,42,-60Z" />
        </svg>
      </div>

      <div class="hero-svg hero-svg-dots">
        <svg viewBox="0 0 200 200">
          <defs>
            <pattern id="heroDots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#8b5cf6" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#heroDots)" />
        </svg>
      </div>

      <div class="hero-svg hero-svg-ring">
        <svg viewBox="0 0 200 200">
          <defs>
            <linearGradient id="heroRingGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#6366f1" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#heroRingGrad)" stroke-width="10"
            stroke-dasharray="30 14" />
        </svg>
      </div>

      <div class="hero-svg hero-svg-wave">
        <svg viewBox="0 0 400 120">
          <path d="M0 60 C 60 20, 120 100, 180 60
         S 300 20, 360 60" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
        </svg>
      </div>

      {/* HERO SVGs */}
      {["blob", "dots", "ring", "wave"].map((cls, i) => (
        <div
          key={cls}
          className={`hero-svg hero-svg-${cls}`}
          ref={el => (svgRefs.current[i] = el)}
        >
          {/* SVG markup remains SAME as HTML (paste yours here) */}
        </div>
      ))}

      {/* TEXT */}
      <div className="hero-text">
        <h1>Hi, I'm <span>Aditi Modhvadiya</span></h1>
        <div className="typing">{typingText}</div>
        <p style={{ marginTop: 14 }}>
          Junior Web Developer (Fresher) specializing in MERN Stack.
        </p>

        <div className="dock" ref={dockRef}>
          <div className="dock-item">
            <a href="mailto:aditimodhvadia02@gmail.com">
              <img src={emailIcon} />
            </a>
          </div>
          <div className="dock-item">
            <a href="https://github.com/Aditi020802">
              <img src={githubIcon} />
            </a>
          </div>
          <div className="dock-item">
            <a href="https://www.linkedin.com/in/aditi-modhvadia-3046b7375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <img src={linkedinIcon} />
            </a>
          </div>
        </div>
      </div>

      {/* VISUAL */}
      <div className="hero-visual">
        <svg class="blob" viewBox="0 0 200 200">
          <path fill="#6d28d9"
            d="M42.8,-71.2C55.7,-65.7,66.7,-55.6,73.1,-43.3C79.4,-31,81.2,-16.5,79.6,-3.2C78,10.1,73,20.2,66.2,29.1C59.4,38,50.7,45.7,40.8,52.6C30.8,59.5,19.6,65.7,6.7,71.5C-6.2,77.3,-12.4,82.7,-23.2,80.4C-34,78.1,-49.4,68.1,-58.6,54.7C-67.9,41.3,-71,24.6,-72.3,7.7C-73.6,-9.2,-73,-26.4,-65.5,-39.5C-58,-52.6,-43.6,-61.6,-28.9,-67.2C-14.2,-72.8,0.9,-75.1,15.6,-74.2C30.4,-73.3,45.3,-69.2,42.8,-71.2Z"
            transform="translate(100 100)" />
        </svg>

        <img src={avatar} className="avatar" />

        <div className="icon html"><img src={htmlIcon} /></div>
        <div className="icon css"><img src={cssIcon} /></div>
        <div className="icon js"><img src={jsIcon} /></div>
      </div>
    </section>
  );
}
