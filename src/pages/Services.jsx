import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Logo from '../components/Logo'
import { ServiceRow } from '../components/Cards'
import { services } from '../data/services'

function Services() {
  return (
    <>
      <PageHeader eyebrow="How We Help" title="Our Services">
        More than animal feeds. We support farmers, distributors and businesses through our range of services.
      </PageHeader>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading eyebrow="Supporting you" title="Supporting Your Business">
            Our services are intended to make it easier for customers to access animal nutrition products and related support. Contact us to confirm the services available for your needs.
          </SectionHeading>

          <div className="space-y-20 md:space-y-28">
            {services.map((service, i) => (
              <ServiceRow key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-700 py-16 text-white">
        <div className="gingham-dark absolute inset-0" />
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <Logo className="h-16" />
          <h2 className="text-3xl font-semibold md:text-4xl">Need Assistance?</h2>
          <p className="max-w-xl leading-8 text-green-50">
            Get in touch with Mach Feeds to discuss your animal nutrition and business requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-forest-900 transition hover:bg-gold hover:text-white">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
