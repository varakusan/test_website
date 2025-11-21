import React, { useState, useEffect, useRef } from 'react'

// Lightweight icon set (avoids external dependency pull issues)
const IconBase = ({ children, size = 24, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
)

const Truck = (props) => (
  <IconBase {...props}>
    <rect x="1" y="7" width="13" height="9" rx="1" />
    <path d="M14 10h3l3 3v3h-3" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </IconBase>
)

const Package = (props) => (
  <IconBase {...props}>
    <path d="M3 7l9-5 9 5-9 5-9-5Z" />
    <path d="M3 7v10l9 5 9-5V7" />
    <path d="M12 12V2" />
  </IconBase>
)

const MapPin = (props) => (
  <IconBase {...props}>
    <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </IconBase>
)

const Snowflake = (props) => (
  <IconBase {...props}>
    <path d="m12 3 0 18" />
    <path d="m8 5 4 2 4-2" />
    <path d="m8 19 4-2 4 2" />
    <path d="m5 8 14 8" />
    <path d="m19 8-14 8" />
    <path d="m4 12 4 0-2-3m14 3-4 0 2-3m-6 3 0 4" />
  </IconBase>
)

const CheckCircle2 = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12.5 11 15l5-6" />
  </IconBase>
)

const PhoneCall = (props) => (
  <IconBase {...props}>
    <path d="M15 5a5 5 0 0 1 4 4" />
    <path d="M15 1a9 9 0 0 1 8 8" />
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.22 2h3a2 2 0 0 1 2 1.72c.12.86.37 1.7.73 2.49a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.6-1.48a2 2 0 0 1 2.11-.45c.79.36 1.63.61 2.49.73A2 2 0 0 1 22 16.92Z" />
  </IconBase>
)

const Mail = (props) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7.5 12 13l9-5.5" />
  </IconBase>
)

const Phone = (props) => <PhoneCall {...props} />

const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </IconBase>
)

const ChevronRight = (props) => (
  <IconBase {...props}>
    <path d="m9 18 6-6-6-6" />
  </IconBase>
)

const Globe = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </IconBase>
)

const Anchor = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v12" />
    <path d="M5 12a7 7 0 0 0 14 0" />
    <path d="M5 12H2m20 0h-3" />
  </IconBase>
)

// --- UTILITIES ---
const useOnScreen = (options) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, options)

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, options])

  return [ref, visible]
}

// 3D Parallax Tilt Hook
const useTilt = (active) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !active) return

    const el = ref.current
    const handleMove = (e) => {
      const height = el.clientHeight
      const width = el.clientWidth
      const xVal = e.layerX
      const yVal = e.layerY

      const yRotation = 20 * ((xVal - width / 2) / width)
      const xRotation = -20 * ((yVal - height / 2) / height)

      const string = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
      el.style.transform = string
    }

    const handleOut = () => {
      el.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)'
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseout', handleOut)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseout', handleOut)
    }
  }, [active])

  return ref
}

const SectionHeader = ({ subtitle, title, align = 'center', light = false }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <div
      className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${
        light ? 'bg-white/10 text-cyan-300' : 'bg-blue-50 text-blue-600'
      }`}
    >
      <span className={`w-2 h-2 rounded-full ${light ? 'bg-cyan-300' : 'bg-blue-600'} animate-pulse`}></span>
      {subtitle}
    </div>
    <h2 className={`text-3xl md:text-5xl font-bold ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <div
      className={`mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 ${align === 'center' ? 'mx-auto' : ''} rounded-full`}
    ></div>
  </div>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-xl py-3' : 'bg-white/90 backdrop-blur-md py-5 border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
            <Snowflake size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-slate-900">
              SHIFT <span className="text-blue-600">CONTROLL</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Cold Chain Logistics</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Network', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-600/25 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Get Quote <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  )
}

