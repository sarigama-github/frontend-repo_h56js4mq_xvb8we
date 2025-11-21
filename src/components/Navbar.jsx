import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive ? 'text-white bg-white/10' : 'text-blue-100 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">Origin Tech</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 text-blue-100 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-1">
            <NavLink onClick={() => setOpen(false)} to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
