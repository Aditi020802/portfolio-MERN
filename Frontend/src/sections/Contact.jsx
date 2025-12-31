import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  /* ===== HANDLE INPUT CHANGE ===== */
  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /* ===== HANDLE FORM SUBMIT ===== */
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      });

      const data = await res.json();
      console.log("SERVER RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("ERROR:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <svg class="contact-decor contact-circuit" viewBox="0 0 400 200" aria-hidden="true">
        <path d="M20 100 H140 V40 H260 V160 H380" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round"
          stroke-dasharray="8 10" />
      </svg>
      <svg class="contact-decor contact-rings" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="70" fill="none" stroke="#8b5cf6" stroke-width="6" stroke-dasharray="18 14" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="#6366f1" stroke-width="4" stroke-dasharray="10 8" />
      </svg>
      <svg class="contact-decor contact-envelope" viewBox="0 0 240 160" aria-hidden="true">
        <rect x="10" y="20" width="220" height="120" rx="18" fill="none" stroke="#8b5cf6" stroke-width="4" />
        <polyline points="20,30 120,90 220,30" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      <h2 class="section-title">
        Contact Me
        <span class="contact-underline"></span>
      </h2>

      <p class="contact-subtitle">
        Let’s build something meaningful together ✨
        Feel free to reach out anytime.
      </p>

      <div class="contact-grid">

        <div class="contact-info">
          <div class="info-card">
            <span>📞</span>
            <div class="contact-icon">
              <h4>Mobile No.</h4>
              <p>9316241117</p>
            </div>
          </div>
          <div class="info-card">
            <span>📧</span>
            <div class="contact-icon">
              <h4>Email</h4>
              <p>aditimodhvadia02@gmail.com</p>
            </div>
          </div>

          <div class="info-card">
            <span>📍</span>
            <div class="contact-icon">
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

          <div class="info-card">
            <span>💼</span>
            <div class="contact-icon">
              <h4>Open To</h4>
              <p>Frontend / MERN Roles / React Roles</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="field">
          <input
            type="text"
            name="name"                 // ✅ REQUIRED
            value={form.name}
            onChange={handleChange}
            required
          />
          <label>Your Name</label>
        </div>

        {/* EMAIL */}
        <div className="field">
          <input
            type="email"
            name="email"               // ✅ REQUIRED
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Email Address</label>
        </div>

        {/* MESSAGE */}
        <div className="field">
          <textarea
            name="message"             // ✅ REQUIRED
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
          />
          <label>Your Message</label>
        </div>

        <button type="submit" className="btn">
          {status === "sending" ? "Sending..." : "Send Message 🚀"}
        </button>

        {/* STATUS MESSAGE */}
        {status === "success" && (
          <p className="success-msg">Message sent successfully ✅</p>
        )}
        {status === "error" && (
          <p className="error-msg">Something went wrong ❌</p>
        )}
      </form>

      </div>
    </section>
  );
}
