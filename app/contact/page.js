import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact',
  description:
    'Contact Man Buys Jewellery for support, partnerships, or product questions.',
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Questions, support, or partnerships.</h1>
          <p className="lead">
            Send us a note and we&apos;ll get back to you. For direct support, email hello@manbuysjewellery.com.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-card">
            <h2>Send a message</h2>
            <p>Tell us what you need and we&apos;ll route it to the right person.</p>
            <ContactForm />
          </div>
          <div className="contact-card">
            <h2>Reach us directly</h2>
            <p>
              Support email:
              {' '}
              <a href="mailto:hello@manbuysjewellery.com">hello@manbuysjewellery.com</a>
            </p>
            <p>
              Instagram:
              {' '}
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                @manbuysjewellery
              </a>
            </p>
            <p>
              TikTok:
              {' '}
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                @manbuysjewellery
              </a>
            </p>
            <p>
              Pinterest:
              {' '}
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                Man Buys Jewellery
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
