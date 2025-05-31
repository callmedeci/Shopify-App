'use server';

import { ContactFormValues } from '../types';

export async function sendContactMessage(formData: ContactFormValues) {
  try {
    const { email, name, message } = formData;

    const payload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`,
    };

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response) throw new Error('Failed to send message');
  } catch (error) {
    throw error;
  }
}
