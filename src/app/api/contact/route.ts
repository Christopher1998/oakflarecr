import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact";

const projectLabels: Record<string, string> = {
  website: "Website",
  "web-app": "Web Application",
  "mobile-app": "Mobile Application",
  backend: "Backend / API",
  other: "Something else",
};

const budgetLabels: Record<string, string> = {
  "under-1000": "Under $1,000",
  "1000-2500": "$1,000 — $2,500",
  "2500-5000": "$2,500 — $5,000",
  "5000-plus": "$5,000+",
  "not-sure": "Not sure yet",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Please check the information and try again.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      company,
      projectType,
      budget,
      message,
      website,
      startedAt,
    } = result.data;

    /*
     * Honeypot.
     * Real users never see this field.
     */
    if (website) {
      return NextResponse.json({ success: true });
    }

    /*
     * Reject forms submitted unrealistically fast.
     * Helps catch simple automated bots.
     */
if (Date.now() - startedAt < 2000) {
  return NextResponse.json({ success: true });
}

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !contactToEmail || !contactFromEmail) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

const resend = new Resend(resendApiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

 const { error } = await resend.emails.send({
  from: contactFromEmail,
  to: contactToEmail,
      replyTo: email,

      subject: `New Oakflare inquiry — ${projectLabels[projectType]}`,

      html: `
        <div
          style="
            background:#0d0d0c;
            color:#f3f0e8;
            font-family:Arial,Helvetica,sans-serif;
            padding:40px;
          "
        >
          <div
            style="
              max-width:640px;
              margin:0 auto;
            "
          >
            <p
              style="
                color:#e87932;
                font-size:12px;
                letter-spacing:2px;
                text-transform:uppercase;
              "
            >
              Oakflare Project Inquiry
            </p>

            <h1
              style="
                font-size:32px;
                margin:24px 0 40px;
              "
            >
              New project inquiry
            </h1>

            <div
              style="
                border-top:1px solid #333;
                padding-top:24px;
              "
            >
              <p><strong>Name</strong><br />${safeName}</p>

              <p><strong>Email</strong><br />${safeEmail}</p>

              <p><strong>Company</strong><br />${safeCompany}</p>

              <p>
                <strong>Project type</strong><br />
                ${projectLabels[projectType]}
              </p>

              <p>
                <strong>Budget</strong><br />
                ${budgetLabels[budget]}
              </p>

              <p>
                <strong>Project description</strong><br /><br />
                ${safeMessage}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "We couldn't send your inquiry. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact endpoint error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}