import Button from '../../components/Button'
import Card from '../../components/Card'

export const metadata = {
  title: 'How It Works',
  description:
    'Learn how women build a taste profile and how men use it to buy jewelry gifts with confidence.',
  openGraph: {
    title: 'How It Works | Man Buys Jewellery',
    description:
      'Swipe through jewelry, share a taste profile, and buy gifts with clarity.',
    url: 'https://man-buys-jewellery.vercel.app/how-it-works',
    images: ['/og-image.svg'],
  },
}

const appUrl = 'https://man-buys-jewellery-eight.vercel.app'

const womenSteps = [
  {
    title: 'Swipe through real pieces',
    copy:
      'Open the app. Swipe through hundreds of real jewelry pieces. Heart what she loves, pass on the rest. The more she swipes, the better we understand her taste—metals, stones, styles, everything.',
  },
  {
    title: 'Build taste automatically',
    copy:
      "She'll spend 10 minutes swiping through hundreds of real pieces from the UK's best jewelers. Left for not-quite-right, right for yes. As she swipes, the app learns her taste—metals, stones, styles, price range, all of it.",
  },
  {
    title: 'Share what you love',
    copy:
      'Done swiping? Share your taste profile with your partner via a simple link. He can see exactly what she loves—no descriptions needed, just crystal-clear visuals.',
  },
]

const menSteps = [
  {
    title: 'Receive her profile',
    copy:
      "Then you get access to her profile. You see what she's loved, filtered by budget and style.",
  },
  {
    title: 'Browse the right picks',
    copy:
      'Use her profile as a guide. Filter by budget. See pieces that match her taste.',
  },
  {
    title: 'Buy with confidence',
    copy:
      "Buy online with our affiliate links, or show the profile to a jeweler in-store. Either way, you're buying something she'll actually wear.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container narrow-stack center">
          <p className="eyebrow">How it works</p>
          <h1>Three simple steps for both sides of the gift</h1>
          <p>
            Women build a taste profile. Men use it to shop clearly. The whole process is faster,
            easier, and more personal.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">For Women</p>
            <h2>Swipe, build taste, share</h2>
          </div>
          <div className="steps-grid">
            {womenSteps.map((step, index) => (
              <Card key={step.title} title={step.title}>
                <p className="step-number">{`0${index + 1}`}</p>
                <p>{step.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-cream">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">For Men</p>
            <h2>Receive the profile, browse the picks, buy</h2>
          </div>
          <div className="steps-grid">
            {menSteps.map((step, index) => (
              <Card key={step.title} title={step.title} tone="accent">
                <p className="step-number">{`0${index + 1}`}</p>
                <p>{step.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <Card title="The full flow" tone="outline">
            <div className="flow-line">
              <span>Swipe</span>
              <span>Share</span>
              <span>Buy</span>
            </div>
            <p>
              Jewelry taste is personal. We&apos;ve made it simple. The result is a clear picture of
              exactly what she loves. No ambiguity. No guesswork.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-block section-teal">
        <div className="site-container cta-panel">
          <div>
            <p className="eyebrow eyebrow-light">Next step</p>
            <h2>Start building her taste profile now</h2>
            <p>Open the app, swipe through real pieces, and make the next gift easy.</p>
          </div>
          <div className="button-row">
            <Button href={appUrl}>Start Swiping</Button>
            <Button href="/contact" variant="secondary-light">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
