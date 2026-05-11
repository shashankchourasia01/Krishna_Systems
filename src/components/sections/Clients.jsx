import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { clients } from '../../data/siteData'

const Clients = () => {
  return (
    <section id="clients" className="surface-white py-12 sm:py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Trusted by leading companies and delivery-focused teams
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-base font-extrabold tracking-wide text-slate-700 shadow-sm sm:text-lg"
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