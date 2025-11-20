import React from 'react'

const services = [
  {
    id: '01',
    title: 'Temperature-Controlled Transportation',
    description:
      'Secure, efficient movement of perishable goods with impeccable temperature discipline from first to final mile.',
    detail:
      'AI-optimized routing, insulated fleets, and live telemetry eliminate thermal excursions at every handoff.',
    icon: '🚚',
  },
  {
    id: '02',
    title: 'Advanced Cold Storage Facilities',
    description:
      'State-of-the-art warehouses engineered for stability and safety across frozen, chilled, and ambient bands.',
    detail:
      'Modular chambers, redundant power, and compliance-ready SOPs keep inventory secure for short- or long-term storage.',
    icon: '🏭',
  },
  {
    id: '03',
    title: 'Real-Time Monitoring & IoT',
    description:
      'Total transparency via smart tracking with continuous temperature and location telemetry.',
    detail:
      'Predictive alerts, live dashboards, and audit-ready data keep every stakeholder informed in real time.',
    icon: '📡',
  },
  {
    id: '04',
    title: 'Customized Logistics Solutions',
    description:
      'Tailored packaging, last-mile precision, and value-added services tuned to your operational DNA.',
    detail:
      'Dedicated control towers align to your SOPs, integrating specialized handling, kitting, and distribution.',
    icon: '🧭',
  },
]

const strengths = [
  {
    title: 'Nationwide Reach',
    description:
      'A robust network spanning metro cities and industrial hubs delivers punctuality without compromise.',
  },
  {
    title: 'Quality & Compliance',
    description:
      'Global standards, validated processes, and uncompromising QA keep your supply chain audit-ready.',
  },
  {
    title: 'Technological Innovation',
    description:
      'Digital control towers, automation, and analytics unlock complete traceability and efficiency.',
  },
  {
    title: 'Expert Stewardship',
    description:
      'Highly skilled teams pair precision with service excellence to protect every shipment.',
  },
]

const industries = [
  {
    icon: '💊',
    name: 'Pharmaceuticals & Life Sciences',
    items: 'Vaccines, medicines, biologicals',
  },
  { icon: '🍏', name: 'Food & Beverage', items: 'Perishables, frozen foods, dairy' },
  { icon: '🏥', name: 'Healthcare', items: 'Medical devices, diagnostics' },
  { icon: '🌾', name: 'Agriculture', items: 'Fresh produce, seeds' },
]

const stats = [
  { label: 'On-Time Integrity', value: '99.3%' },
  { label: 'Cities Served', value: '120+' },
  { label: 'Cold Miles Tracked', value: '15M+' },
  { label: 'Customer Satisfaction', value: '4.9/5' },
]

const timeline = [
  {
    title: 'Who We Are',
    text: (
      <>
        Headquartered in Bangalore and established in 2022, Shift Controll has rapidly become India’s trusted cold
        chain partner. We specialize in the complex science of moving temperature-sensitive goods with absolute
        precision.
      </>
    ),
  },
  {
    title: 'Our Mission',
    text: (
      <>
        To safeguard the integrity of perishable and sensitive products through a reliable, innovative, and sustainable
        cold chain logistics network—empowering our clients while delivering unmatched customer satisfaction.
      </>
    ),
  },
  {
    title: 'Our Evolution',
    text: (
      <>
        From a logistics provider to a strategic growth ally, we ensure safety, potency, and freshness for every item
        entrusted to our care.
      </>
    ),
  },
]

const contact = {
  address: 'Near Commercial Check Post, Nimbekapura, Old Madras Road, Bangalore – 560049',
  phone: '+91 7795742397 (Mr. Tharoon)',
  email: 'Sales@shiftcontroll.com',
}

