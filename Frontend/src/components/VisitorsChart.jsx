import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function VisitorsChart({ visits }) {
  const data = {
    labels: visits.map(v => v.date),
    datasets: [
      {
        label: "Daily Visitors",
        data: visits.map(v => v.count),
        borderColor: "#6366f1",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="card">
      <h3>📈 Daily Visitors</h3>
      <Line data={data} />
    </div>
  );
}
