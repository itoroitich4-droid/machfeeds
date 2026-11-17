import logo from '../assets/logo-clean.png'

export default function Logo({ className = 'h-12', alt = 'Mach Feeds logo' }) {
  return <img src={logo} alt={alt} className={`w-auto object-contain ${className}`} />
}
