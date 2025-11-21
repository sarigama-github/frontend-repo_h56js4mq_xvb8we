import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-white tracking-tight mb-4">404</h1>
          <p className="text-blue-200/90 mb-6">The page you’re looking for doesn’t exist.</p>
          <a href="/" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">Go home</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
