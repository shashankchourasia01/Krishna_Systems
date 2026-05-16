import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { caseStudies } from '../../data/siteData'

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding bg-slate-50 dark:bg-[#0d1524]">
      <Container>
        <SectionHeading
          badge="Impact Through Excellence"
          title="Real-world results delivered to industry leaders"
          description="Business outcomes across banking, fintech, and e-commerce — powered by Krisha Systems delivery teams."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            const directions = ['up', 'left', 'right']
            return (
              <Reveal key={study.title} delay={index * 0.08} direction={directions[index % 3]}>
                <article className="card-light group flex h-full flex-col p-6 transition hover:-translate-y-1 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
                      {study.tag}
                    </span>
                    <div className="icon-box-sky p-2.5 transition group-hover:bg-sky-50 dark:group-hover:bg-sky-500/20">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-heading sm:text-2xl">{study.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-body sm:mt-4">{study.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default CaseStudies
