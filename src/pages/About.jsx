import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">About Origin Tech</h1>
          <p className="text-blue-200/90 mb-6">
            We’re a product studio focused on building SaaS platforms for startups and scale-ups. Our team blends strategy, design, and engineering to take ideas from zero to one—and beyond.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="text-3xl font-bold text-white">2019</div>
              <div className="text-sm text-blue-200/80">Founded</div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="text-3xl font-bold text-white">15</div>
              <div className="text-sm text-blue-200/80">Team members</div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-sm text-blue-200/80">Industries served</div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold mb-2">Our approach</h3>
              <p className="text-blue-200/80 text-sm">We partner closely with founders to validate assumptions early, iterate quickly, and build scalable systems that last.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold mb-2">What we value</h3>
              <p className="text-blue-200/80 text-sm">Clarity, ownership, and craftsmanship. We care about doing the right work the right way.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
