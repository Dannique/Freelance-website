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

// app.post("/", async (req, res) => {
//   const {
//     name,
//     email,
//     message,
//     "g-recaptcha-response": recaptchaToken,
//   } = req.body;

//   // const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//   // const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";

//   // Validate environment variable
//   // if (!secretKey) {
//   //   console.error("reCAPTCHA Secret Key is missing. Check your .env file.");
//   //   return res
//   //     .status(500)
//   //     .json({ error: "Server configuration error. Missing secret key." });
//   // }

//   // console.log("reCAPTCHA Secret Key:", secretKey);
//   // console.log("Received reCAPTCHA Token from Client:", recaptchaToken);

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     pool: true,
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER, // Your destination email
//     subject: "New Contact Form Submission Portfolio",
//     html: `
//       <h4><u>Name</u>: ${name} </h4>
//       <h4><u>Email</u>: ${email}</h4>
//       <h4><u>Message</u>:</h4>
//       <p>${message}</p>
//     `,
//   };

//   try {
//     // Parallelize reCAPTCHA validation and email sending
//     // const [recaptchaResult] = await Promise.all([
//     //   fetch(verificationUrl, {
//     //     method: "POST",
//     //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     //     body: `secret=${secretKey}&response=${recaptchaToken}`,
//     //   }).then((res) => res.json()),
//     //   transporter.verify(), // Ensure transporter is ready
//     // ]);
//     // console.log("Full reCAPTCHA Response:", recaptchaResult);
//     // console.log("Received reCAPTCHA Token:", recaptchaToken);
//     // if (
//     //   !recaptchaResult.success ||
//     //   recaptchaResult.action !== "submit_form" ||
//     //   recaptchaResult.score < 0.5
//     // ) {
//     //   console.error("reCAPTCHA validation failed:", recaptchaResult);
//     //   return res.status(400).json({
//     //     error: "reCAPTCHA validation failed.",
//     //     details: recaptchaResult,
//     //   });
//     // }
//     // console.log("reCAPTCHA Verified Successfully:", recaptchaResult);

//     // let recaptchaResult;
//     // try {
//     //   const response = await fetch(verificationUrl, {
//     //     method: "POST",
//     //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     //     body: `secret=${secretKey}&response=${recaptchaToken}`,
//     //   });
//     //   recaptchaResult = await response.json();
//     // } catch (err) {
//     //   console.error("Error contacting Google reCAPTCHA API:", err);
//     //   return res.status(500).json({
//     //     error: "Failed to validate reCAPTCHA. Please try again later.",
//     //   });
//     // }

//     // console.log(
//     //   "Full reCAPTCHA Response:",
//     //   JSON.stringify(recaptchaResult, null, 2)
//     // );

//     // if (
//     //   !recaptchaResult.success ||
//     //   recaptchaResult.action !== "submit" ||
//     //   recaptchaResult.score < 0.5 ||
//     //   recaptchaResult.hostname !== "dannique.me"
//     // ) {
//     //   console.error("reCAPTCHA validation failed:", recaptchaResult);
//     //   return res.status(400).json({
//     //     error: "reCAPTCHA validation failed.",
//     //     details: recaptchaResult,
//     //   });
//     // }

//     // console.log("reCAPTCHA Verified Successfully:", recaptchaResult);

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error during form submission:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// });

// Email Config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact Form Endpoint
app.post("/", async (req, res) => {
  const {
    name,
    email,
    message,
    "g-recaptcha-response": recaptchaToken,
  } = req.body;

  // Verify reCAPTCHA Token
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
  const recaptchaResponse = await fetch(recaptchaUrl, { method: "POST" }).then(
    (res) => res.json()
  );

  console.log("reCAPTCHA Response:", recaptchaResponse);

  if (!recaptchaResponse.success || recaptchaResponse.score < 0.5) {
    return res.status(400).json({
      error: "reCAPTCHA validation failed.",
      details: recaptchaResponse,
    });
  }

  // Send Email
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
      <h4>Name: ${name}</h4>
      <h4>Email: ${email}</h4>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error during email sending:", error);
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
