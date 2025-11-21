import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Contact us</h1>
          <p className="text-blue-200/90 mb-8">Tell us about your project and we’ll reach out within one business day.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">Send message</button>
            {status && <p className="text-sm text-blue-200/80">{status}</p>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
