export const metadata = {
  title: 'How It Works - Man Buys Jewellery',
  description: 'Discover how our AI-powered platform helps you find the perfect jewelry gifts.',
}

export default function Features() {
  const features = [
    {
      title: 'Swipe & Discover',
      description: 'She swipes through our curated jewelry collection. With each swipe, our AI learns her taste—her style preferences, favorite metals, stone types, and aesthetic. The more she swipes, the smarter the recommendations get.',
      icon: '👆',
    },
    {
      title: 'Share Your Taste',
      description: 'Create a unique, shareable taste profile complete with QR code. Share it with your partner, family, or friends. They see exactly what she loves—no more guessing games. Premium subscribers get exclusive features like private notes and gift-ready suggestions.',
      icon: '📱',
    },
    {
      title: 'Perfect Gift Found',
      description: 'Using her taste profile, partners browse gifts with confidence. Our gift guide interface shows size, material, and care instructions. They buy knowing it matches her style perfectly. She receives exactly what she loves.',
      icon: '🎁',
    },
    {
      title: 'Supported Retailers',
      description: 'We partner with trusted luxury jewelry brands including Monica Vinader, Pandora, Missoma, Mejuri, and many more. Every piece is verified authentic and backed by our quality guarantee.',
      icon: '✨',
    },
  ]

  return (
    <div className="features-page">
      <div className="features-header">
        <h1>How It Works</h1>
        <p className="features-subtitle">Four simple steps to finding the perfect jewelry gift</p>
      </div>

      <div className="features-container">
        {features.map((feature, index) => (
          <section key={feature.title} className="feature-section">
            <div className="feature-number">
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-count">0{index + 1}</span>
            </div>
            <div className="feature-content">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-secondary btn-small">
                Try Now →
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Discover</h3>
            <p className="price">Free</p>
            <ul className="feature-list">
              <li>✓ Unlimited swipes</li>
              <li>✓ Taste profile creation</li>
              <li>✓ Basic recommendations</li>
              <li>✗ Premium brands</li>
            </ul>
            <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-primary btn-small">
              Get Started
            </a>
          </div>
          <div className="pricing-card premium">
            <div className="badge">Most Popular</div>
            <h3>Premium</h3>
            <p className="price">$4.99<span className="period">/month</span></p>
            <ul className="feature-list">
              <li>✓ Everything in Discover</li>
              <li>✓ Expanded catalog</li>
              <li>✓ Premium brand access</li>
              <li>✓ Advanced gift guides</li>
            </ul>
            <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-primary btn-small">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
