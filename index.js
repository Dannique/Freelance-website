import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get(["/", "/nl"], (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/", async (req, res) => {
  const {
    name,
    email,
    message,
    "g-recaptcha-response": recaptchaToken,
  } = req.body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Your reCAPTCHA secret key
  const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    pool: true,
  });

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
    // Parallelize reCAPTCHA validation and email sending
    const [recaptchaResult] = await Promise.all([
      fetch(verificationUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${recaptchaToken}`,
      }).then((res) => res.json()),
      transporter.verify(), // Ensure transporter is ready
    ]);

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return res.status(400).json({ error: "reCAPTCHA validation failed." });
    }

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
