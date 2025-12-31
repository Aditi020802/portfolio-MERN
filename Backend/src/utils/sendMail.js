const nodemailer = require("nodemailer");

const sendMail = async ({ subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Notification" <${process.env.BREVO_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject,
      html
    });

    console.log("✅ Email sent via Brevo");
  } catch (err) {
    console.error("❌ Brevo mail error:", err.message);
  }
};

module.exports = sendMail;
