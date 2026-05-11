import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { contactItems } from '../../data/siteData'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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
                    className="card-base flex items-center gap-4 rounded-2xl p-5 transition hover:bg-white/10"
                  >
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.title}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="card-base rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                  <input type="text" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40" placeholder="Your name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-slate-200">Company</label>
                  <input type="text" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40" placeholder="Company name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                  <input type="email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40" placeholder="name@company.com" />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-slate-200">Phone</label>
                  <input type="text" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40" placeholder="+91" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">Requirement</label>
                  <textarea rows="5" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40" placeholder="Tell us about your staffing or IT services requirement"></textarea>
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