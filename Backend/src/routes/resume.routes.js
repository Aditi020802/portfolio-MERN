const express = require("express");
const sendMail = require("../utils/sendMail");
const { resumeLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

/**
 * 🔔 Notify backend when resume is downloaded
 * POST /api/resume/notify-download
 */
router.post("/download", resumeLimiter, async (req, res) => {
  try {
    await sendMail({
      subject: "📄 Resume Downloaded",
      html: `
        <h3>Resume Download Alert</h3>
        <p>Someone downloaded your resume.</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
      `
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Resume email error:", err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
