import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import Logo from '../components/Logo'

function NotFound() {
  return (
    <section className="gingham flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-xl rounded-3xl bg-white/95 p-10 text-center shadow-xl">
        <Logo className="mx-auto mb-5 h-20" />
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-forest-700">Error 404</p>
        <h1 className="mb-4 text-4xl font-semibold text-forest-900 md:text-5xl">Page not found</h1>
        <p className="mb-8 text-muted">Sorry, the page you're looking for doesn't exist or may have been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-3.5 font-bold text-white transition hover:bg-forest-900">
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
