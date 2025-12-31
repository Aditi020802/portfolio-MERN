import { useState, useEffect } from "react";
import "../styles/navbar.css";
import useTheme from "../hooks/useTheme";
import logo from "../assets/profile.svg";
import resume from "../assets/Aditi Modhvadia.pdf";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const closeMenu = () => setOpen(false);

  // smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    closeMenu();
  };

  // detect section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <header className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          <div className="logo" onClick={() => scrollToSection("home")}>
            <div className="logo-image">
              <img src={logo} alt="Profile" />
            </div>
            Aditi Modhvadiya
          </div>

          <nav className="nav-center">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          {/* THEME TOGGLE */}
          <div className="theme-toggle" onClick={toggleTheme}>
            <svg class="sun" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7 A5 5 0 1 1 11.999 7" fill="#fff" />
              <path d="M12 7 A5 5 0 1 1 11.999 7 M12 1 V4 M12 20 V23
             M1 12 H4 M20 12 H23
             M4.5 4.5 L6.8 6.8 M17.2 6.8 L19.5 4.5
             M4.5 19.5 L6.8 17.2 M17.2 17.2 L19.5 19.5" fill="none" stroke="#fff" stroke-width="1.2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <svg className="moon" viewBox="0 0 24 24" fill="#38bdf8">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </div>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* RESUME */}
          <a
            href={`${import.meta.env.VITE_API_BASE_URL}/api/resume/download`}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <button
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => scrollToSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}

        <a href={resume} download className="btn">
          Resume
        </a>
      </div>
    </div>
  );
}
