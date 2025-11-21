import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const demoProjects = [
  {
    name: 'Flowboard Analytics',
    description: 'Self-serve analytics for SaaS. Real-time dashboards, funnels, and retention insights.',
    tags: ['Next.js', 'Postgres', 'tRPC'],
  },
  {
    name: 'Ledgerly Finance',
    description: 'A modern bookkeeping platform with bank feeds, rules, and auto-categorization.',
    tags: ['React', 'Node', 'Plaid'],
  },
  {
    name: 'Quill AI',
    description: 'A writing assistant for teams with templates, brand voice, and collaboration.',
    tags: ['OpenAI', 'Python', 'Redis'],
  },
  {
    name: 'ShipFast CI',
    description: 'Developer tooling for preview environments, load testing, and rollbacks.',
    tags: ['Go', 'Kubernetes', 'Grafana'],
  },
]

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-6">Projects</h1>
          <p className="text-blue-200/90 mb-10 max-w-3xl">A sample of the products we’ve built for fast-moving teams. We design for outcomes and measure success by the value shipped.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {demoProjects.map((p) => (
              <div key={p.name} className="p-6 rounded-xl border border-white/10 bg-white/5">
                <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-white/10 mb-4" />
                <h3 className="text-white font-semibold">{p.name}</h3>
                <p className="text-sm text-blue-200/80 mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-white/10 text-xs text-blue-100 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
