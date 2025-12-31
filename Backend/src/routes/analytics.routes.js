const express = require("express");
const Visit = require("../models/Visit");
const Resume = require("../models/ResumeDownload");
const auth = require("../middleware/auth");

const router = express.Router();

/* Daily visitors */
router.get("/visits", async (req, res) => {
  const data = await Visit.find().sort({ date: 1 });
  res.json(data);
});

/* Resume downloads */
router.get("/resume-downloads", async (req, res) => {
  const data = await Resume.findOne();
  res.json({ count: data?.count || 0 });
});

router.get("/visits", auth, async (req, res) => {
  const data = await Visit.find();
  res.json(data);
});

module.exports = router;
