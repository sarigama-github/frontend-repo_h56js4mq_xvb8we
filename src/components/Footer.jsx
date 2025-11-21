function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-100">
        <div>
          <h4 className="text-white font-semibold mb-2">Origin Tech</h4>
          <p className="text-sm text-blue-200/80">Building modern SaaS solutions that help startups launch faster and scale smarter.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Get in touch</h4>
          <p className="text-sm text-blue-200/80">hello@origintech.com</p>
          <p className="text-sm text-blue-200/80">San Francisco, CA</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-blue-200/70 text-sm">
          © {new Date().getFullYear()} Origin Tech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
