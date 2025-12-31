import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const data = await res.json();
      console.log("SERVER RESPONSE:", data);

      if (!res.ok) throw new Error(data.message || "Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("ERROR:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* DECOR SVGs */}
      <svg className="contact-decor contact-circuit" viewBox="0 0 400 200">
        <path
          d="M20 100 H140 V40 H260 V160 H380"
          fill="none"
          stroke="#6366f1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 10"
        />
      </svg>

      <svg className="contact-decor contact-rings" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="6"
          strokeDasharray="18 14"
        />
        <circle
          cx="100"
          cy="100"
          r="45"
          fill="none"
          stroke="#6366f1"
          strokeWidth="4"
          strokeDasharray="10 8"
        />
      </svg>

      <svg className="contact-decor contact-envelope" viewBox="0 0 240 160">
        <rect
          x="10"
          y="20"
          width="220"
          height="120"
          rx="18"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="4"
        />
        <polyline
          points="20,30 120,90 220,30"
          fill="none"
          stroke="#6366f1"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h2 className="section-title">
        Contact Me
        <span className="contact-underline"></span>
      </h2>

      <p className="contact-subtitle">
        Let’s build something meaningful together ✨
        <br />
        Feel free to reach out anytime.
      </p>

      <div className="contact-grid">
        {/* CONTACT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <span>📞</span>
            <div className="contact-icon">
              <h4>Mobile No.</h4>
              <p>9316241117</p>
            </div>
          </div>

          <div className="info-card">
            <span>📧</span>
            <div className="contact-icon">
              <h4>Email</h4>
              <p>aditimodhvadia02@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <span>📍</span>
            <div className="contact-icon">
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

          <div className="info-card">
            <span>💼</span>
            <div className="contact-icon">
              <h4>Open To</h4>
              <p>Frontend / MERN / React Roles</p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="field">
            <textarea
              name="message"
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
