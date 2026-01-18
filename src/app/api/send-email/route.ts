'use server';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error('RESEND_API_KEY is not set in environment variables.');
}

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    console.log('Form Data Received:', { name, email, message });

    if (!name || !email || !message) {
      console.error('Missing fields!');
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

   const response = await resend.emails.send({
  from: 'Portfolio Contact Form <onboarding@resend.dev>',
  to: 'codelevo123@gmail.com',
  subject: `New message from ${name}`,
  replyTo: email,
  text: `Message from ${name} (${email}):\n\n${message}`,
});

    console.log('Resend Response:', response);

    return NextResponse.json({ success: true, data: response });
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ error: 'Server error occurred' }, { status: 500 });
  }
}
