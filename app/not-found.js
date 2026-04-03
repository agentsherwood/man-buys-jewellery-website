import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="not-found-shell">
      <div className="site-container narrow-stack center">
        <p className="eyebrow">404</p>
        <h1>That page isn&apos;t here.</h1>
        <p>Try the homepage, or go straight to the app and start swiping.</p>
        <div className="button-row">
          <Button href="/">Home</Button>
          <Button href="https://man-buys-jewellery-eight.vercel.app" variant="secondary">
            Start Swiping
          </Button>
        </div>
      </div>
    </div>
  )
}
