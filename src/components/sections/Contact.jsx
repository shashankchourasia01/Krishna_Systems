import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { contactItems } from '../../data/siteData'

const Contact = () => {
  return (
    <section id="contact" className="surface-white section-padding">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <SectionHeading
              badge="Contact"
              title="Let’s build your next technology success story"
              description="Reach out for staffing, project delivery, cloud modernization, or enterprise transformation support."
            />

            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="card-light flex items-center gap-4 p-5 transition hover:-translate-y-0.5"
                  >
                    <div className="rounded-2xl bg-teal-50 p-3 text-teal-700">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.title}</p>
                      <p className="font-semibold text-slate-950">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="card-light p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">Name</label>
                  <input type="text" className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">Company</label>
                  <input type="text" className="input-field" placeholder="Company name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">Email</label>
                  <input type="email" className="input-field" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">Phone</label>
                  <input type="text" className="input-field" placeholder="+91" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-800">Requirement</label>
                  <textarea
                    rows="5"
                    className="input-field"
                    placeholder="Tell us about your staffing or IT services requirement"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Send Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Contact