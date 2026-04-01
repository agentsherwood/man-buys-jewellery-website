export const metadata = {
  title: 'Home - Man Buys Jewellery | Perfect Gifts She\'ll Love',
  description: 'Discover stunning jewelry gifts tailored to her unique taste with our AI-powered curation.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1 className="hero-title">The Perfect Jewelry Gift, Discovered</h1>
          <p className="hero-tagline">Stop guessing what she'll love. Discover jewelry that matches her unique taste—curated by experts, verified by her.</p>
          
          {/* Primary CTA */}
          <div className="hero-cta">
            <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-primary btn-large">
              Start Discovering
            </a>
            <p className="cta-subtext">Free to explore. Premium options available.</p>
          </div>

          {/* Secondary CTA */}
          <a href="#features" className="btn-text-link">Learn how it works →</a>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-proposition">
        <div className="value-container">
          <h2>Why Choose Man Buys Jewellery?</h2>
          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>AI-Powered Curation</h3>
              <p>Our intelligent system learns her style preferences and recommends pieces she'll genuinely love.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Expert-Verified</h3>
              <p>Every recommendation is hand-curated by jewelry experts to ensure quality and taste alignment.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎁</div>
              <h3>Gift with Confidence</h3>
              <p>Share her taste profile with your partner. They gift with confidence. Everyone wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Find the Perfect Gift?</h2>
        <p>Download Man Buys Jewellery and discover jewelry she'll absolutely love.</p>
        
        <div className="app-buttons">
          <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-secondary">
            Open Web App
          </a>
          <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-secondary">
            Get iOS App
          </a>
          <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-secondary">
            Get Android App
          </a>
        </div>
      </section>
    </>
  )
}
