import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: "eu-north-1",
  credentials: {
    accessKeyId: "AKIAXJDRPHKX4WFJLJPT",
    secretAccessKey: "BN7zcxPVvmqG+aL+gY/T6umPKPhZT6EcQPDL0LNcI3VM",
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organization, role, source, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>
        <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Organization:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${organization || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Role:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${role || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Source:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${source || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Subject:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #6b7280; margin-bottom: 10px;">Message:</p>
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="color: #111827; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
        <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
          This email was sent from the VIRAM website contact form.
        </p>
      </div>
    `;

    const command = new SendEmailCommand({
      Source: "contact@viram.uk",
      Destination: {
        ToAddresses: ["contact@viram.uk"],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `VIRAM Contact: ${subject}`,
        },
        Body: {
          Html: {
            Data: emailHtml,
          },
        },
      },
    });

    await sesClient.send(command);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Email failed: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}
