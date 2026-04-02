import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://man-buys-jewellery-eight.vercel.app'),
  title: {
    default: "Man Buys Jewellery | Finally, Jewelry Gifts She'll Love",
    template: '%s | Man Buys Jewellery',
  },
  description:
    "Taste discovery for jewelry gifting. Swipe through pieces, build a style profile, and share it so the people in your life can buy gifts you'll actually love.",
  applicationName: 'Man Buys Jewellery',
  keywords: ['jewelry gifts', 'gift guide', 'taste profile', 'swipe jewelry', 'women jewelry', 'gift ideas'],
  openGraph: {
    title: "Man Buys Jewellery | Finally, Jewelry Gifts She'll Love",
    description:
      "Swipe through jewelry, build your taste profile, and share it for gifts that feel like you.",
    url: 'https://man-buys-jewellery-eight.vercel.app',
    siteName: 'Man Buys Jewellery',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Man Buys Jewellery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Man Buys Jewellery | Finally, Jewelry Gifts She'll Love",
    description:
      "Swipe through jewelry, build your taste profile, and share it for gifts that feel like you.",
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
