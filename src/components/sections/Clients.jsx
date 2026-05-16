import Reveal from '../ui/Reveal'
import ClientLogo from '../ui/ClientLogo'
import { clientBrands } from '../../data/clientBrands'

const Clients = () => {
  const marqueeItems = [...clientBrands, ...clientBrands]

  return (
    <section
      id="clients"
      className="surface-white overflow-hidden border-y border-slate-100 py-10 dark:border-slate-800 sm:py-12 lg:py-16"
    >
      <div className="container-custom">
        <Reveal direction="up">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted sm:text-sm sm:tracking-[0.28em]">
            Trusted by leading enterprises worldwide
          </p>
        </Reveal>

        <div className="client-marquee mt-8 sm:mt-10" aria-label="Partner company logos">
          <div className="client-marquee__track">
            {marqueeItems.map((brand, index) => (
              <ClientLogo key={`${brand.id}-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
