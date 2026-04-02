import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="https://man-buys-jewellery-eight.vercel.app" target="_blank" rel="noopener noreferrer">
                Launch App
              </a>
            </li>
            <li>
              <Link href="/how-it-works">How It Works</Link>
            </li>
            <li>
              <a href="https://man-buys-jewellery-eight.vercel.app/pricing" target="_blank" rel="noopener noreferrer">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href="https://blog.manbuysjewellery.com" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://twitter.com/MBJewellery" target="_blank" rel="noopener noreferrer" title="Twitter">
              𝕏
            </a>
            <a href="https://instagram.com/MBJewellery" target="_blank" rel="noopener noreferrer" title="Instagram">
              📷
            </a>
            <a href="https://tiktok.com/@MBJewellery" target="_blank" rel="noopener noreferrer" title="TikTok">
              🎵
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Man Buys Jewellery. All rights reserved.</p>
        <p>Your taste. Shared.</p>
      </div>
    </footer>
  )
}
