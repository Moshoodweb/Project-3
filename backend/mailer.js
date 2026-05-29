import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
  secure: process.env.SMTP_SECURE === "true",
  auth: process.env.SMTP_USER
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    : undefined,
});

export async function sendMail({ to, subject, text, html, from }) {
  const mailOptions = {
    from: from || process.env.FROM_EMAIL || process.env.SMTP_USER,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
}

export default sendMail;

/*
Usage:
  Set environment variables in a .env file:
    SMTP_HOST=smtp.example.com
    SMTP_PORT=587
    SMTP_USER=your-user
    SMTP_PASS=your-pass
    FROM_EMAIL="Your App <no-reply@example.com>"

  Then import and call:
    import { sendMail } from './mailer.js';
    await sendMail({ to: 'user@example.com', subject: 'Welcome', text: 'Hello' });
*/
