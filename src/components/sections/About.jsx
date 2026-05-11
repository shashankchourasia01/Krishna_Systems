import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { highlights } from '../../data/siteData'

const About = () => {
  return (
    <section id="about" className="surface-white section-padding">
      <Container>
        <SectionHeading
          badge="About Krisha Systems"
          title="Your Trusted Partner for Talent, Technology, and Transformation"
          description="Krisha Systems is an IT and Services company specializing in enterprise staffing and technology delivery. We focus on quality, genuine work, and long-term client relationships."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card-light h-full p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                Our Journey & Mission
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                From skilled talent deployment to end-to-end technology support, we help organizations execute faster, scale smarter, and stay aligned with business outcomes.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-3xl font-extrabold text-slate-950">50+</p>
                  <p className="mt-2 text-sm text-slate-500">Global enterprise clients</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-3xl font-extrabold text-slate-950">10+</p>
                  <p className="mt-2 text-sm text-slate-500">Years of delivery focus</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="card-soft p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-teal-50 p-3 text-teal-700">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
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