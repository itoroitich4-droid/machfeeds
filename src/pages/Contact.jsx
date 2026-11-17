
import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )

    window.location.href =
      `mailto:info@machfeeds.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Contact Mach Feeds">
        Have a question about our products or services? We'd be happy to hear from you.
      </PageHeader>

      <section className="section-padding">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-semibold text-forest-900">
              Let's Talk
            </h2>
            <p className="mb-9 leading-8 text-muted">
              Reach out to our team for product enquiries, distribution
              opportunities, raw materials and other business matters.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-leaf-soft text-forest-700">
                  <Phone size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-forest-900">Phone</h3>
                  <a
                    href="tel:+254721325676"
                    className="text-muted hover:text-forest-700"
                  >
                    +254 721 325 676
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-leaf-soft text-forest-700">
                  <Mail size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-forest-900">Email</h3>
                  <a
                    href="mailto:info@machfeeds.com"
                    className="text-muted hover:text-forest-700"
                  >
                    info@machfeeds.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-leaf-soft text-forest-700">
                  <MapPin size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-forest-900">Location</h3>
                  <p className="text-muted">
                    Contact us for our verified physical address.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/254721325676"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-4 font-bold text-white transition hover:bg-forest-700"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-sand-deep bg-sand/70 p-8 shadow-sm md:p-10">
            <h2 className="mb-7 text-2xl font-semibold text-forest-900">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                  placeholder="What is your enquiry about?"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-7 py-4 font-bold text-white transition hover:bg-forest-900"
              >
                Send Message <Send size={18} />
              </button>

              <p className="text-xs leading-5 text-gray-500">
                Your default email application will open with your
                message prepared. The website does not store or send
                form submissions directly.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
