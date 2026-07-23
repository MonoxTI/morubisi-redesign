export interface ContactPayload {
  name: string;
  organisation?: string;
  enquiryType: string;
  email: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error ?? "Failed to submit enquiry.");
  }

  return res.json();
}

export async function subscribeToNewsletter(email: string) {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error ?? "Failed to subscribe.");
  }

  return res.json();
}
