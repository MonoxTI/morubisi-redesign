import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: { email?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.email || !isValidEmail(body.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: forward to your newsletter provider (Mailchimp, Resend Audiences,
  // Beehiiv, etc.) using NEWSLETTER_PROVIDER_API_KEY from process.env.
  console.log("Newsletter signup:", body.email);

  return NextResponse.json({ ok: true });
}
