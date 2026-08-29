import { Resend } from "resend";

// The Resend SDK needs the Node runtime, not Edge.
export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL;
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const LIMITS = { name: 100, email: 200, message: 5000 };

/** Good enough to reject typos; real validation is the reply bouncing. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY || !TO) {
    console.error("Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return Response.json(
      { error: "The contact form isn't configured right now." },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Send a JSON body." }, { status: 400 });
  }

  const name = String(payload?.name ?? "").trim();
  const email = String(payload?.email ?? "").trim();
  const message = String(payload?.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email and message are all required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "That email address looks wrong." }, { status: 400 });
  }

  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return Response.json({ error: "That message is too long." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email, // hitting reply goes straight back to the sender
    subject: `Portfolio contact from ${name}`,
    text: `${name} <${email}>\n\n${message}`,
    html: `
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 4px">New portfolio message</h2>
        <p style="margin:0 0 16px;color:#52525b">
          From <strong>${escapeHtml(name)}</strong>
          &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;
        </p>
        <div style="white-space:pre-wrap;border-left:3px solid #7c3aed;padding-left:14px">
          ${escapeHtml(message)}
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return Response.json(
      { error: "Couldn't send that message. Try again, or email me directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
