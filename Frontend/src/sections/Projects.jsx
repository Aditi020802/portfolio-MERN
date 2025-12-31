import { useEffect, useRef, useState } from "react";
import "../styles/project.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

export default function Projects() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);

  /* ===== SCROLL REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== PROJECT DATA ===== */
  const projects = [
    {
      id: 1,
      filter: "mern",
      title: "Share Life – Give Blood",
      image: project1,
      shortDesc:
        "A MERN stack blood donation management system that connects donors, patients, and admins to manage blood requests, donations, and blood stock efficiently.",
      fullDesc:
        "A full-stack blood donation platform built with the MERN stack, featuring donor and patient management, blood request handling, donation scheduling, real-time blood stock updates, secure authentication, and an admin dashboard for system control.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://sharelifegiveblood.netlify.app/",
      source: "https://github.com/Aditi020802/-Blood-Donation-Management-System"
    },
    {
      id: 2,
      filter: "mern",
      title: "Portfolio Website",
      image: project2,
      shortDesc:
        "A full-stack personal portfolio website built using the MERN stack, featuring dynamic project management, admin authentication, and a modern responsive UI.",
      fullDesc:
        "A dynamic MERN stack personal portfolio website with a React frontend and a Node.js + Express backend, featuring MongoDB-based content management, secure JWT authentication, an admin dashboard for managing projects and content, responsive design, and smooth UI animations.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      source: "#"
    }
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.filter === filter);

  return (
    <section className="projects-section reveal" ref={sectionRef} id="projects">

        <svg class="project-decor project-hex" viewBox="0 0 300 260" aria-hidden="true">
        <g stroke="#6366f1" stroke-width="2" fill="none" opacity=".35">
          <polygon points="75,5 145,45 145,125 75,165 5,125 5,45" />
          <polygon points="155,45 225,5 295,45 295,125 225,165 155,125" />
          <polygon points="75,135 145,175 145,255 75,295 5,255 5,175" />
        </g>
      </svg>

      <svg class="project-decor project-spiral" viewBox="0 0 200 200" aria-hidden="true">
        <path d="M100 100
       m-60 0
       a60 60 0 1 1 120 0
       a45 45 0 1 0 -90 0
       a30 30 0 1 1 60 0
       a15 15 0 1 0 -30 0" fill="none" stroke="#8b5cf6" stroke-width="3" stroke-linecap="round" opacity=".35" />
      </svg>

      <svg class="project-decor project-zigzag" viewBox="0 0 400 120" aria-hidden="true">
        <polyline points="0,60 40,20 80,100 120,40 160,90 200,30 240,80 280,20 320,70 360,40 400,60" fill="none"
          stroke="#6366f1" stroke-width="4" stroke-linejoin="round" opacity=".35" />
      </svg>
      {/* ===== TITLE ===== */}
      <h2 className="section-title">
        Projects
        <span className="projects-underline"></span>
      </h2>

      {/* ===== FILTER ===== */}
      <div className="project-filters">
        {["all", "mern", "frontend"].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ===== PROJECT GRID ===== */}
      <div className="projects-grid">
        {filtered.map(project => {
          const isOpen = openId === project.id;

          return (
            <div
              key={project.id}
              className={`project-card ${isOpen ? "open" : ""}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDesc}</p>

                {/* ===== INLINE DETAILS ===== */}
                <div className={`project-details ${isOpen ? "show" : ""}`}>
                  <p>{project.fullDesc}</p>

                  <div className="project-tags">
                    {project.tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* ===== ACTION BUTTONS (ALL KEPT) ===== */}
                <div className="project-actions">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn live-btn"
                  >
                    🔗 Live
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="btn source-btn"
                  >
                    🧑‍💻 Source
                  </a>

                  <button
                    className="btn outline"
                    onClick={() =>
                      setOpenId(isOpen ? null : project.id)
                    }
                  >
                    {isOpen ? "Hide Details" : "View Details"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
