import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Home,
  Building2,
  ShieldCheck,
  Star,
  Sparkle,
  CheckCircle2,
  Phone,
  Mail,
  Send
} from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-sm">
            <Sparkles className="text-white" size={20} />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-blue-700">PureClean</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-blue-700/80 hover:text-blue-700 transition">Services</a>
          <a href="#pricing" className="text-blue-700/80 hover:text-blue-700 transition">Pricing</a>
          <a href="#testimonials" className="text-blue-700/80 hover:text-blue-700 transition">Testimonials</a>
          <a href="#contact" className="text-blue-700/80 hover:text-blue-700 transition">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 transition">
          Book Now
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-[-12rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-sky-200 blur-3xl opacity-50" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-blue-200 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-700 mb-4">
            <ShieldCheck size={14} className="text-blue-600" />
            Trusted professional cleaners
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
            Fresh, Hygienic Spaces
            <br />
            with a Sparkling Finish
          </h1>
          <p className="mt-4 text-blue-700/80 text-lg">
            Premium home and office cleaning with vetted experts, eco-friendly supplies, and a 100% satisfaction guarantee.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 font-semibold shadow-md hover:bg-blue-700 transition">
              <Send size={18} /> Book Now
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white text-blue-700 px-6 py-3 font-semibold hover:bg-blue-50 transition">
              <Sparkle size={18} /> Explore Services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" className="text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-blue-700/70">Rated 4.9/5 by 1,200+ happy customers</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-blue-100">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1800&auto=format&fit=crop"
              alt="Cleaning staff at work"
              className="h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-sky-400/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      icon: Home,
      title: 'Home Cleaning',
      desc: 'Regular, deep, and move-in/move-out cleaning tailored to your home.'
    },
    {
      icon: Building2,
      title: 'Office Cleaning',
      desc: 'Reliable office and commercial space cleaning to keep teams healthy.'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      desc: 'Thorough top-to-bottom cleaning with meticulous attention to detail.'
    }
  ]
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Professional Cleaning Services</h2>
          <p className="mt-3 text-blue-700/80">Flexible plans, eco-friendly products, and trusted professionals.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl bg-white border border-blue-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 text-white flex items-center justify-center shadow-sm">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-blue-900">{item.title}</h3>
              <p className="mt-2 text-sm text-blue-700/80">{item.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-blue-700/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-blue-500" size={16}/> Background-checked pros</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-blue-500" size={16}/> Eco-friendly supplies</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-blue-500" size={16}/> Flexible scheduling</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Sarah M.',
      text: 'The team left my apartment spotless. Booking was easy and the service was exceptional!',
    },
    {
      name: 'David R.',
      text: 'Our office has never felt so fresh. Reliable, professional, and friendly crew.',
    },
    {
      name: 'Amelia K.',
      text: 'Loved the attention to detail. The deep clean made my home feel brand new.',
    },
  ]
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">What Customers Say</h2>
          <p className="mt-3 text-blue-700/80">Trusted by families and businesses across the city.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-blue-100 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-400" />
                <div>
                  <p className="font-semibold text-blue-900">{q.name}</p>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" className="text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-blue-700/80">“{q.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 79,
      tagline: 'Studio / 1-Bed Home',
      features: ['Kitchen & bathrooms', 'Dusting & surfaces', 'Floors vacuum & mop'],
      highlight: false,
    },
    {
      name: 'Standard',
      price: 129,
      tagline: '2–3 Bed Home or Small Office',
      features: ['All Basic features', 'Appliances exterior', 'Trash & touch points'],
      highlight: true,
    },
    {
      name: 'Deep Clean',
      price: 219,
      tagline: 'Large Home or Office',
      features: ['All Standard features', 'Baseboards & blinds', 'Inside oven & fridge'],
      highlight: false,
    },
  ]
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-blue-700/80">No surprises. Choose a plan that fits your space.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`rounded-2xl border p-6 shadow-sm ${p.highlight ? 'bg-white border-blue-300 ring-2 ring-blue-200' : 'bg-white border-blue-100'}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-blue-900">{p.name}</h3>
                {p.highlight && (
                  <span className="text-xs font-semibold text-blue-700 bg-sky-100 border border-blue-200 rounded-full px-2 py-1">Most Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-blue-900">${p.price}</span>
                <span className="text-blue-700/60 mb-1">/ visit</span>
              </div>
              <p className="text-sm text-blue-700/80 mt-1">{p.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-blue-700/80">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle2 className="text-blue-500" size={16}/> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 font-semibold shadow-sm transition ${p.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-blue-200 text-blue-700 hover:bg-blue-50'}`}>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Get Your Free Quote</h2>
            <p className="mt-3 text-blue-700/80">Tell us about your space and preferred schedule. We’ll get back within minutes.</p>
            <div className="mt-6 space-y-3 text-blue-700/80">
              <p className="flex items-center gap-2"><Phone className="text-blue-500" size={18}/> (555) 123-4567</p>
              <p className="flex items-center gap-2"><Mail className="text-blue-500" size={18}/> hello@pureclean.com</p>
            </div>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-blue-100 p-6">
              <p className="text-sm text-blue-700/80">We use eco-friendly products and bring our own supplies. Fully insured and background-checked professionals.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-blue-100 p-6 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900">Full Name</label>
                <input required type="text" className="mt-1 w-full rounded-xl border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white text-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white text-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-xl border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white text-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900">Service</label>
                <select className="mt-1 w-full rounded-xl border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white text-blue-900">
                  <option>Home Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-blue-900">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white text-blue-900" placeholder="Tell us about your space, size, and preferred dates..." />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 font-semibold shadow-md hover:bg-blue-700 transition">
              <Send size={18}/> Request Quote
            </button>
            {submitted && (
              <p className="mt-3 text-sm text-green-700">Thanks! We received your request and will contact you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-blue-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-700/70">© {new Date().getFullYear()} PureClean. All rights reserved.</p>
        <div className="flex items-center gap-2 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#F59E0B" className="text-amber-400" />
          ))}
          <span className="text-sm text-blue-700/70 ml-2">Satisfaction Guaranteed</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-blue-900">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
