export const metadata = {
  title: "Finally, Jewelry Gifts She'll Love | Man Buys Jewellery",
  description:
    "Taste discovery for jewelry gifting. Swipe through pieces, build a style profile, and share it so the people in your life can buy gifts you'll actually love.",
  openGraph: {
    title: "Finally, Jewelry Gifts She'll Love | Man Buys Jewellery",
    description:
      "Swipe through jewelry, build your taste profile, and share it for gifts that feel like you.",
    images: [{ url: '/og-image.svg' }],
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Finally, Jewelry Gifts She'll Love</h1>
          <p className="hero-subtitle">
            Swipe through curated pieces, tell us your taste, share your style with the people who matter.
            The easiest way to get jewelry that feels like you.
          </p>
          <div className="cta-group">
            <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-primary">
              Start Swiping
            </a>
            <a href="/how-it-works" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section - Women */}
      <section className="section problem-section">
        <div className="section-content">
          <h2>The Problem She Faces</h2>
          <p>
            You know what you like when you see it. But finding it? That's the hard part.
          </p>
          <p>
            Most jewelry websites throw thousands of options at you with no understanding of your style. You scroll endlessly,
            bookmark things you'll never revisit, and end up buying something "good enough" instead of something you actually love.
            And forget about your partner getting it right—they usually don't.
          </p>
          <p>
            <strong>It shouldn't be this complicated. Jewelry is personal. It should be easy to show the world who you are.</strong>
          </p>
        </div>
      </section>

      {/* Problem Section - Men */}
      <section className="section problem-section alt-bg">
        <div className="section-content">
          <h2>The Problem He Faces</h2>
          <p>
            You want to buy her something she'll love. But jewelry? That's overwhelming.
          </p>
          <p>
            You don't speak the language—what's the difference between rose gold and copper? Is titanium better than stainless steel?
            And somehow every choice feels like it could be wrong. You want to get it right, but you're not confident.
            So you either overthink it, play it safe, or just buy whatever the sales person suggests.
          </p>
          <p>
            <strong>There has to be a better way. Jewelry doesn't have to be a guessing game.</strong>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section solution-section">
        <div className="section-content">
          <h2>The Solution</h2>
          <p className="solution-intro">
            Man Buys Jewellery takes the stress out of jewelry. It's simple: swipe through beautiful, curated pieces from brands you trust.
            As you swipe, we learn what resonates with you—the metals, the styles, the vibe. Build a profile that's 100% you.
          </p>
          <p>
            When you find something you love, share it. Send your style profile to your partner, family, or friends.
            They see exactly what you want. No more generic gifts. No more second-guessing. Just perfect gifts that feel personal.
          </p>
          <p>
            For men buying gifts: it's like having a personal stylist in her pocket. You see what she loves, and suddenly you know exactly what to buy.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works-preview">
        <div className="section-content">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Swipe Through Jewelry</h3>
              <p>Like TikTok, but for pieces you actually want to own. Curated from brands you trust.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>We Learn What You Love</h3>
              <p>Every swipe trains your profile. Minimalist? Vintage? Bold statement pieces? We get it.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Share & Get the Perfect Gift</h3>
              <p>Send your profile link to your partner. They see your exact style and know exactly what to buy.</p>
            </div>
          </div>
          <div className="cta-center">
            <a href="/how-it-works" className="btn btn-primary">
              See the Full Flow
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section trust-section alt-bg">
        <div className="section-content">
          <h2>Why You'll Love It</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <span className="trust-icon">✨</span>
              <h3>Your Taste Matters</h3>
              <p>Your style is uniquely yours. It deserves to be understood, not ignored.</p>
            </div>
            <div className="trust-item">
              <span className="trust-icon">❤️</span>
              <h3>Gifts That Land</h3>
              <p>No more hoping your partner gets it. They'll know exactly what you love.</p>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💎</span>
              <h3>Curated Carefully</h3>
              <p>We partner thoughtfully with brands that create pieces worth owning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-final">
        <div className="section-content cta-content">
          <h2>Ready to Find Your Perfect Match?</h2>
          <p>Start swiping. Build your taste. Share with people who matter.</p>
          <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-primary btn-large">
            Start Swiping Now
          </a>
        </div>
      </section>
    </div>
  )
}
