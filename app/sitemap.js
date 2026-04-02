const baseUrl = 'https://man-buys-jewellery-eight.vercel.app'

export default function sitemap() {
  return ['/', '/how-it-works', '/about', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
