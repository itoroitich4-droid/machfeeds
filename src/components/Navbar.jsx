import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Raw Materials', path: '/raw-materials' },
  { name: 'Services', path: '/services' },
  { name: 'Location', path: '/location' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="hidden bg-forest-900 text-xs text-green-100 md:block">
        <div className="container flex items-center justify-between py-2">
          <p>Think Quality? Think Mach Feeds. · Thika, Kenya</p>
          <a href="tel:+254721325676" className="inline-flex items-center gap-2 font-semibold hover:text-white">
            <Phone size={13} /> +254 721 325 676
          </a>
        </div>
      </div>

      <div className="container flex min-h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Logo className="h-12" />
          <div className="leading-none">
            <p className="font-display text-xl font-bold tracking-tight text-forest-900">Mach Feeds</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Quality Animal Nutrition</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-leaf-soft text-forest-700' : 'text-ink hover:bg-sand hover:text-forest-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-3 rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-forest-950 shadow-sm transition hover:bg-forest-900">
            Contact Us
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-forest-900 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <div className="gingham-strip h-[3px]" />

      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-6 py-4 shadow-lg lg:hidden">
          {[...navLinks, { name: 'Contact Us', path: '/contact' }].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b border-gray-100 py-3.5 text-sm font-semibold last:border-0 ${isActive ? 'text-forest-700' : 'text-ink'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
