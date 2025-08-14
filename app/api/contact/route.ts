import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs'; // ensure Node runtime (not Edge)

function isEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: 'Bad JSON' }, { status: 400 });
    }

    const { name = '', email = '', message = '', website = '' } = body;

    // Honeypot — bots often fill hidden "website" field
    if (website) return NextResponse.json({ ok: true });

    if (!isEmail(email) || !message.trim()) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Server not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const from =
      process.env.CONTACT_FROM_EMAIL || 'Portfolio <contact@gerardeklu.dev>';
    const to = process.env.CONTACT_TO_EMAIL || 'eklugerard@yahoo.com';

    // Message to you
    await resend.emails.send({
      from,
      to,
      replyTo: email, // <-- user’s email appears in your client’s Reply-To
      subject: `Portfolio message from ${name || 'Visitor'}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5">
          <h2 style="margin:0 0 12px">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name || '—'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border:none;height:1px;background:#eee;margin:16px 0" />
          <pre style="white-space:pre-wrap;font:inherit">${message}</pre>
        </div>
      `,
      text: `From: ${name || 'Visitor'} <${email}>\n\n${message}`,
    });

    // Auto-reply to the visitor (optional)
    await resend.emails.send({
      from, // use same verified from
      to: email, // visitor
      subject: 'Thanks for reaching out!',
      html: `Thanks for your message — I’ll reply soon.`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact api error', err);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
