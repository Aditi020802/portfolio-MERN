const Contact = require("../models/Contact");
const sendMail = require("../utils/sendMail");

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ message: "All fields required" });

  await Contact.create({ name, email, message });

  await sendMail({
    subject: "📩 New Contact Message",
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p>${message}</p>
    `
  });

  res.status(201).json({ message: "Message sent successfully 🚀" });
};
