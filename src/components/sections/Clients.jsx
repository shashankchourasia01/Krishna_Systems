import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import ClientLogo from '../ui/ClientLogo'
import { clients } from '../../data/siteData'

const Clients = () => {
  return (
    <section
      id="clients"
      className="surface-white overflow-hidden border-y border-slate-100 py-10 dark:border-slate-800 sm:py-12 lg:py-14"
    >
      <Container>
        <Reveal direction="up">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted sm:tracking-[0.28em]">
            Trusted by leading companies and delivery-focused teams
          </p>
        </Reveal>

        <div className="client-grid mt-6 sm:mt-8">
          {clients.map((client, index) => (
            <Reveal key={client} delay={index * 0.06} direction="up">
              <ClientLogo name={client} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Clients
