import { Award, Target, Eye, HeartHandshake } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Logo from '../components/Logo'
import { heroImages } from '../data/images'

const pillars = [
  { Icon: Target, title: 'Our Mission', text: 'To provide quality animal nutrition solutions that support livestock farmers and agricultural productivity.' },
  { Icon: Eye, title: 'Our Vision', text: 'To be a trusted name in animal nutrition and a reliable partner to the livestock industry.' },
  { Icon: HeartHandshake, title: 'Our Values', text: 'Quality, reliability, customer commitment and continuous improvement guide our work.' },
]

function About() {
  const photo = heroImages.about
  return (
    <>
      <PageHeader eyebrow="Get to Know Us" title="About Mach Feeds">
        Committed to quality animal nutrition and supporting livestock farmers.
      </PageHeader>

      <section className="section-padding">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="Think Quality? Think Mach Feeds." />
            <p className="-mt-6 mb-5 leading-8 text-muted">
              Mach Feeds Limited is an animal feeds manufacturing company established in 2000. We are committed to providing quality animal nutrition solutions to support livestock farmers and the agricultural sector.
            </p>
            <p className="leading-8 text-muted">
              Our product range includes feeds for different animal species, raw materials and nutritional supplements. We also provide consultation and distribution services.
            </p>
          </div>

          <div className="relative">
            {photo ? (
              <img src={photo} alt="Green farmland" referrerPolicy="no-referrer" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" />
            ) : (
              <div className="gingham flex aspect-[4/3] items-center justify-center rounded-3xl border-8 border-white shadow-2xl">
                <Logo className="h-44" />
              </div>
            )}
            <div className="absolute -bottom-6 left-6 right-6 flex items-start gap-4 rounded-2xl bg-forest-900 p-6 text-white shadow-xl md:left-auto md:max-w-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold"><Award size={24} /></div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Our Commitment</h3>
                <p className="text-sm leading-6 text-green-100/85">Dependable products and services for healthier livestock and improved productivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand/70">
        <div className="container grid gap-7 md:grid-cols-3">
          {pillars.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-2xl border-t-4 border-forest-700 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-leaf-soft text-forest-700"><Icon size={28} /></div>
              <h3 className="mb-3 text-2xl font-semibold text-forest-900">{title}</h3>
              <p className="leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
