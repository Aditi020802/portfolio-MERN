import { useEffect, useState } from "react";
import "../styles/admin-dashboard.css";
import VisitorsChart from "../components/VisitorsChart";
import CountryChart from "../components/CountryChart";
import LogoutButton from "./LogoutButton";

export default function AdminDashboard() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/analytics/visits`
        );

        if (!res.ok) throw new Error("Failed to fetch visits");

        const data = await res.json();

        // ✅ Always normalize
        setVisits(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Admin visits fetch error:", err.message);
        setVisits([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVisits();
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Loading dashboard...</p>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Admin Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="dashboard-grid">
        <div className="admin-card">
          <h3>Daily Visitors</h3>
          <VisitorsChart visits={visits} />
        </div>

        <div className="admin-card">
          <h3>Visitors by Country</h3>
          <CountryChart visits={visits} />
        </div>
      </div>
    </div>
  );
}
