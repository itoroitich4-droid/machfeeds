import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MessageCircle, ShieldCheck, Truck, Phone } from 'lucide-react'
import ItemImage from '../components/ItemImage'
import { ProductCard } from '../components/Cards'
import { products, categoryMeta } from '../data/products'

function ProductDetails() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <section className="container py-24 text-center">
        <h1 className="mb-4 text-3xl font-semibold text-forest-900">Product Not Found</h1>
        <Link to="/products" className="font-bold text-forest-700">Return to Products</Link>
      </section>
    )
  }

  const meta = categoryMeta(product.category)
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug)
  const more = (related.length >= 3 ? related : [...related, ...products.filter((p) => p.category !== product.category)]).slice(0, 3)
  const message = encodeURIComponent(`Hello Mach Feeds, I would like to enquire about ${product.name}.`)

  return (
    <>
      <section className="bg-sand/60 py-12 md:py-16">
        <div className="container">
          <Link to="/products" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-forest-700">
            <ArrowLeft size={18} /> Back to Products
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="group overflow-hidden rounded-3xl border-8 border-white shadow-[0_24px_60px_rgba(10,33,80,0.18)]">
              <ItemImage src={product.image} alt={product.name} emoji={meta.emoji} tone={meta.tone} ratio="aspect-[5/4]" />
            </div>

            <div>
              <span className="mb-4 inline-flex rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-forest-700">
                {product.category}
              </span>
              <h1 className="mb-5 text-4xl font-semibold leading-tight text-forest-900 md:text-5xl">{product.name}</h1>
              <p className="mb-8 text-lg leading-8 text-muted">{product.description}</p>

              <ul className="mb-9 space-y-3 text-sm font-semibold text-ink">
                <li className="flex items-center gap-3"><ShieldCheck size={20} className="text-forest-700" /> Quality You Can Trust, from Mach Feeds Limited</li>
                <li className="flex items-center gap-3"><Truck size={20} className="text-forest-700" /> Distribution and delivery available, ask our team</li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/254721325676?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-forest-700"
                >
                  <MessageCircle size={19} /> Enquire on WhatsApp
                </a>
                <a href="tel:+254721325676" className="inline-flex items-center gap-2 rounded-full border-2 border-forest-900 px-7 py-3.5 font-bold text-forest-900 transition hover:bg-forest-900 hover:text-white">
                  <Phone size={18} /> Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold text-forest-900">You may also like</h2>
            <Link to="/products" className="hidden items-center gap-2 text-sm font-bold text-forest-700 sm:inline-flex">
              All products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails
