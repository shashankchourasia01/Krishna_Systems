import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { contactItems } from '../../data/siteData'
import { Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="surface-white section-padding">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
          <Reveal direction="right">
            <SectionHeading
              animate={false}
              badge="Contact"
              title="Let's build your next technology success story"
              description="Reach out for staffing, project delivery, cloud modernization, or enterprise transformation support."
            />

            <div className="space-y-3 sm:space-y-4">
              {contactItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06} direction="left">
                  <a
                    href={item.href}
                    className="card-light flex items-center gap-4 p-4 transition hover:-translate-y-0.5 hover:border-teal-100 dark:hover:border-teal-500/30 sm:p-5"
                  >
                    <div className="icon-box shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted">{item.title}</p>
                      <p className="truncate font-semibold text-heading">{item.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="left">
            <form
              className="card-light p-5 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-heading">Name</label>
                  <input id="name" type="text" className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-heading">Company</label>
                  <input id="company" type="text" className="input-field" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-heading">Email</label>
                  <input id="email" type="email" className="input-field" placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-heading">Phone</label>
                  <input id="phone" type="tel" className="input-field" placeholder="+91" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="requirement" className="mb-2 block text-sm font-medium text-heading">Requirement</label>
                  <textarea
                    id="requirement"
                    rows="5"
                    className="input-field resize-y"
                    placeholder="Tell us about your staffing or IT services requirement"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto">
                <Send size={16} />
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
