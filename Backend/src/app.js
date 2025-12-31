const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const contactRoutes = require("./routes/contact.routes");
const resumeRoutes = require("./routes/resume.routes");

const app = express();

/* ✅ REQUIRED FOR RENDER */
app.set("trust proxy", 1);

/* ✅ FINAL CORS FIX (LOCAL FRONTEND) */
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (origin === "http://localhost:5173") {
        return callback(null, true);
      }

      return callback(new Error("CORS blocked"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  })
);

/* ✅ FIXED PREFLIGHT HANDLER */
app.options("/*", cors());

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);

module.exports = app;
