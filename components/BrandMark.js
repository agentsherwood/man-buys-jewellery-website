export default function BrandMark({ compact = false }) {
  return (
    <span className={`brand-mark${compact ? ' brand-mark-compact' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img" focusable="false">
        <path d="M24 6c5.7 0 10.3 4.4 10.3 9.8 0 9.4-10.3 16-10.3 16S13.7 25.2 13.7 15.8C13.7 10.4 18.3 6 24 6Z" />
        <path d="m24 19 7.2 6-4 10H20.8l-4-10Z" />
      </svg>
    </span>
  )
}
