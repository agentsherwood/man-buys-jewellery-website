import Link from 'next/link'
import BrandMark from './BrandMark'

const socialLinks = [
  { href: 'https://instagram.com/manbuysjewellery', label: 'Instagram' },
  { href: 'https://tiktok.com/@manbuysjewellery', label: 'TikTok' },
  { href: 'https://twitter.com/manbuysjewel', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="brand-lockup">
              <BrandMark />
              <div className="brand-copy">
                <strong className="brand-name">Man Buys Jewellery</strong>
                <span className="brand-tag">She swipes. You know.</span>
              </div>
            </div>
            <p>Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.</p>
            <div className="social-row">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Pages</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4>Actions</h4>
            <div className="footer-links">
              <a href="https://man-buys-jewellery-eight.vercel.app">Start Swiping</a>
              <Link href="/how-it-works">See Her Taste</Link>
              <a href="mailto:hello@manbuysjewellery.com">Email Us</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <div className="footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Man Buys Jewellery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