const Hero = () => {
  const tiltRef = useTilt(true)

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-200 rounded-full blur-[120px] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm mx-auto lg:mx-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 tracking-wide">NEXT-GEN LOGISTICS PARTNER</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              Moving Your World, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Perfectly Chilled.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              From pharmaceuticals to fresh produce, we ensure your products maintain their integrity with our precision temperature-controlled network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group"
              >
                <PhoneCall size={20} /> Contact Us
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative group" style={{ perspective: '1000px' }}>
            <div
              ref={tiltRef}
              className="relative z-10 bg-white p-3 rounded-3xl shadow-2xl shadow-blue-900/20 transform transition-transform duration-100 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative rounded-2xl overflow-hidden h-[400px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000"
                  alt="Shift Controll Truck"
                  className="object-cover w-full h-full transform scale-105 group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-cyan-400 font-bold text-sm mb-1">FLEET CAPABILITY</div>
                    <h3 className="text-white text-2xl font-bold">Temperature Controlled</h3>
                    <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">-25°C to +25°C Precision</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-900 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Reefer Transport',
      desc: 'Secure inter-city and last-mile delivery for perishables. Our fleet eliminates thermal excursions.',
      img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Package,
      title: 'Cold Warehousing',
      desc: 'Advanced storage facilities with cutting-edge cooling tech for long and short-term stability.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Anchor,
      title: 'Custom Solutions',
      desc: 'End-to-end tailored services, including specialized packaging and strategic distribution.',
      img: 'https://images.unsplash.com/photo-1494412651409-ae1e095439b1?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Our Expertise" title="Comprehensive Cold Chain" />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md z-20">
                  <s.icon className="text-blue-600 w-6 h-6" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Network = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.3 })

  return (
    <section id="network" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <SectionHeader subtitle="Our Reach" title="Nationwide Network" align="left" light={true} />
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              From our headquarters in Bangalore, Shift Controll has established a robust logistics spine connecting major metropolitan cities and key industrial hubs.
            </p>

            <div className="space-y-4">
              {['Hubs in Bangalore, Mumbai, Delhi', 'Last-mile delivery in 50+ Tier-2 cities', '24/7 Command Center monitoring'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Partner With Us
            </button>
          </div>

          <div className="lg:w-1/2 w-full" ref={ref}>
            <div
              className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 transition-all duration-1000 transform ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600"
                  className="rounded-lg mb-4 shadow-lg transform translate-y-4"
                  alt="Map"
                />
                <img
                  src="https://images.unsplash.com/photo-1591293837564-c9c05f660e63?auto=format&fit=crop&q=80&w=600"
                  className="rounded-lg mt-4 shadow-lg transform -translate-y-4"
                  alt="Warehouse"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-blue-600/90 backdrop-blur text-white px-6 py-3 rounded-full shadow-xl font-bold flex items-center gap-2 animate-bounce">
                  <MapPin size={18} /> Expanding Daily
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="bg-blue-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Get a Quote</h3>
              <p className="text-blue-100 mb-12">
                Ready to optimize your supply chain? Our team is standing by to build a custom logistics plan for your business.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Head Office</h4>
                    <p className="text-blue-100 text-sm mt-1">
                      Near Commercial Check Post,
                      <br />
                      Nimbekapura, Old Madras Road,
                      <br />
                      Bangalore – 560049
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-blue-100 text-sm mt-1">+91 7795742397</p>
                    <p className="text-blue-200 text-xs">Mon-Sat, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-blue-100 text-sm mt-1">Sales@shiftcontroll.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4 relative z-10">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <Globe size={16} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                  <option>Transportation</option>
                  <option>Warehousing</option>
                  <option>Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Tell us about your shipment requirements..."
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 text-sm py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Snowflake className="text-blue-600" />
          <span className="text-lg font-bold text-white">SHIFT CONTROLL</span>
        </div>
        <p className="mb-8">Reliable, Innovative, Sustainable Cold Chain Logistics.</p>
        <p>&copy; {new Date().getFullYear()} Shift Controll Logistics. All rights reserved.</p>
      </div>
    </footer>
  )
}

const App = () => {
  return (
    <div className="font-sans text-slate-600 selection:bg-blue-100 selection:text-blue-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Network />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
