export const metadata = {
  title: 'How It Works | Man Buys Jewellery',
  description:
    'Learn how Man Buys Jewellery works: swipe through jewelry, build your taste profile, and share it for the perfect gift.',
}

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="hero hero-small">
        <div className="hero-content">
          <h1>How It Works</h1>
          <p>Whether you're discovering your taste or buying the perfect gift, it's simple.</p>
        </div>
      </section>

      {/* For Her Section */}
      <section className="section">
        <div className="section-content">
          <h2>For Women: Discover Your Taste</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="flow-icon">👆</div>
              <h3>Step 1: Swipe</h3>
              <p>
                Browse beautiful, curated jewelry pieces. Swipe right on pieces that speak to you. Swipe left on pieces that don't.
                It's fun, it's fast, it's addictive.
              </p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">✨</div>
              <h3>Step 2: Build Profile</h3>
              <p>
                As you swipe, we learn your taste. What metals do you prefer? Minimalist or statement? Classic or trendy?
                Your profile becomes a crystal-clear picture of your style.
              </p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">🔗</div>
              <h3>Step 3: Share</h3>
              <p>
                Copy your profile link. Send it to your partner, friends, family. They click. They see exactly what you love.
                Gift-giving just got easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Him Section */}
      <section className="section alt-bg">
        <div className="section-content">
          <h2>For Men: Buy with Confidence</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="flow-icon">👀</div>
              <h3>Step 1: See Her Profile</h3>
              <p>
                She sends you her taste profile link. You open it. Suddenly, you understand her style.
                No more guessing. No more anxiety. You know exactly what she loves.
              </p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">💰</div>
              <h3>Step 2: Filter by Budget</h3>
              <p>
                Set your budget. See only pieces she loves that fit your price range.
                No need to overspend. No need to go too low. Just right.
              </p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">🛍️</div>
              <h3>Step 3: Buy with Confidence</h3>
              <p>
                Click, buy, gift. She opens the box and realizes you actually get her.
                You both win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="section">
        <div className="section-content">
          <h2>Why This Works</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h3>🎯 Precision</h3>
              <p>No more guessing. Every gift matches her actual taste, not your assumption.</p>
            </div>
            <div className="benefit">
              <h3>⏱️ Speed</h3>
              <p>Swiping takes minutes. Finding a gift that lands takes seconds.</p>
            </div>
            <div className="benefit">
              <h3>😌 Confidence</h3>
              <p>She's already said "yes" through her swipes. You can't get it wrong.</p>
            </div>
            <div className="benefit">
              <h3>💝 Meaning</h3>
              <p>A gift that matches her taste feels personal. It says "I see you."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-final">
        <div className="section-content cta-content">
          <h2>Ready to Start?</h2>
          <p>Swipe your style. Share with people who matter. Get gifts that land.</p>
          <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-primary btn-large">
            Start Swiping
          </a>
        </div>
      </section>
    </div>
  )
}
