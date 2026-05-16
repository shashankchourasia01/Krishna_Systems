import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { highlights } from '../../data/siteData'

const About = () => {
  return (
    <section id="about" className="surface-white section-padding">
      <Container>
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <SectionHeading
            badge="About Krisha Systems"
            title="Your Trusted Partner for Talent, Technology, and Transformation"
            description="Krisha Systems is an IT and Services company specializing in enterprise staffing and technology delivery. We focus on quality, genuine work, and long-term client relationships."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <Reveal direction="left">
            <div className="card-light h-full p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300 sm:text-sm">
                Our Journey & Mission
              </p>
              <p className="mt-4 text-sm leading-7 text-body sm:mt-5 sm:text-base sm:leading-8">
                From skilled talent deployment to end-to-end technology support, we help organizations execute faster, scale smarter, and stay aligned with business outcomes.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/50 p-5 ring-1 ring-slate-100 dark:from-slate-800 dark:to-teal-900/20 dark:ring-slate-700">
                  <p className="text-2xl font-extrabold text-heading sm:text-3xl">50+</p>
                  <p className="mt-2 text-sm text-muted">Global enterprise clients</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/50 p-5 ring-1 ring-slate-100 dark:from-slate-800 dark:to-sky-900/20 dark:ring-slate-700">
                  <p className="text-2xl font-extrabold text-heading sm:text-3xl">10+</p>
                  <p className="mt-2 text-sm text-muted">Years of delivery focus</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 0.08} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className="card-soft p-5 transition hover:-translate-y-0.5 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="icon-box shrink-0">
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-heading sm:text-lg">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-body">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
