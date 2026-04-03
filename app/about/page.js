import Card from '../../components/Card'
import Button from '../../components/Button'

export const metadata = {
  title: 'About',
  description:
    'Why Toby built Man Buys Jewellery, the mission behind it, and the values guiding the product.',
  openGraph: {
    title: 'About | Man Buys Jewellery',
    description:
      'We exist to solve the jewelry gifting problem with confidence, clarity, and better taste discovery.',
    url: 'https://man-buys-jewellery.vercel.app/about',
    images: ['/og-image.svg'],
  },
}

const storyParagraphs = [
  "Jewelry is personal. It's not like picking a color or a size—it's a reflection of taste, style, personality. For decades, buying jewelry for someone else meant either asking them directly (which feels like cheating) or guessing (which almost always goes wrong).",
  "We watched friends, partners, and families struggle with this. She'd spend 20 minutes explaining her taste. He'd nod along, promise to remember, then buy something completely wrong. Or worse, he'd give up and ask her to pick it—which defeats the entire purpose of a gift.",
  'Then we thought: why do we love Tinder? Because swiping is addictive and fun. Why do we love Pinterest? Because it teaches you your own taste without making you think about it. What if we combined those ideas with the thing people actually care about—jewelry?',
  "Man Buys Jewellery was born from a simple insight: if she can swipe through hundreds of real pieces and show you what she loves, then jewelry shopping stops being a guessing game. It becomes what it should be—a chance to show that you actually know her, and to give her something beautiful that's truly her.",
  "We're not an e-commerce site. We're not a marketplace. We're a taste-discovery tool built specifically for partners. Because jewelry is personal. And gifts should be too.",
]

const values = [
  'Clarity over guessing',
  'Real items real choices',
  'Privacy that works',
  'Joy in giving',
]

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container narrow-stack center">
          <p className="eyebrow">About</p>
          <h1>Why Toby built Man Buys Jewellery</h1>
          <p>We exist to make jewelry gifts feel confident, personal, and easy to get right.</p>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container narrow-stack">
          <div className="section-heading">
            <p className="eyebrow">Mission</p>
            <h2>One simple problem, solved properly</h2>
          </div>
          <Card title="Mission" tone="accent">
            <p>
              We exist to solve one simple problem: men buying jewelry gifts should feel confident,
              not terrified. And women should get gifts that actually reflect who they are.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-block section-cream">
        <div className="site-container narrow-stack">
          <div className="section-heading">
            <p className="eyebrow">Founder story</p>
            <h2>Jewelry is personal. Gifts should be too.</h2>
          </div>
          <div className="story-stack">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">Values</p>
            <h2>What guides the product</h2>
          </div>
          <div className="two-column-grid">
            {values.map((value) => (
              <Card key={value} title={value}>
                <p>{value} is built into the way profiles are discovered, shared, and used to buy.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-cream">
        <div className="site-container">
          <Card title="Team" tone="outline">
            <p>
              Team details are intentionally light for now. This page will expand as the company grows
              beyond the founding team.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-block section-teal">
        <div className="site-container cta-panel">
          <div>
            <p className="eyebrow eyebrow-light">Keep exploring</p>
            <h2>See how the product works in practice</h2>
            <p>Follow the full swipe to share to buy flow, then start using it.</p>
          </div>
          <div className="button-row">
            <Button href="/how-it-works">See Her Taste</Button>
            <Button href="/contact" variant="secondary-light">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
