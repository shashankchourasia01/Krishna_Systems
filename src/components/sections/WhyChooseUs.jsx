import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { reasons } from '../../data/siteData'
import { CheckCircle2, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <section className="surface-white section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
          <Reveal direction="right">
            <SectionHeading
              animate={false}
              badge="Why Choose Us"
              title="Expertise That Scales With Your Ambition"
              description="We bridge the gap between technical complexity and business outcomes by focusing on speed, security, strategic alignment, and delivery quality."
            />
            <div className="mt-6 hidden items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/60 p-4 dark:border-teal-500/20 dark:bg-teal-500/10 lg:flex">
              <Zap className="shrink-0 text-teal-700 dark:text-teal-300" size={22} />
              <p className="text-sm leading-6 text-body">
                Rapid team deployment with enterprise-grade vetting and ongoing delivery support.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} direction="left">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {reasons.map((reason, index) => (
                <Reveal key={reason} delay={index * 0.05} direction={index % 2 === 0 ? 'up' : 'scale'}>
                  <div className="card-light p-4 transition hover:-translate-y-0.5 hover:border-teal-100 dark:hover:border-teal-500/30 sm:p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-teal-700 dark:text-teal-400" size={18} />
                      <p className="text-sm leading-7 text-body">{reason}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
