const Visit = require("../models/Visit");

module.exports = async (req, res, next) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    // Free IP location (no key required)
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();

    const country = geo.country_name || "Unknown";
    const city = geo.city || "Unknown";

    let visit = await Visit.findOne({ date: today });

    if (!visit) {
      visit = await Visit.create({
        date: today,
        locations: [{ country, city }]
      });
    } else {
      visit.count += 1;

      const loc = visit.locations.find(
        l => l.country === country && l.city === city
      );

      if (loc) loc.count += 1;
      else visit.locations.push({ country, city });

      await visit.save();
    }
  } catch (err) {
    console.error("Visit tracking error:", err);
  }

  next();
};
