import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CountryChart({ visits = [] }) {
  // 🛡 Safety: ensure array
  if (!Array.isArray(visits) || visits.length === 0) {
    return (
      <div className="card">
        <h3>🌍 Visitors by Country</h3>
        <p>No country data available</p>
      </div>
    );
  }

  const countryMap = {};

  visits.forEach(v => {
    // 🛡 Safety: locations may be undefined
    (v.locations || []).forEach(l => {
      if (!l?.country || l.country === "Unknown") return;

      countryMap[l.country] =
        (countryMap[l.country] || 0) + (l.count || 0);
    });
  });

  const data = Object.entries(countryMap).map(
    ([country, count]) => ({ country, count })
  );

  if (data.length === 0) {
    return (
      <div className="card">
        <h3>🌍 Visitors by Country</h3>
        <p>No country data available</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>🌍 Visitors by Country</h3>

      {/* 🔴 Height is REQUIRED for Recharts */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="country" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
