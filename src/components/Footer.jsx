import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <div className="gingham-strip" />
      <div className="gingham-dark absolute inset-0 top-2.5" />
      <div className="container relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Logo className="h-16" />
            <h2 className="font-display text-2xl font-bold">Mach Feeds</h2>
          </div>
          <p className="mb-4 max-w-sm text-sm leading-7 text-green-100/80">
            Quality animal nutrition for healthier livestock and better productivity. Think of quality? Think Mach Feeds.
          </p>
          <p className="font-display text-lg italic text-[#f2cf7a]">Quality You Can Trust.</p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/60">Quick Links</h3>
          <ul className="space-y-3 text-sm text-green-100/85">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white">Our Products</Link></li>
            <li><Link to="/raw-materials" className="hover:text-white">Raw Materials</Link></li>
            <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/60">Our Products</h3>
          <ul className="space-y-3 text-sm text-green-100/85">
            <li>Dairy Feeds</li>
            <li>Poultry Feeds</li>
            <li>Pig Feeds</li>
            <li>Fish Feeds</li>
            <li>Rabbit Feeds</li>
            <li>Livestock Supplements</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/60">Get In Touch</h3>
          <ul className="space-y-4 text-sm text-green-100/85">
            <li className="flex items-start gap-3">
              <MapPin size={19} className="mt-0.5 shrink-0 text-[#f2cf7a]" />
              <span>Behind Mathai Supermarket Stores, near the Hindu Temple, Thika, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={19} className="shrink-0 text-[#f2cf7a]" />
              <a href="tel:+254721325676" className="hover:text-white">+254 721 325 676</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={19} className="shrink-0 text-[#f2cf7a]" />
              <a href="mailto:info@machfeeds.com" className="hover:text-white">info@machfeeds.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col justify-between gap-3 py-5 text-sm text-green-100/70 md:flex-row">
          <p>© {new Date().getFullYear()} Mach Feeds Limited. All rights reserved.</p>
          <p>Quality Animal Nutrition · Since 2000</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
