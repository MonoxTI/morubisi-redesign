import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  organisation?: string;
  enquiryType?: string;
  email?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, enquiryType, organisation } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: wire up real delivery — e.g. an SMTP provider via nodemailer,
  // or a transactional email API (Resend, SendGrid, Postmark). Credentials
  // read from process.env (see .env.local: SMTP_HOST / SMTP_USER / SMTP_PASS).
  console.log("New contact enquiry:", {
    name,
    organisation,
    enquiryType,
    email,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
