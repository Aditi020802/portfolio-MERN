const Visit = require("../models/Visit");
const sendMail = require("./sendMail");

module.exports = async () => {
  const today = new Date().toISOString().split("T")[0];
  const visit = await Visit.findOne({ date: today });

  if (!visit) return;

  const locationsHtml = visit.locations
    .map(
      l => `<li>${l.city}, ${l.country} — ${l.count}</li>`
    )
    .join("");

  await sendMail({
    subject: "📊 Daily Website Visitor Report",
    html: `
      <h3>Daily Website Report</h3>
      <p><b>Date:</b> ${today}</p>
      <p><b>Total Visitors:</b> ${visit.count}</p>
      <h4>Locations</h4>
      <ul>${locationsHtml}</ul>
    `
  });
};
