const express = require("express");
const path = require("path");
const fs = require("fs");
const sendMail = require("../utils/sendMail");
const { resumeLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.get("/download", resumeLimiter, async (req, res) => {
  try {
    await sendMail({
      subject: "📄 Resume Downloaded",
      html: `
        <h3>Resume Download Alert</h3>
        <p>Someone downloaded your resume.</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
      `
    });

    const filePath = path.resolve(
      __dirname,
      "../assets/resume.pdf"
    );

    // 🔴 IMPORTANT: check file exists
    if (!fs.existsSync(filePath)) {
      console.error("Resume file not found at:", filePath);
      return res.status(404).send("Resume file not found");
    }

    res.download(filePath, "Aditi_Modhvadiya_Resume.pdf");
  } catch (err) {
    console.error("Resume download error:", err);
    res.status(500).send("Error downloading resume");
  }
});

module.exports = router;
