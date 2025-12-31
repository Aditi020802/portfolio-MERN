const express = require("express");
const {
  loginAdmin,
  refreshToken,
  logoutAdmin
} = require("../controllers/admin.controller");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/refresh", refreshToken);
router.post("/logout", logoutAdmin);

module.exports = router;
