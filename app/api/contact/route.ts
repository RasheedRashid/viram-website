import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "email-smtp.eu-north-1.amazonaws.com",
  port: 587,
  secure: false,
  auth: {
    user: "AKIAXJDRPHKX4WFJLJPT",
    pass: "BN7zcxPVvmqG+aL+gY/T6umPKPhZT6EcQPDL0LNcI3VM",
  },
});

// Helper function to escape CSV values
function escapeCSV(value: string): string {
  if (!value) return "";
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

// Generate CSV content
function generateCSV(data: Record<string, string>): string {
  const headers = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Company/Organization",
    "Country/Region",
    "Gender",
    "Role",
    "Workshop",
    "Attendance Mode",
    "How Did You Hear",
    "Registration Date",
  ];

  const values = [
    escapeCSV(data.firstName || ""),
    escapeCSV(data.lastName || ""),
    escapeCSV(data.email || ""),
    escapeCSV(data.phone || ""),
    escapeCSV(data.company || ""),
    escapeCSV(data.country || ""),
    escapeCSV(data.gender || ""),
    escapeCSV(data.role || ""),
    escapeCSV(data.workshop || ""),
    escapeCSV(data.attendanceMode || ""),
    escapeCSV(data.howDidYouHear || ""),
    escapeCSV(new Date().toLocaleString("en-GB")),
  ];

  return headers.join(",") + "\n" + values.join(",");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      country,
      gender,
      role,
      workshop,
      attendanceMode,
      howDidYouHear,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !country || !gender || !role || !workshop || !attendanceMode) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;
    const timestamp = new Date().toISOString().split("T")[0];

    // Generate CSV
    const csvContent = generateCSV(body);

    // Attendance mode styling
    const isOnline = attendanceMode === "Online";
    const attendanceBadgeColor = isOnline ? "#3b82f6" : "#10b981"; // Blue for online, Green for in-person
    const attendanceIcon = isOnline ? "💻" : "📍";

    const mailOptions = {
      from: "contact@viram.uk",
      to: "contact@viram.uk",
      replyTo: email,
      subject: `VIRAM Workshop Registration: ${fullName} - ${workshop} (${attendanceMode})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Workshop Registration</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">VIRAM Workshop Registration Form</p>
          </div>
          <div style="background: #f9fafb; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
              <h2 style="color: #9333ea; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #f3e8ff; padding-bottom: 10px;">Personal Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 40%;">Full Name:</td>
                  <td style="padding: 8px 0; color: #111827; font-weight: 600;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #9333ea;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
                  <td style="padding: 8px 0; color: #111827;">${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Gender:</td>
                  <td style="padding: 8px 0; color: #111827;">${gender}</td>
                </tr>
              </table>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
              <h2 style="color: #9333ea; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #f3e8ff; padding-bottom: 10px;">Professional Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 40%;">Company/Organization:</td>
                  <td style="padding: 8px 0; color: #111827;">${company || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Country/Region:</td>
                  <td style="padding: 8px 0; color: #111827;">${country}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Role:</td>
                  <td style="padding: 8px 0; color: #111827;">${role}</td>
                </tr>
              </table>
            </div>

            <div style="background: linear-gradient(135deg, #fdf4ff 0%, #fce7f3 100%); padding: 20px; border-radius: 8px; border: 1px solid #f5d0fe; margin-bottom: 20px;">
              <h2 style="color: #9333ea; margin: 0 0 15px 0; font-size: 18px;">Workshop Selected</h2>
              <p style="color: #111827; font-size: 16px; font-weight: 600; margin: 0 0 12px 0; padding: 12px; background: white; border-radius: 6px;">${workshop}</p>
              
              <div style="display: inline-block; background: ${attendanceBadgeColor}; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">
                ${attendanceIcon} ${attendanceMode}
              </div>
              ${isOnline ? '<p style="color: #6b7280; font-size: 13px; margin: 12px 0 0 0; font-style: italic;">📧 Meeting link will be shared via email before the workshop</p>' : ''}
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 40%;">How did they hear about us:</td>
                  <td style="padding: 8px 0; color: #111827;">${howDidYouHear || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Registration Date:</td>
                  <td style="padding: 8px 0; color: #111827;">${new Date().toLocaleString("en-GB")}</td>
                </tr>
              </table>
            </div>

            <p style="color: #6b7280; font-size: 12px; margin-top: 20px; text-align: center;">
              📎 CSV file attached for your records
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `viram-registration-${firstName.toLowerCase()}-${lastName.toLowerCase()}-${timestamp}.csv`,
          content: csvContent,
          contentType: "text/csv",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Registration submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Registration failed: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}
