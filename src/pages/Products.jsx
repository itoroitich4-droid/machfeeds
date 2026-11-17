import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { ProductCard } from '../components/Cards'
import { products, productCategories } from '../data/products'

function Products() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? products : products.filter((p) => p.category === active)
  const tabs = ['All', ...productCategories.map((c) => c.name).filter((n) => products.some((p) => p.category === n))]

  return (
    <>
      <PageHeader eyebrow="Our Products" title="Quality Animal Feeds">
        Explore the Mach Feeds range of animal nutrition products developed for different livestock and poultry needs.
      </PageHeader>

      <section className="section-padding bg-sand/60">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-center gap-2.5" role="tablist" aria-label="Filter products">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  active === tab
                    ? 'border-forest-700 bg-forest-700 text-white shadow-md'
                    : 'border-sand-deep bg-white text-ink hover:border-forest-700 hover:text-forest-700'
                }`}
              >
                {tab}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted">{shown.length} product{shown.length !== 1 && 's'}</span>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
