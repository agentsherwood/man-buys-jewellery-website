import Image from 'next/image'
import Button from '../components/Button'
import Card from '../components/Card'

export const metadata = {
  title: "Finally, Jewelry Gifts She'll Love",
  description:
    "Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.",
  keywords: [
    'jewelry gifts',
    'jewellery gifts',
    'taste profile',
    'gift ideas for her',
    'swipe jewelry app',
    'man buys jewellery',
  ],
  openGraph: {
    title: "Finally, Jewelry Gifts She'll Love | Man Buys Jewellery",
    description:
      "Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.",
    url: 'https://man-buys-jewellery.vercel.app',
    images: ['/og-image.svg'],
  },
}

const appUrl = 'https://man-buys-jewellery-eight.vercel.app'

const womenProblem =
  "You love jewelry, but explaining your taste is exhausting. You've told him a thousand times—gold not silver, delicate not chunky—but he still comes home with something that misses the mark. Or worse, he just... doesn't buy you anything, because he's terrified of getting it wrong. You shouldn't have to choose between guidance and disappointment. You deserve gifts that actually reflect who you are."

const menProblem =
  "She wants jewelry. She's even told you what she likes. But by the time you're in the shop, you've forgotten half of it—and all the rings look the same anyway. You're terrified of getting it wrong, so you either buy something generic or ask her to pick it herself. That's not really a gift, is it? What if you could know her taste better than she can explain it? What if shopping was actually confident and easy?"

const solutionParagraphs = [
  "Jewelry taste is personal. We've made it simple.",
  "She'll spend 10 minutes swiping through hundreds of real pieces from the UK's best jewelers. Left for not-quite-right, right for yes. As she swipes, the app learns her taste—metals, stones, styles, price range, all of it.",
  'The result? A clear picture of exactly what she loves. No ambiguity. No guesswork.',
  "Then you get access to her profile. You see what she's loved, filtered by budget and style. You show a jeweler, or you click and buy online. Either way, you're buying with confidence—because you actually know what she likes.",
  "And she gets exactly what she wants, without having to spell it out again.",
]

const steps = [
  {
    number: '01',
    title: 'She discovers her taste',
    copy:
      'Open the app. Swipe through hundreds of real jewelry pieces. Heart what she loves, pass on the rest. The more she swipes, the better we understand her taste—metals, stones, styles, everything.',
  },
  {
    number: '02',
    title: 'Show him what you love',
    copy:
      'Done swiping? Share your taste profile with your partner via a simple link. He can see exactly what she loves—no descriptions needed, just crystal-clear visuals.',
  },
  {
    number: '03',
    title: 'He buys with confidence',
    copy:
      "Use her profile as a guide. Filter by budget. See pieces that match her taste. Buy online with our affiliate links, or show the profile to a jeweler in-store. Either way, you're buying something she'll actually wear.",
  },
]

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">She swipes. You know.</p>
            <h1>Finally, Jewelry Gifts She&apos;ll Love</h1>
            <p className="hero-text">
              Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.
            </p>
            <div className="button-row">
              <Button href={appUrl}>Start Swiping</Button>
              <Button href="/how-it-works" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hero-visual card-surface">
            <Image
              src="/images/hero-jewelry.svg"
              alt="Jewelry cards representing taste discovery for gift shopping"
              width={640}
              height={640}
              priority
              className="hero-image"
            />
            <div className="floating-note">
              <span className="floating-note-label">How it feels</span>
              <strong>Confident gift buying, finally.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">The problem</p>
            <h2>Jewelry gifting breaks down for both sides</h2>
          </div>
          <div className="two-column-grid">
            <Card title="For Women">
              <p>{womenProblem}</p>
            </Card>
            <Card title="For Men" tone="accent">
              <p>{menProblem}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-block section-cream">
        <div className="site-container narrow-stack">
          <div className="section-heading center">
            <p className="eyebrow">The solution</p>
            <h2>She swipes. You buy. Everyone wins.</h2>
          </div>
          <div className="story-stack">
            {solutionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">3 Simple Steps</p>
            <h2>Swipe. Share. Buy.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <Card key={step.number} title={step.title}>
                <p className="step-number">{step.number}</p>
                <p>{step.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-teal">
        <div className="site-container cta-panel">
          <div>
            <p className="eyebrow eyebrow-light">Built for couples who want better gifts</p>
            <h2>Ready to give gifts she&apos;ll actually love?</h2>
            <p>
              Start swiping, build a taste profile, and make jewelry shopping feel clear instead of stressful.
            </p>
          </div>
          <div className="button-row">
            <Button href={appUrl}>Get Started</Button>
            <Button href="/about" variant="secondary-light">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>Proof points will land here next</h2>
          </div>
          <div className="two-column-grid">
            <Card title="Coming soon">
              <p>Real stories from women building taste profiles and men buying gifts with confidence.</p>
            </Card>
            <Card title="What we already know" tone="accent">
              <p>Jewelry gifting becomes easier when taste is visible, specific, and easy to share.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
