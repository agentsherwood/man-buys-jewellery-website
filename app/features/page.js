export default function Features() {
  const features = [
    {
      title: 'Taste Profile Matching',
      description: 'Our AI learns your style preferences and recommends jewelry you'll love',
    },
    {
      title: 'Curated Collections',
      description: 'Hand-selected pieces from premium retailers and independent designers',
    },
    {
      title: 'Share with Partners',
      description: 'Create shareable taste profiles so partners can gift confidently',
    },
    {
      title: 'Exclusive Partnerships',
      description: 'Access to Monica Vinader, Pandora, and other luxury jewelry brands',
    },
  ]

  return (
    <div className="features-page">
      <h1>Features</h1>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
