import { useEffect, useRef } from "react";
import "../styles/skills.css";

/* ICONS */
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node-js.png";
import mongo from "../assets/mongodb.webp";
import json from "../assets/json.jpeg";
import vscode from "../assets/vscode.png";
import postman from "../assets/postman-icon.svg";
import github from "../assets/github.png";

export default function Skills() {
  const sectionRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const skills = [
      { name: "HTML", value: 95 },
      { name: "CSS", value: 90 },
      { name: "JavaScript", value: 85 },
      { name: "React", value: 80 },
      { name: "Node", value: 75 }
    ];

    const center = { x: 200, y: 200 };
    const maxR = 140;
    const step = (Math.PI * 2) / skills.length;

    const shape = sectionRef.current.querySelector(".radar-shape");
    const pointsGroup = sectionRef.current.querySelector(".radar-points");
    const labelsGroup = sectionRef.current.querySelector(".radar-labels");
    const tooltip = tooltipRef.current;

    let points = [];

    skills.forEach((s, i) => {
      const angle = step * i - Math.PI / 2;
      const r = (s.value / 100) * maxR;

      const x = center.x + Math.cos(angle) * r;
      const y = center.y + Math.sin(angle) * r;

      points.push(`${x},${y}`);

      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);

      c.addEventListener("mouseenter", () => {
        tooltip.textContent = `${s.name} – ${s.value}%`;
        tooltip.style.opacity = 1;
      });

      c.addEventListener("mousemove", e => {
        tooltip.style.left = e.pageX + "px";
        tooltip.style.top = e.pageY - 20 + "px";
      });

      c.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
      });

      pointsGroup.appendChild(c);

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.textContent = s.name;
      label.setAttribute(
        "x",
        center.x + Math.cos(angle) * (maxR + 22)
      );
      label.setAttribute(
        "y",
        center.y + Math.sin(angle) * (maxR + 22)
      );

      labelsGroup.appendChild(label);
    });

    shape.setAttribute("points", points.join(" "));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            const circles = pointsGroup.querySelectorAll("circle");
            circles.forEach((c, i) =>
              setTimeout(() => c.classList.add("active"), i * 200)
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="radar-section reveal" id="skills" ref={sectionRef}>

      {/* DECOR SVGs */}
      <svg class="skill-decor skill-decor-blob" viewBox="0 0 200 200" aria-hidden="true">
        <path fill="#6366f1"
          d="M44.5,-61.2C56.6,-51.6,64.2,-37.9,66.4,-23.7C68.6,-9.5,65.4,5.2,58.1,18.4C50.8,31.6,39.4,43.3,25.4,52.1C11.4,60.9,-5.2,66.8,-20.7,63.5C-36.2,60.2,-50.7,47.7,-58.8,32.7C-66.9,17.7,-68.6,0.2,-63.4,-14.6C-58.2,-29.4,-46.1,-41.5,-32.3,-50.9C-18.5,-60.3,-2.9,-67,11.8,-63.8C26.5,-60.6,41.1,-47.5,44.5,-61.2Z"
          transform="translate(100 100)" />
      </svg>

      <svg class="skill-decor skill-decor-dots" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="10" cy="10" r="3" />
        <circle cx="40" cy="20" r="3" />
        <circle cx="70" cy="10" r="3" />
        <circle cx="100" cy="30" r="3" />
        <circle cx="20" cy="60" r="3" />
        <circle cx="60" cy="70" r="3" />
        <circle cx="90" cy="90" r="3" />
      </svg>
      
      <svg class="skill-decor skill-decor-lines" viewBox="0 0 200 120" aria-hidden="true">
        <line x1="0" y1="60" x2="200" y2="60" />
        <line x1="20" y1="20" x2="180" y2="100" />
      </svg>

      <h2 className="section-title">
        Skills
        <span className="skills-underline" />
      </h2>

      {/* RADAR */}
      <div className="radar-wrapper">
        <svg viewBox="0 0 400 400" className="radar-svg">
          <defs>
            <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          <g className="radar-grid">
            <circle cx="200" cy="200" r="140" />
            <circle cx="200" cy="200" r="105" />
            <circle cx="200" cy="200" r="70" />
            <circle cx="200" cy="200" r="35" />
          </g>

          <g className="radar-axes">
            <line x1="200" y1="60" x2="200" y2="340" />
            <line x1="60" y1="200" x2="340" y2="200" />
            <line x1="100" y1="100" x2="300" y2="300" />
            <line x1="300" y1="100" x2="100" y2="300" />
          </g>

          <polygon className="radar-shape" />
          <g className="radar-points" />
          <g className="radar-labels" />
        </svg>

        <div className="radar-tooltip" ref={tooltipRef} />
      </div>

      {/* ICON SKILLS */}
      <div className="skills-icons">
        <div class="icon-skill"><span class="icon-wrap"><img src={html} /></span>HTML</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={css} /></span>CSS</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={js}/></span>JavaScript</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={react} /></span>React</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={node} /></span>Node.js</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={mongo} /></span>MongoDB</div>
      </div>

      <div className="skills-icons">
        <div class="icon-skill"><span class="icon-wrap"><img src={json} /></span>JSON</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={vscode} /></span>VS Code</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={postman} /></span>Postman</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={github}/></span>Git</div>
        <div class="icon-skill"><span class="icon-wrap"><img src={github} /></span>GitHub</div>
      </div>
    </section>
  );
}
