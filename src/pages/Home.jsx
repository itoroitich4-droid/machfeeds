import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Award, Leaf, Phone, Sprout } from 'lucide-react'
import Logo from '../components/Logo'
import SectionHeading from '../components/SectionHeading'
import ItemImage from '../components/ItemImage'
import { ProductCard, ServiceCard } from '../components/Cards'
import { heroSlides } from '../data/images'
import { products, productCategories } from '../data/products'
import { services } from '../data/services'
import { materials } from '../data/rawMaterials'

const bento = [
  { name: 'Dairy Feed', label: 'Dairy Feeds', description: 'Support healthy dairy animals and milk production.', span: 'lg:col-span-2 lg:row-span-2', ratio: 'h-full min-h-[320px]' },
  { name: 'Poultry Feed', label: 'Poultry Feeds', description: 'Growth and egg production.', span: '', ratio: 'h-full min-h-[200px]' },
  { name: 'Pig Feed', label: 'Pig Feeds', description: 'Every stage of production.', span: '', ratio: 'h-full min-h-[200px]' },
  { name: 'Fish Feed', label: 'Fish Feeds', description: 'Fish growth and productivity.', span: '', ratio: 'h-full min-h-[200px]' },
  { name: 'Sheep and Goat Feed', label: 'Sheep & Goat', description: 'Complete meals for small ruminants.', span: '', ratio: 'h-full min-h-[200px]' },
]

const reasons = [
  { icon: Award, title: 'Quality You Can Trust', description: 'We are committed to delivering quality animal nutrition solutions.' },
  { icon: Leaf, title: 'Nutritional Solutions', description: 'Products designed to support livestock health and productivity.' },
  { icon: Truck, title: 'Reliable Distribution', description: 'Product distribution and delivery services for our customers.' },
]

const stats = [
  { value: '2000', label: 'Established' },
  { value: `${products.length}`, label: 'Feed products' },
  { value: `${materials.length}`, label: 'Raw materials' },
  { value: `${services.length}`, label: 'Farmer services' },
]

function Home() {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSlide((n) => (n + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])
  const featured = ['dairy-meal-high-yield', 'layers-mash-complete-meal', 'mach-samaki', 'pig-finisher']
    .map((s) => products.find((p) => p.slug === s))

  return (
    <>
      {/* HERO - slideshow */}
      <section className="relative overflow-hidden bg-forest-950 text-white">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            referrerPolicy="no-referrer"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/65 to-forest-950/20" />

        <div className="container relative flex min-h-[640px] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <p className="rise mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur">
              <Sprout size={15} className="text-gold-light" /> Animal feeds manufacturer · Thika, Kenya
            </p>
            <h1 className="rise rise-2 mb-6 text-5xl font-semibold leading-[1.05] md:text-7xl">
              Better nutrition.
              <span className="block italic text-gold-light">Better productivity.</span>
            </h1>
            <p className="rise rise-3 mb-9 max-w-xl text-lg leading-8 text-green-100/95">
              Supporting livestock farmers with quality animal feeds, nutritional solutions and reliable services.
            </p>
            <div className="rise rise-3 flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-bold text-forest-950 shadow-lg shadow-black/20 transition hover:bg-white">
                Explore Our Products <ArrowRight size={19} />
              </Link>
              <a href="tel:+254721325676" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-4 font-bold transition hover:bg-white hover:text-forest-900">
                <Phone size={18} /> +254 721 325 676
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === slide ? 'w-10 bg-gold' : 'w-4 bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="gingham-strip" />
      </section>

      {/* STATS (overlaps hero) */}
      <section className="relative z-10 bg-white">
        <div className="container">
          <div className="-mt-px grid grid-cols-2 gap-y-6 rounded-b-3xl border border-t-0 border-sand-deep bg-white py-8 shadow-xl md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:border-r md:border-sand-deep md:last:border-0">
                <p className="font-display text-4xl font-bold text-forest-800">{s.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES - bento */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="What we offer" title="Animal nutrition solutions">
              Explore our range of animal feeds developed to support different livestock production needs.
            </SectionHeading>
            <Link to="/products" className="mb-12 inline-flex items-center gap-2 font-bold text-forest-700">
              All products <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bento.map((c) => {
              const meta = productCategories.find((x) => x.name === c.name)
              const first = products.find((p) => p.category === c.name)
              return (
                <Link key={c.name} to="/products" className={`group relative block overflow-hidden rounded-2xl shadow-md transition duration-300 hover:shadow-2xl ${c.span}`}>
                  <ItemImage src={first?.image} alt={c.label} emoji={meta.emoji} tone={meta.tone} ratio="h-full w-full" bar={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="mb-1 text-2xl font-semibold">{c.label}</h3>
                    <p className="mb-2 text-sm leading-6 text-green-100/90">{c.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-gold-light transition-all group-hover:gap-3">
                      View products <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ABOUT + WHY */}
      <section className="section-padding bg-sand">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About Mach Feeds" title="Supporting farmers through quality nutrition" />
            <p className="-mt-6 mb-5 leading-8 text-muted">
              Mach Feeds is an animal feeds manufacturer committed to providing nutritional solutions for livestock farmers. We aim to support healthier animals and improved agricultural productivity.
            </p>
            <p className="mb-8 leading-8 text-muted">
              From animal feeds to raw materials and consultation, we provide products and services that support the livestock industry.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-8 py-4 font-bold text-white transition hover:bg-forest-700">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-forest-900 p-9 text-white shadow-2xl md:p-12">
            <div className="gingham-dark absolute inset-0" />
            <Logo className="absolute -bottom-4 -right-4 h-40 opacity-20" />
            <h3 className="relative mb-8 text-2xl font-semibold">Why choose Mach Feeds?</h3>
            <div className="relative space-y-7">
              {reasons.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-forest-950">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold">{title}</h4>
                    <p className="text-sm leading-7 text-green-100/80">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Popular feeds" title="Featured products" />
            <Link to="/products" className="mb-12 inline-flex items-center gap-2 font-bold text-forest-700">
              See all products <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-sand">
        <div className="container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="How we help" title="More than animal feeds" />
            <Link to="/services" className="mb-12 inline-flex items-center gap-2 font-bold text-forest-700">
              All services <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest-800 py-20 text-white">
        <div className="gingham-dark absolute inset-0" />
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-6">
            <Logo className="hidden h-20 sm:block" />
            <div>
              <h2 className="mb-2 text-3xl font-semibold md:text-4xl">Let's grow together</h2>
              <p className="text-green-50">Talk to us about your animal nutrition requirements.</p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 font-bold text-forest-950 transition hover:bg-white">
            Get in touch <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
