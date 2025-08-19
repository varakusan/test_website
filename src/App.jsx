import React from 'react'

const truckImages = [
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1600772601941-b3d1640b2b9b?auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1350&q=80'
]

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Shift Control</h1>
        <p>Advanced cold storage logistics powered by smart transportation.</p>
      </header>

      <main>
        <section className="gallery">
          {truckImages.map((src, idx) => (
            <img key={src} src={src} alt={`Refrigerated truck ${idx + 1}`} />
          ))}
        </section>

        <section className="features">
          <div>
            <h3>❄️ Precision Cooling</h3>
            <p>Real-time temperature tracking across our entire fleet.</p>
          </div>
          <div>
            <h3>🚚 Optimized Routing</h3>
            <p>AI-powered logistics keep deliveries efficient and on schedule.</p>
          </div>
          <div>
            <h3>🔐 Secure Storage</h3>
            <p>State-of-the-art facilities safeguard your goods.</p>
          </div>
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} Shift Control Logistics</small>
      </footer>
    </div>
  )
}

