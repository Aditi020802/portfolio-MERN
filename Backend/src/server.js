const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const app = require("./app");

require("./cron/dailyJob");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(console.error);

app.listen(process.env.PORT || 5050, () =>
  console.log("🚀 Server running")
);
