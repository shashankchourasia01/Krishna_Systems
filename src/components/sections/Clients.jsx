import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { clients } from '../../data/siteData'

const Clients = () => {
  return (
    <section id="clients" className="section-padding">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Trusted by leading companies and delivery-focused teams
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-extrabold tracking-wide text-slate-200"
              >
                {client}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Clients