export default function App() {
  return (
    <div className="page">
      <div className="bg-orbit" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <nav className="nav">
        <div className="brand">Shift Controll</div>
        <div className="nav-actions">
          <button className="ghost">Explore Our Network</button>
          <button className="primary">Request a Quote</button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Redefining Cold Chain Logistics Across India</p>
          <h1>
            Precision cold chain orchestrated with <span className="accent">scientific discipline</span> and
            <span className="accent"> intelligent automation</span>.
          </h1>
          <p className="lede">
            Temperature-controlled transportation and warehousing that protect product integrity from origin to
            destination—with real-time visibility, compliance-first processes, and expert stewardship.
          </p>
          <div className="hero__cta">
            <button className="primary">Request a Quote</button>
            <button className="ghost">Discover Our Services</button>
          </div>
          <div className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <div className="stat__value">{stat.value}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="orbit-card">
            <div className="orbit-card__badge">Live Monitoring</div>
            <div className="orbit-card__temp">2°C - 8°C</div>
            <p>Real-time telematics with predictive alerts.</p>
            <div className="orbit-card__pills">
              <span>IoT</span>
              <span>Telemetry</span>
              <span>Compliance</span>
            </div>
          </div>
          <div className="hero__rings" aria-hidden="true" />
        </div>
      </header>

      <main>
        <section className="section about">
          <div className="section__header">
            <p className="eyebrow">Company Profile</p>
            <h2>Built for cold chain certainty</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div className="timeline__item" key={item.title}>
                <div className="timeline__dot" aria-hidden="true" />
                <div>
                  <p className="timeline__label">{`0${idx + 1}`}</p>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section services">
          <div className="section__header">
            <p className="eyebrow">Our Services</p>
            <h2>End-to-end control engineered for perishables</h2>
            <p className="muted">
              Enterprise-grade cold chain solutions that blend advanced infrastructure with scientific precision.
            </p>
          </div>
          <div className="cards">
            {services.map((service) => (
              <article key={service.title} className="card">
                <div className="card__meta">
                  <span className="chip">{service.icon}</span>
                  <span className="id">{service.id}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="muted small">{service.detail}</p>
                <button className="text-btn">Talk to a specialist →</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section strengths">
          <div className="section__header">
            <p className="eyebrow">Why Choose Shift Controll?</p>
            <h2>Reliability with a scientific backbone</h2>
          </div>
          <div className="pillars">
            {strengths.map((item) => (
              <div key={item.title} className="pillar">
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section industries">
          <div className="section__header">
            <p className="eyebrow">Industries We Serve</p>
            <h2>Versatility across sensitive cargo</h2>
          </div>
          <div className="industries__grid">
            {industries.map((industry) => (
              <div key={industry.name} className="industry">
                <span className="chip large">{industry.icon}</span>
                <div>
                  <h3>{industry.name}</h3>
                  <p className="muted">{industry.items}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section sustainability">
          <div className="section__header">
            <p className="eyebrow">Sustainability & Responsibility</p>
            <h2>Committed to a greener supply chain</h2>
            <p className="muted">
              Energy-efficient cooling, optimized routing, and responsible operations that protect both products and the
              planet.
            </p>
          </div>
          <div className="sustainability__panel">
            <div>
              <h3>Eco-conscious by design</h3>
              <p className="muted">
                By embracing efficient refrigeration tech and route intelligence, we minimize emissions while ensuring
                uncompromised cold chain performance.
              </p>
            </div>
            <div className="badges">
              <span>Energy-Efficient Tech</span>
              <span>Route Optimization</span>
              <span>Community Impact</span>
            </div>
          </div>
        </section>

        <section className="section contact">
          <div className="contact__card">
            <p className="eyebrow">Get in Touch</p>
            <h2>Ready to optimize your cold chain?</h2>
            <p className="muted">
              Contact our Bangalore head office to design a solution that safeguards every shipment with scientific
              precision.
            </p>
            <div className="contact__grid">
              <div>
                <p className="label">Head Office</p>
                <p>{contact.address}</p>
              </div>
              <div>
                <p className="label">Phone</p>
                <p>{contact.phone}</p>
              </div>
              <div>
                <p className="label">Email</p>
                <p>{contact.email}</p>
              </div>
            </div>
            <div className="contact__actions">
              <button className="primary">Request a Quote</button>
              <button className="ghost">Explore Our Network</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Shift Controll Logistics · Built for integrity, speed, and precision.</div>
        <div className="footer__dots" aria-hidden="true" />
      </footer>
    </div>
  )
}
