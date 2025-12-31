const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);

const generateAccessToken = () =>
  jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "15m"
  });

const generateRefreshToken = () =>
  jwt.sign({ role: "admin" }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d"
  });

/* LOGIN */
exports.loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_EMAIL)
    return res.status(401).json({ message: "Invalid credentials" });

  if (!bcrypt.compareSync(password, hashedPassword))
    return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = generateAccessToken();
  const refreshToken = generateRefreshToken();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: "strict"
  });

  res.json({ accessToken });
};

/* REFRESH */
exports.refreshToken = (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);

  try {
    jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    res.json({ accessToken: generateAccessToken() });
  } catch {
    res.sendStatus(403);
  }
};

/* LOGOUT */
exports.logoutAdmin = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out" });
};
