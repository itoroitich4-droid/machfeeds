import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { MaterialCard } from '../components/Cards'
import { materials } from '../data/rawMaterials'

function RawMaterials() {
  return (
    <>
      <PageHeader eyebrow="Feed Ingredients" title="Raw Materials">
        Explore ingredients used in animal nutrition and feed manufacturing.
      </PageHeader>

      <section className="section-padding bg-sand/60">
        <div className="container">
          <SectionHeading eyebrow="What we supply" title="Ingredients for Animal Nutrition">
            We work with a range of agricultural ingredients and feed materials. Contact our team to confirm availability, quality specifications and supply arrangements.
          </SectionHeading>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <MaterialCard key={material.slug} material={material} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl bg-forest-900 p-8 text-white md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="mb-1 text-2xl font-semibold">Looking for a specific ingredient?</h3>
              <p className="text-green-100/80">Ask about availability, specifications and bulk supply.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-forest-950 transition hover:bg-white hover:text-forest-900">
              Talk to our team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default RawMaterials
