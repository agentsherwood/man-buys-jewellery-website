export const metadata = {
  title: 'Testimonials - Man Buys Jewellery | Real User Reviews',
  description: 'See what real users say about finding the perfect jewelry gifts with Man Buys Jewellery.',
}

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Fiancée',
      text: 'I was so stressed about finding the perfect engagement gift for my fiancé. The taste profile feature showed me exactly what her style is, and I found a beautiful gold bracelet she absolutely adores.',
      rating: 5,
    },
    {
      name: 'James H.',
      text: 'Man Buys Jewellery took all the guessing out of anniversary gifts. I shared her taste profile with my sister, and we finally got her something she actually loved.',
      role: 'Husband',
      rating: 5,
    },
    {
      name: 'Emma T.',
      text: 'As someone who\'s picky about jewelry, I\'m amazed at how well the app understands my taste. Every recommendation feels personally curated just for me.',
      role: 'Girlfriend',
      rating: 5,
    },
    {
      name: 'Alex P.',
      text: 'I shared my taste profile with my boyfriend, and he nailed my birthday gift. No more awkward hints needed!',
      role: 'App User',
      rating: 5,
    },
    {
      name: 'Michael S.',
      text: 'The curation quality is exceptional. I bought three pieces from the recommendations, and every single one was exactly what my wife loves.',
      role: 'Boyfriend',
      rating: 5,
    },
    {
      name: 'Lisa R.',
      text: 'My mother-in-law was impossible to shop for until I found Man Buys Jewellery. Now I have the perfect gift guide, and she feels truly understood.',
      role: 'Sister',
      rating: 5,
    },
  ]

  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1>Loved by Gift Givers & Receivers</h1>
        <p className="testimonials-subtitle">Real people finding real connections through perfectly matched jewelry gifts</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="testimonial-card">
            <StarRating rating={testimonial.rating} />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author-info">
              <p className="testimonial-author">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="testimonials-cta">
        <h2>Join Thousands Finding Perfect Gifts</h2>
        <p>Start discovering jewelry that matches her unique taste today.</p>
        <a href="https://man-buys-jewellery-eight.vercel.app" className="btn btn-primary btn-large">
          Get Started Free
        </a>
      </section>
    </div>
  )
}
