import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import ItemImage from './ItemImage'
import { categoryMeta } from '../data/products'

const cardBase =
  'group flex flex-col overflow-hidden rounded-2xl border border-sand-deep/70 bg-white shadow-[0_2px_12px_rgba(7,37,22,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-forest-700/30 hover:shadow-[0_18px_40px_rgba(7,37,22,0.15)]'

export function ProductCard({ product }) {
  const meta = categoryMeta(product.category)
  return (
    <article className={cardBase}>
      <Link to={`/products/${product.slug}`} className="flex flex-1 flex-col" aria-label={product.name}>
        <div className="relative">
          <ItemImage src={product.image} alt={product.name} emoji={meta.emoji} tone={meta.tone} />
          <span className="absolute left-4 top-4 rounded-full bg-forest-900/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
            {product.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold text-forest-900">{product.name}</h3>
          <p className="mb-5 flex-1 text-sm leading-7 text-muted">{product.description}</p>
          <span className="inline-flex items-center justify-between border-t border-sand-deep pt-4 text-sm font-bold text-forest-700">
            View product
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-soft transition group-hover:bg-forest-800 group-hover:text-white">
              <ArrowRight size={16} />
            </span>
          </span>
        </div>
      </Link>
    </article>
  )
}

/** Raw materials: full-bleed photo tile with the details sliding over it. */
export function MaterialCard({ material }) {
  return (
    <Link
      to="/contact"
      aria-label={`Enquire about ${material.name}`}
      className="group relative block overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      <ItemImage src={material.image} alt={material.name} emoji={material.emoji} tone={material.tone} ratio="aspect-[4/5]" bar={false} />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="mb-2 text-2xl font-semibold">{material.name}</h3>
        <p className="max-h-0 overflow-hidden text-sm leading-6 text-green-100/90 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 max-sm:max-h-none max-sm:opacity-100">
          {material.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-gold-light">
          Make an enquiry <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  )
}

/** Services: alternating image / text rows. */
export function ServiceRow({ service, index }) {
  const { Icon } = service
  const flip = index % 2 === 1
  return (
    <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={`relative ${flip ? 'md:order-2' : ''}`}>
        <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(7,37,22,0.18)]">
          <ItemImage src={service.image} alt={service.title} emoji={service.emoji} tone={service.tone} ratio="aspect-[16/11]" bar={false} />
        </div>
        <div className={`absolute -bottom-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-forest-950 shadow-xl ring-4 ring-white ${flip ? 'right-6' : 'left-6'}`}>
          <Icon size={28} />
        </div>
      </div>
      <div className={flip ? 'md:order-1' : ''}>
        <p className="mb-3 font-display text-6xl font-bold leading-none text-forest-700/15">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="mb-4 text-2xl font-semibold text-forest-900 md:text-3xl">{service.title}</h3>
        <p className="mb-6 max-w-md leading-8 text-muted">{service.description}</p>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-forest-700">
          Enquire now <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

/** Compact service card used on the home page. */
export function ServiceCard({ service }) {
  const { Icon } = service
  return (
    <article className={cardBase}>
      <div className="relative">
        <ItemImage src={service.image} alt={service.title} emoji={service.emoji} tone={service.tone} ratio="aspect-[16/10]" />
        <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold text-forest-950 shadow-lg ring-4 ring-white">
          <Icon size={26} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-10">
        <h3 className="mb-2 text-xl font-semibold text-forest-900">{service.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-7 text-muted">{service.description}</p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-forest-700 transition-all hover:gap-3">
          Enquire now <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}
