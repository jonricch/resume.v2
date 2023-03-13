import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON request body

// Serve static files
app.use(express.static(new URL("onlineresume", import.meta.url).pathname));

// Route for sending email
app.post("/send-email", async (req, res) => {
  try {
    const { to, subject, name, email, company, message } = req.body;
    if (!to) {
      return res.status(400).json({ error: "Email recipient is required" });
    }

    // Configure email server connection
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "jonrich.host@gmail.com",
        pass: "tqevetcmfkzeohtu",
      },
    });

    // Send email using nodemailer
    const mailOptions = {
      from: "jonrich.host@gmail.com",
      to: "jonricch.office@gmail.com",
      subject: subject || "Congrats you've got a new message",
      html: `
        <p>Name: ${name?.trim()}</p>
        <p>Email: ${email?.trim()}</p>
        <p>Company: ${message?.trim()}</p>
        <p>Message: ${company?.trim()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent:", mailOptions);
    res.set("Access-Control-Allow-Origin", "*"); // Set the CORS header
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).send("Email failed to send.");
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
