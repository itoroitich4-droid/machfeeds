import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MessageCircle, Phone, FlaskConical, ListChecks, TriangleAlert } from 'lucide-react'
import ItemImage from '../components/ItemImage'
import { materials } from '../data/rawMaterials'

function RawMaterialDetails() {
  const { slug } = useParams()
  const material = materials.find((m) => m.slug === slug)

  if (!material) {
    return (
      <section className="container py-24 text-center">
        <h1 className="mb-4 text-3xl font-semibold text-forest-900">Raw Material Not Found</h1>
        <Link to="/raw-materials" className="font-bold text-forest-700">Return to Raw Materials</Link>
      </section>
    )
  }

  const others = materials.filter((m) => m.slug !== material.slug).slice(0, 3)
  const message = encodeURIComponent(`Hello Mach Feeds, I would like to enquire about ${material.name} (availability, specifications and price).`)

  return (
    <>
      <section className="bg-sand/60 py-12 md:py-16">
        <div className="container">
          <Link to="/raw-materials" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-forest-700">
            <ArrowLeft size={18} /> Back to Raw Materials
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="group overflow-hidden rounded-3xl border-8 border-white shadow-[0_24px_60px_rgba(10,33,80,0.18)]">
              <ItemImage src={material.image} alt={material.name} emoji={material.emoji} tone={material.tone} ratio="aspect-[5/4]" />
            </div>
            <div>
              <span className="mb-4 inline-flex rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-forest-700">Raw Material</span>
              <h1 className="mb-5 text-4xl font-semibold leading-tight text-forest-900 md:text-5xl">{material.name}</h1>
              <p className="mb-8 text-lg leading-8 text-muted">{material.description}</p>
              <div className="flex flex-wrap gap-4">
                <a href={`https://wa.me/254721325676?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-forest-700">
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
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-forest-900">About {material.name}</h2>
            {material.overview.map((para, i) => (
              <p key={i} className="mb-5 leading-8 text-muted">{para}</p>
            ))}
            <div className="mt-8 flex gap-4 rounded-2xl bg-sand/70 p-6">
              <TriangleAlert size={22} className="mt-1 shrink-0 text-forest-700" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-forest-900">Quality and handling</h3>
                <p className="text-sm leading-7 text-muted">{material.considerations}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-sand-deep bg-white p-7 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-forest-900"><FlaskConical size={18} className="text-forest-700" /> Nutritional profile</h3>
              <p className="text-sm leading-7 text-muted">{material.nutrition}</p>
              <p className="mt-3 text-xs leading-5 text-muted/80">Figures are typical ranges only. Ask our team to confirm specifications for current stock.</p>
            </div>
            <div className="rounded-2xl border border-sand-deep bg-white p-7 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-forest-900"><ListChecks size={18} className="text-forest-700" /> Commonly used in</h3>
              <ul className="space-y-2 text-sm text-ink">
                {material.usedIn.map((u) => (
                  <li key={u} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> {u}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-sand/60">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold text-forest-900">Other ingredients</h2>
            <Link to="/raw-materials" className="hidden items-center gap-2 text-sm font-bold text-forest-700 sm:inline-flex">All raw materials <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to={`/raw-materials/${o.slug}`} className="rounded-2xl border border-sand-deep bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-forest-900">{o.emoji} {o.name}</h3>
                <p className="text-sm leading-7 text-muted">{o.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default RawMaterialDetails
