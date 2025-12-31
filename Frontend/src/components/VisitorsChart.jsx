import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function VisitorsChart({ visits = [] }) {
  // prevent crash
  if (!Array.isArray(visits) || visits.length === 0) {
    return (
      <div className="card">
        <h3>📈 Daily Visitors</h3>
        <p>No visit data available</p>
      </div>
    );
  }

  const labels = visits.map(v => v.date ?? "");
  const counts = visits.map(v => Number(v.count) || 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Visitors",
        data: counts,
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 }
      }
    }
  };

  return (
    <div className="card">
      <h3>📈 Daily Visitors</h3>

      {/* height is REQUIRED */}
      <div style={{ height: 300 }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
