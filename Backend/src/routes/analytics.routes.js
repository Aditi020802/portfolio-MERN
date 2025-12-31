const express = require("express");
const Visit = require("../models/Visit");
const Resume = require("../models/ResumeDownload");

const router = express.Router();

/* Daily visitors (PUBLIC) */
router.get("/visits", async (req, res) => {
  try {
    const data = await Visit.find().sort({ date: 1 });
    res.json(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error("Visits API error:", err.message);
    res.status(500).json([]);
  }
});

/* Resume downloads */
router.get("/resume-downloads", async (req, res) => {
  try {
    const data = await Resume.findOne();
    res.json({ count: data?.count || 0 });
  } catch (err) {
    res.status(500).json({ count: 0 });
  }
});

module.exports = router;
