import React, { useState } from 'react'

function Home() {
  return (
    <section className="page">
      <h2>Cold Chain Excellence</h2>
      <img
        className="hero"
        src="https://images.unsplash.com/photo-1586257476994-531246b566d8?auto=format&fit=crop&w=1350&q=80"
        alt="Fleet of refrigerated trucks"
      />
      <p>Shift Control keeps your goods at the perfect temperature from dock to door.</p>
    </section>
  )
}

function About() {
  return (
    <section className="page">
      <h2>About Us</h2>
      <img
        className="hero"
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1350&q=80"
        alt="Refrigerated truck on the highway"
      />
      <p>We lead the industry in secure, monitored cold storage transportation.</p>
    </section>
  )
}

function Services() {
  return (
    <section className="page">
      <h2>Services</h2>
      <ul className="services-list">
        <li>24/7 Temperature Monitoring</li>
        <li>Nationwide Refrigerated Fleet</li>
        <li>Real-time Delivery Tracking</li>
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section className="page">
      <h2>Contact</h2>
      <p>
        Email us at <a href="mailto:info@shiftcontrol.com">info@shiftcontrol.com</a>
      </p>
      <p>Call 1-800-COLD-TRK</p>
    </section>
  )
}

export default function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />
      case 'services':
        return <Services />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="container">
      <nav>
        <ul className="nav">
          <li>
            <button
              className={page === 'home' ? 'active' : ''}
              onClick={() => setPage('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={page === 'about' ? 'active' : ''}
              onClick={() => setPage('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={page === 'services' ? 'active' : ''}
              onClick={() => setPage('services')}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className={page === 'contact' ? 'active' : ''}
              onClick={() => setPage('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
      {renderPage()}
      <footer>
        <small>© {new Date().getFullYear()} Shift Control Logistics</small>
      </footer>
    </div>
  )
}


