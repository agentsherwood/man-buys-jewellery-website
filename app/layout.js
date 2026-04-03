import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const baseUrl = 'https://man-buys-jewellery.vercel.app'

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Man Buys Jewellery | Finally, Jewelry Gifts She'll Love",
    template: '%s | Man Buys Jewellery',
  },
  description:
    "Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.",
  keywords: [
    'man buys jewellery',
    'jewelry gifts',
    'jewellery gifts',
    'taste discovery',
    'gift confidence',
    'swipe jewelry',
  ],
  openGraph: {
    title: "Man Buys Jewellery | Finally, Jewelry Gifts She'll Love",
    description:
      "Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.",
    url: baseUrl,
    siteName: 'Man Buys Jewellery',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Man Buys Jewellery open graph card',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Man Buys Jewellery | Finally, Jewelry Gifts She'll Love",
    description:
      "Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.",
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Man Buys Jewellery',
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    sameAs: [
      'https://instagram.com/manbuysjewellery',
      'https://tiktok.com/@manbuysjewellery',
      'https://twitter.com/manbuysjewel',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Man Buys Jewellery',
    url: baseUrl,
    description:
      "Swipe through hundreds of real pieces. Build her taste profile. Buy the perfect gift.",
  },
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
