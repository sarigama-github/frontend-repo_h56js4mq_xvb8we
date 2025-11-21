import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Features, ProjectsGrid, CTA } from '../components/Sections'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProjectsGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
