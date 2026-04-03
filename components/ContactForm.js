'use client'

import { useState } from 'react'
import Button from './Button'

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!formEndpoint) {
      event.currentTarget.reset()
      setStatus('success')
      return
    }

    setStatus('loading')
    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Unable to submit the form right now.')
      }

      event.currentTarget.reset()
      setStatus('success')
    } catch (submissionError) {
      setStatus('error')
      setError(submissionError.message)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Name</span>
        <input type="text" name="name" required minLength="2" />
      </label>
      <label className="form-field">
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label className="form-field">
        <span>Message</span>
        <textarea name="message" rows="6" required />
      </label>
      <input type="hidden" name="_subject" value="MBJ marketing site contact form" />
      <Button as="button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Get Started'}
      </Button>
      {status === 'success' ? (
        <p className="form-message success">
          Thanks for reaching out. Your message has been sent successfully.
        </p>
      ) : null}
      {status === 'error' ? <p className="form-message error">{error}</p> : null}
      {!formEndpoint ? (
        <p className="form-note">
          Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to enable live Formspree submissions in deployment.
        </p>
      ) : null}
    </form>
  )
}
