const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const contactRoutes = require("./routes/contact.routes");
const resumeRoutes = require("./routes/resume.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const adminRoutes = require("./routes/admin.routes");

const trackVisit = require("./middleware/trackVisit");

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://your-frontend.netlify.app"
        : "http://localhost:5173",
    credentials: true
  })
);

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

/* ✅ TRACK VISIT ONLY ON HOMEPAGE */
app.get("/", trackVisit, (req, res) => {
  res.send("Backend running");
});

/* ❌ DO NOT track API calls */
app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
