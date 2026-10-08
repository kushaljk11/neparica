import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, honeypot } = body;

    // Honeypot check for spam prevention
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a message with at least 10 characters detailing your inquiry.' },
        { status: 400 }
      );
    }

    // Log received lead on server (in production, integrate with email SMTP or CRM)
    console.log('[Contact Form Submission Received]', {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || 'N/A',
      service: service || 'General Inquiry',
      message: message.trim(),
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out to Neparica! Our team will review your inquiry and follow up within 1 business day.'
    });
  } catch (err: unknown) {
    console.error('Contact form submission error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
