import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      company,
      phone,
      interest,
      message,
      leadVolume,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📩 Email to YOU
    await transporter.sendMail({
      from: `"MC3 Website" <${process.env.SMTP_USER}>`,
      to: "info@mc3grp.com",
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New MC3 Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Interest:</strong> ${interest || "-"}</p>
        <p><strong>Lead Volume:</strong> ${leadVolume || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 📬 Auto-reply to user
    await transporter.sendMail({
      to: email,
      from: `"MC3 Group" <${process.env.SMTP_USER}>`,
      subject: "We received your inquiry",
      html: `
        <p>Hey ${name},</p>
        <p>Got your message — appreciate you reaching out.</p>
        <p>We’ll take a look and get back to you shortly.</p>
        <p>– MC3 Group</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
