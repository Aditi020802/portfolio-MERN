import { useState } from "react";
import "../styles/admin-login.css";

export default function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // REQUIRED for cookies
          body: JSON.stringify({ email, password })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ SAVE ACCESS TOKEN
      localStorage.setItem("accessToken", data.accessToken);

      // ✅ REDIRECT TO DASHBOARD
      onSuccess();
    } catch (err) {
      console.error(err);
      setError("Server not reachable");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form className="login-card" onSubmit={login}>
        <h2>🔐 Admin Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
