import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { caseStudies } from '../../data/siteData'

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding bg-slate-50">
      <Container>
        <SectionHeading
          badge="Impact Through Excellence"
          title="Real-world results delivered to industry leaders"
          description="A clean case-study style section inspired by your Visily design, showing business outcomes across banking, fintech, and e-commerce."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.08}>
              <article className="card-light h-full p-6">
                <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {study.tag}
                </span>
                <h3 className="mt-5 text-2xl font-bold text-slate-950">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{study.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CaseStudies