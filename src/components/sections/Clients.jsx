import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import ClientLogo from '../ui/ClientLogo'
import { clients } from '../../data/siteData'

const directions = ['up', 'left', 'up', 'right', 'up']

const Clients = () => {
  return (
    <section id="clients" className="surface-white border-y border-slate-100 py-10 dark:border-slate-800 sm:py-12 lg:py-14">
      <Container>
        <Reveal direction="up">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted sm:tracking-[0.28em]">
            Trusted by leading companies and delivery-focused teams
          </p>
        </Reveal>

        <div className="client-marquee mt-6 sm:mt-8 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, index) => (
            <Reveal key={client} delay={index * 0.06} direction={directions[index % directions.length]}>
              <div className="min-w-[140px] shrink-0 sm:min-w-0">
                <ClientLogo name={client} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Clients
