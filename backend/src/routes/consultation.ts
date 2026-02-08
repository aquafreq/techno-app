import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Kitchen Studio" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO,
            subject: "Нова заявка за консултация",
            html: `
        <h3>Нова заявка</h3>
        <p><b>Име:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Телефон:</b> ${phone}</p>
        <p><b>Съобщение:</b><br/>${message}</p>
      `,
        });

        res.json({ success: true });
    } catch (error) {
        console.error("Mail error:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

export default router;
