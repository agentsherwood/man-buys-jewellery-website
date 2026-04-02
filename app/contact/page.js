'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Name is required')
      setStatus('error')
      return
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Valid email is required')
      setStatus('error')
      return
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required')
      setStatus('error')
      return
    }

    try {
      // Mock submission - in production, this would call an API endpoint
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus('success')
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero hero-small">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="section-content contact-content">
          <div className="contact-form-wrapper">
            <h2>Send us a Message</h2>

            {status === 'success' && (
              <div className="message success-message">
                ✓ Thanks for reaching out! We'll be in touch soon.
              </div>
            )}

            {status === 'error' && (
              <div className="message error-message">
                ✗ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Other Ways to Connect</h3>
            <div className="contact-detail">
              <h4>Email</h4>
              <a href="mailto:hello@manbuysjewellery.com">
                hello@manbuysjewellery.com
              </a>
            </div>

            <div className="contact-detail">
              <h4>Social</h4>
              <div className="social-links">
                <a href="https://twitter.com/MBJewellery" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://instagram.com/MBJewellery" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="https://tiktok.com/@MBJewellery" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <h4>The App</h4>
              <p>
                Head straight to the app at{' '}
                <a href="https://man-buys-jewellery-eight.vercel.app">
                  man-buys-jewellery-eight.vercel.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-like section */}
      <section className="section alt-bg">
        <div className="section-content">
          <h2>Frequently Asked</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does shipping take?</h4>
              <p>
                Shipping is handled by the jewelry vendors. Typical delivery is 5-10 business days.
                Check the product page for specific timelines.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I return items?</h4>
              <p>
                Yes. Each vendor has their own return policy. Review before purchase.
                Most offers 30-day returns for unworn, unwashed items.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is my data private?</h4>
              <p>
                Absolutely. Your taste profile is yours alone. You control who sees it.
                We never sell your data.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer gift cards?</h4>
              <p>
                Gift cards are purchased directly through the app. They're a great way
                to let someone discover jewelry at their own pace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
