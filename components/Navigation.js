import Link from 'next/link'
import Button from './Button'
import BrandMark from './BrandMark'

export default function Navigation() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="brand-lockup">
          <BrandMark />
          <span className="brand-copy">
            <strong className="brand-name">Man Buys Jewellery</strong>
            <span className="brand-tag">She swipes. You know.</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/how-it-works" className="nav-link">
            How It Works
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Button href="https://man-buys-jewellery-eight.vercel.app">Start Swiping</Button>
        </nav>
      </div>
    </header>
  )
}
