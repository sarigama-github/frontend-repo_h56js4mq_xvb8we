import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_20%_20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Build, launch, and scale with Origin Tech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg text-blue-200/90"
          >
            We craft SaaS platforms that turn ambitious ideas into products people love.
          </motion.p>

          <div className="mt-8 flex items-center gap-3">
            <a href="/contact" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">Start a project</a>
            <a href="/projects" className="px-5 py-3 rounded-lg border border-white/15 text-blue-100 hover:text-white hover:border-white/30 transition-colors">See our work</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-blue-200/80">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm">Products launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">200k</div>
              <div className="text-sm">Active users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-sm">Client rating</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-video rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
            <div className="w-full h-full rounded-xl bg-[conic-gradient(at_10%_10%,#1e293b_10%,#0ea5e9_30%,#1d4ed8_55%,#1e293b_80%)] opacity-70" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block">
            <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-blue-100 text-sm">
              Fast. Scalable. Secure.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
