const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your destination email
    subject: "New Contact Form Submission Portfolio",
    html: `
    <h4><u>Name</u>: ${name} </h4>
    <h4><u>Email</u>: ${email}</h4>
    <h4><u>Message</u>:</h4>
    <p>${message}</p>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
    console.log(message);
  } catch (error) {
    res.status(500).json({ error: "Error sending email: " + error.message });
    console.log(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
