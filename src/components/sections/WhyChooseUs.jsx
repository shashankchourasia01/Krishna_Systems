import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { reasons } from '../../data/siteData'
import { CheckCircle2 } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              badge="Why Choose Us"
              title="Expertise That Scales With Your Ambition"
              description="We bridge the gap between technical complexity and business outcomes by focusing on speed, security, strategic alignment, and delivery quality."
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="card-base rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 text-cyan-300" size={18} />
                    <p className="text-sm leading-7 text-slate-200">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs