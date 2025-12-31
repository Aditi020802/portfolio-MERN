const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const contactRoutes = require("./routes/contact.routes");
const resumeRoutes = require("./routes/resume.routes");
const trackVisit = require("./middleware/trackVisit");
const analyticsRoutes = require("./routes/analytics.routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(helmet());
app.use(express.json());
app.use(trackVisit);
app.use(cookieParser());

app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/admin", require("./routes/admin.routes"));

module.exports = app;
