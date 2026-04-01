export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Finally found jewelry she actually loves. The taste profile feature is genius.',
      role: 'Fiancée',
    },
    {
      name: 'James H.',
      text: 'No more guessing what gift to buy. The app does it for me perfectly.',
      role: 'Husband',
    },
    {
      name: 'Emma T.',
      text: 'The curation is impeccable. Every piece feels personally selected for me.',
      role: 'Premium User',
    },
    {
      name: 'Alex P.',
      text: 'Shared my taste profile with my partner and got exactly what I wanted for my birthday.',
      role: 'App User',
    },
  ]

  return (
    <div className="testimonials-page">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">— {testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
