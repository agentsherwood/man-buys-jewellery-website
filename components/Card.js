export default function Card({ title, children, tone = 'default' }) {
  const className = tone === 'default' ? 'site-card' : `site-card ${tone}`

  return (
    <article className={className}>
      {title ? <h3 className="card-title">{title}</h3> : null}
      {children}
    </article>
  )
}
