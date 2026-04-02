'use client'

import Link from 'next/link'
import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-icon">💎</span>
          <span className="logo-text">Man Buys Jewellery</span>
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/how-it-works" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item nav-cta">
            <a
              href="https://man-buys-jewellery-eight.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Swiping
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
