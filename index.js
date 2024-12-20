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
  console.log("POST request received:", req.body);

  // Check for unexpected properties
  if (req.body["g-recaptcha-response"]) {
    console.error(
      "Unexpected reCAPTCHA token found:",
      req.body["g-recaptcha-response"]
    );
    return res
      .status(400)
      .json({ error: "Unexpected reCAPTCHA token in request." });
  }
  const { name, email, message } = req.body;

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  //   pool: true,
  // });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
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
    // Ensure transporter is ready
    await transporter.verify();
    console.log("Email service ready!");
    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    console.error("Email service failed:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.get("/cv", (req, res) => {
  res.sendFile(__dirname + "/public/CV/Dannique_de_Klerk_CV.pdf");
});

app.get("/cv-nl", (req, res) => {
  res.sendFile(__dirname + "/public/CV/Dannique_de_Klerk_CV_NL.pdf");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
