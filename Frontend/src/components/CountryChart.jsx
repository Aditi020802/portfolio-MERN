import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CountryChart({ visits }) {
  const countryMap = {};

  visits.forEach(v => {
    v.locations.forEach(l => {
      if (l.country !== "Unknown") {
        countryMap[l.country] =
          (countryMap[l.country] || 0) + l.count;
      }
    });
  });

  const data = Object.entries(countryMap).map(
    ([country, count]) => ({ country, count })
  );

  return (
    <div className="card">
      <h3>🌍 Visitors by Country</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
