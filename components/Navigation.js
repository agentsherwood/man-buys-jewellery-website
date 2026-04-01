import Link from 'next/link'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Man Buys Jewellery
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/features" className="nav-link">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/testimonials" className="nav-link">
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://man-buys-jewellery-eight.vercel.app" className="nav-link nav-cta">
              Open App
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
