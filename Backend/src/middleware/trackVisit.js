const Visit = require("../models/Visit");

module.exports = async (req, res, next) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    let country = "Unknown";
    let city = "Unknown";

    // ❌ Disable Geo API in production (recommended)
    if (process.env.NODE_ENV !== "production") {
      try {
        const ip =
          req.headers["x-forwarded-for"]?.split(",")[0] ||
          req.socket.remoteAddress;

        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const contentType = geoRes.headers.get("content-type");

        if (
          geoRes.ok &&
          contentType &&
          contentType.includes("application/json")
        ) {
          const geo = await geoRes.json();
          country = geo.country_name || "Unknown";
          city = geo.city || "Unknown";
        }
      } catch (e) {
        console.error("Geo lookup failed:", e.message);
      }
    }

    let visit = await Visit.findOne({ date: today });

    if (!visit) {
      await Visit.create({
        date: today,
        count: 1,
        locations: [{ country, city, count: 1 }]
      });
    } else {
      visit.count += 1;

      const loc = visit.locations.find(
        l => l.country === country && l.city === city
      );

      if (loc) loc.count += 1;
      else visit.locations.push({ country, city, count: 1 });

      await visit.save();
    }
  } catch (err) {
    console.error("Visit tracking error:", err.message);
  }

  next();
};
