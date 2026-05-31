import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, location, message } = body;

    await resend.emails.send({
      from: "CRDP Inquiry <onboarding@resend.dev>",
      to: "crdpartners2020@gmail.com",
      replyTo: email,
      subject: `New Project Inquiry — ${projectType || "General"} · ${location || ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #15130F;">
          <div style="border-bottom: 1px solid #D9CDB8; padding-bottom: 24px; margin-bottom: 24px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #B08D4F; margin: 0 0 8px;">
              California Residential Development Partners
            </p>
            <h1 style="font-size: 28px; font-weight: 300; margin: 0;">New Project Inquiry</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #8C8475; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 16px; font-weight: 300;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #8C8475;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 16px; font-weight: 300;"><a href="mailto:${email}" style="color: #B08D4F;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #8C8475;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 16px; font-weight: 300;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #8C8475;">Project Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 16px; font-weight: 300;">${projectType || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #8C8475;">Location</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F2EEE6; font-size: 16px; font-weight: 300;">${location || "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 28px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #8C8475; margin: 0 0 10px;">Message</p>
            <p style="font-size: 15px; font-weight: 300; line-height: 1.8; color: #3A352D; margin: 0;">${message || "—"}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #D9CDB8;">
            <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #8C8475; margin: 0;">
              californiardp.com · Los Angeles, California
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
