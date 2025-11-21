function Section({ title, subtitle, children }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          {subtitle && <p className="text-blue-200/80 mt-1">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Features() {
  const items = [
    {
      title: 'SaaS Strategy',
      desc: 'From MVP to growth, we architect the roadmap that fits your business.',
    },
    {
      title: 'Product Design',
      desc: 'Clean, conversion-focused interfaces that delight users.',
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Solid infrastructure with monitoring, CI/CD, and cost control.',
    },
  ]
  return (
    <Section title="What we do" subtitle="Full-stack product development for ambitious teams">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.title} className="p-6 rounded-xl border border-white/10 bg-white/5 text-blue-100">
            <h3 className="text-white font-semibold mb-1">{i.title}</h3>
            <p className="text-sm text-blue-200/80">{i.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function ProjectsGrid() {
  const projects = [
    { name: 'Flowboard', tag: 'Analytics', color: 'from-cyan-500 to-blue-500' },
    { name: 'Ledgerly', tag: 'Fintech', color: 'from-emerald-500 to-teal-500' },
    { name: 'Quill AI', tag: 'AI Writing', color: 'from-purple-500 to-fuchsia-500' },
    { name: 'ShipFast', tag: 'DevTools', color: 'from-orange-500 to-rose-500' },
  ]
  return (
    <Section title="Featured projects" subtitle="A few highlights from recent launches">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <a key={p.name} href="/projects" className="group">
            <div className={`aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br ${p.color} p-1`}> 
              <div className="w-full h-full rounded-lg bg-slate-900/70 flex items-end p-4">
                <div>
                  <div className="text-xs text-blue-100/80">{p.tag}</div>
                  <div className="text-white font-semibold">{p.name}</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

export function CTA() {
  return (
    <Section title="Ready to build?" subtitle="Tell us about your idea and we’ll help you ship it">
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="/contact" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">Start a project</a>
        <a href="/about" className="px-5 py-3 rounded-lg border border-white/15 text-blue-100 hover:text-white hover:border-white/30 transition-colors">Learn about us</a>
      </div>
    </Section>
  )
}

export default Section
