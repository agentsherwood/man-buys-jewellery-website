import Link from 'next/link'

export default function Button({
  href,
  children,
  variant = 'primary',
  as,
  type = 'button',
  ...rest
}) {
  const className = `button button-${variant}`

  if (as === 'button') {
    return (
      <button type={type} className={className} {...rest}>
        {children}
      </button>
    )
  }

  const external = href && href.startsWith('http')

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  )
}
