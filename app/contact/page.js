import ContactForm from '../../components/ContactForm'
import Card from '../../components/Card'

export const metadata = {
  title: 'Contact',
  description:
    'Contact Man Buys Jewellery, send a message through Formspree, and find the brand on social.',
  openGraph: {
    title: 'Contact | Man Buys Jewellery',
    description: 'Send a message and connect with Man Buys Jewellery on social.',
    url: 'https://man-buys-jewellery.vercel.app/contact',
    images: ['/og-image.svg'],
  },
}

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container narrow-stack center">
          <p className="eyebrow">Contact</p>
          <h1>Questions, feedback, or partnership ideas</h1>
          <p>Send a message and we&apos;ll get back to you.</p>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container two-column-grid contact-grid">
          <Card title="Send us a message">
            <ContactForm />
          </Card>

          <Card title="Elsewhere" tone="accent">
            <div className="contact-meta">
              <p>
                Email:
                {' '}
                <a href="mailto:hello@manbuysjewellery.com">hello@manbuysjewellery.com</a>
              </p>
              <p>
                Instagram:
                {' '}
                <a href="https://instagram.com/manbuysjewellery" target="_blank" rel="noreferrer">
                  @manbuysjewellery
                </a>
              </p>
              <p>
                TikTok:
                {' '}
                <a href="https://tiktok.com/@manbuysjewellery" target="_blank" rel="noreferrer">
                  @manbuysjewellery
                </a>
              </p>
              <p>
                Twitter:
                {' '}
                <a href="https://twitter.com/manbuysjewel" target="_blank" rel="noreferrer">
                  @manbuysjewel
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
