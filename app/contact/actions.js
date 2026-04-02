'use server'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContactForm(formData) {
  const payload = {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    message: String(formData.get('message') || '').trim(),
  }

  const errors = {}

  if (!payload.name) {
    errors.name = 'Name is required.'
  }

  if (!payload.email) {
    errors.email = 'Email is required.'
  } else if (!isValidEmail(payload.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!payload.message) {
    errors.message = 'Message is required.'
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@manbuysjewellery.com'
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!resendApiKey) {
    return {
      ok: true,
      mode: 'local',
      message: 'Message captured locally. Set RESEND_API_KEY to enable delivery.',
    }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `New contact from ${payload.name}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      return {
        ok: false,
        formError: 'We could not send your message right now. Please email hello@manbuysjewellery.com.',
      }
    }

    return {
      ok: true,
      mode: 'email',
      message: 'Thanks. We received your message and will get back to you soon.',
    }
  } catch (error) {
    return {
      ok: false,
      formError: 'We could not send your message right now. Please email hello@manbuysjewellery.com.',
    }
  }
}
