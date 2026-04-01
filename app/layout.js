import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Man Buys Jewellery - Discover Perfect Jewelry Gifts',
  description: 'Discover stunning jewelry gifts personalized to your taste. Find the perfect present with AI-powered taste profiles and expert curation.',
  keywords: 'jewelry, gifts, women jewelry, gift guide, personalized gifts, fine jewelry',
  openGraph: {
    title: 'Man Buys Jewellery - Discover Perfect Jewelry Gifts',
    description: 'Personalized jewelry discovery and gifting made easy',
    type: 'website',
    url: 'https://man-buys-jewellery-website.vercel.app'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1F3557" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
