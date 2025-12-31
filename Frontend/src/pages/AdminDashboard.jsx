import { useEffect, useState } from "react";
import "../styles/admin-dashboard.css";
import VisitorsChart from "../components/VisitorsChart";
import CountryChart from "../components/CountryChart";
import LogoutButton from "./LogoutButton";

export default function AdminDashboard() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/analytics/visits", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(setVisits);
  }, []);

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
