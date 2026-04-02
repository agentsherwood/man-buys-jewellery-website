export const metadata = {
  title: 'About Us | Man Buys Jewellery',
  description:
    'Learn about Man Buys Jewellery: our mission, story, and why we believe jewelry should feel like you.',
}

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="hero hero-small">
        <div className="hero-content">
          <h1>About Man Buys Jewellery</h1>
          <p>Your taste. Shared.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p className="large-text">
            We believe jewelry should feel like <em>you</em>—not like a guess.
          </p>
          <p>
            We started Man Buys Jewellery because we were tired of the disconnect. Jewelry shopping was either overwhelming
            (too many options, no personalization) or disconnected (buying gifts for someone and hoping you got it right).
            There had to be a better way.
          </p>
          <p>
            We built a platform that speaks your language: swipe, discover, share. Simple. Honest. Built for real people, not algorithms.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section alt-bg">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            What started as frustration became an insight: if you could show someone exactly what you love, gift-giving becomes easy.
            No more second-guessing. No more "it's beautiful, but not quite me."
          </p>
          <p>
            We partnered with jewelry brands we genuinely believe in—not every brand, just the ones that create pieces worth owning.
            We made swiping simple. And we made sharing your taste frictionless.
          </p>
          <p>
            Today, thousands of people have found jewelry they love, and partners have found confidence in their gifts.
          </p>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section">
        <div className="section-content">
          <h2>What We Believe</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>💎 Taste Matters</h3>
              <p>Your style is uniquely yours. It deserves to be understood.</p>
            </div>
            <div className="value-card">
              <h3>🎯 Simplicity Wins</h3>
              <p>Complex tools don't help; they confuse. We do one thing well: help you find jewelry that feels like home.</p>
            </div>
            <div className="value-card">
              <h3>🤝 Trust is Everything</h3>
              <p>We curate carefully, partner thoughtfully, and never oversell. If we recommend it, we mean it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section alt-bg">
        <div className="section-content">
          <h2>Crafted By</h2>
          <p>
            Man Buys Jewellery is built by a small team of jewelry enthusiasts, product people, and designers
            who believe that gift-giving should be joyful, not stressful.
          </p>
          <p>
            We're continuously learning from our community to make the experience better, faster, and more personal.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div className="section-content">
          <h2>Our Vision</h2>
          <p>
            We imagine a world where gift-giving is frictionless because everyone understands your taste.
            Where jewelry feels personal because it was chosen for you specifically.
            Where partners buy gifts with confidence. Where friends celebrate your style.
          </p>
          <p>
            This is just the beginning. We're building the platform that makes that possible.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section cta-final">
        <div className="section-content cta-content">
          <h2>Questions? We'd Love to Hear From You</h2>
          <p>Reach out with feedback, ideas, or just to say hello.</p>
          <a href="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
