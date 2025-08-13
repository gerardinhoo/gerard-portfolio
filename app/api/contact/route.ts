import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// very light validation
function isEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

export async function POST(req: Request) {
  try {
    const {
      name = '',
      email = '',
      message = '',
      website = '',
    } = await req.json();

    // honeypot: bots often fill hidden "website"
    if (website) return NextResponse.json({ ok: true });

    if (!isEmail(email) || !message.trim()) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const from =
      process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';
    const to = process.env.CONTACT_TO_EMAIL || 'eklugerard018@gmail.com';

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
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

    await resend.emails.send({
      from: 'Portfolio <contact@gerardeklu.dev>',
      to: email, // visitor
      subject: 'Thanks for reaching out!',
      html: `Got your message — I’ll reply soon.`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact api error', err);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
