import Logo from './Logo'
import { heroImages } from '../data/images'

export default function PageHeader({ eyebrow, title, children, image = heroImages.field }) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" referrerPolicy="no-referrer" />}
      <div className="gingham-dark absolute inset-0" />
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-forest-700/40 blur-3xl" />
      <div className="container relative flex items-center justify-between gap-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="rise mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#f2cf7a]">
            <span className="h-px w-8 bg-[#f2cf7a]" /> {eyebrow}
          </p>
          <h1 className="rise rise-2 mb-5 text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="rise rise-3 max-w-xl text-lg leading-8 text-green-100/90">{children}</p>
        </div>
        <Logo className="hidden h-36 opacity-95 drop-shadow-2xl md:block lg:h-44" />
      </div>
      <div className="gingham-strip" />
    </section>
  )
}
