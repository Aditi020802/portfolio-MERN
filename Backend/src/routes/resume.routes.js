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
        <p>Your resume was downloaded.</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
      `
    });

    // ✅ ABSOLUTE PATH (Render-safe)
    const filePath = path.resolve(
      __dirname,
      "..",
      "assets",
      "resume.pdf"
    );

    // 🔍 Debug log (IMPORTANT)
    console.log("Looking for resume at:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("❌ Resume file NOT FOUND");
      return res.status(404).send("Resume file not found");
    }

    res.download(filePath, "Aditi_Modhvadiya_Resume.pdf");
  } catch (err) {
    console.error("❌ Resume download error:", err);
    res.status(500).send("Error downloading resume");
  }
});

module.exports = router;
