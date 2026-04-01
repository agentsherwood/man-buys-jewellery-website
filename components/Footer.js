import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Man Buys Jewellery</h3>
            <p>Beautiful jewelry, perfectly matched to your taste.</p>
          </div>
          <div className="footer-section">
            <h4>App Links</h4>
            <ul>
              <li>
                <a href="https://man-buys-jewellery-eight.vercel.app">Web App</a>
              </li>
              <li>
                <a href="https://man-buys-jewellery-eight.vercel.app">Download iOS</a>
              </li>
              <li>
                <a href="https://man-buys-jewellery-eight.vercel.app">Download Android</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Man Buys Jewellery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
