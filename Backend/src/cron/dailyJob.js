const cron = require("node-cron");
const sendDailyReport = require("../utils/dailyReport");

// Every day at 11:59 PM
cron.schedule("59 23 * * *", () => {
  sendDailyReport();
});
