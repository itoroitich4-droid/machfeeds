
import { MapPin, Navigation, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Logo from '../components/Logo'

function Location() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Mach%20Feeds%2C%20Thika%2C%20Kenya&query_place_id=ChIJrxpCJIVOLxgRfO3wHaLWSQ0'

  return (
    <>
      <PageHeader eyebrow="Find Us" title="Our Location">
        Visit Mach Feeds at our premises in Thika, Kenya.
      </PageHeader>

      <section className="section-padding">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-forest-700">
              Visit Mach Feeds
            </p>

            <h2 className="mb-6 text-3xl font-semibold text-forest-900">
              We'd Be Happy to Hear From You
            </h2>

            <p className="mb-8 leading-8 text-muted">
              Find our business premises in Thika and get directions
              directly through Google Maps.
            </p>

            <div className="mb-6 flex gap-4 rounded-2xl bg-sand/70 p-6">
              <MapPin className="shrink-0 text-forest-700" size={28} />
              <div>
                <h3 className="mb-2 font-bold text-forest-900">
                  Our Premises
                </h3>
                <p className="text-sm leading-7 text-muted">
                  Behind The Mathai Supermarket Stores, near the
                  Hindu Temple, Thika, Kenya.
                </p>
              </div>
            </div>

            <div className="mb-6 flex gap-4 rounded-2xl bg-sand/70 p-6">
              <Phone className="shrink-0 text-forest-700" size={28} />
              <div>
                <h3 className="mb-2 font-bold text-forest-900">
                  Call Us
                </h3>
                <a
                  href="tel:+254721325676"
                  className="text-sm text-muted hover:text-forest-700"
                >
                  +254 721 325 676
                </a>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-3.5 font-bold text-white transition hover:bg-forest-900"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>

          <div className="flex min-h-[350px] flex-col items-center justify-center gingham rounded-3xl border-8 border-white shadow-xl p-8 text-center">
            <Logo className="mb-5 h-24" />

            <h3 className="mb-3 text-2xl font-semibold text-forest-900">
              Mach Feeds on Google Maps
            </h3>

            <p className="mb-6 max-w-sm leading-7 text-muted">
              Find our actual business listing and view our location
              on Google Maps.
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-3.5 font-bold text-white transition hover:bg-forest-900"
            >
              <MapPin size={18} />
              View Mach Feeds on Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
