import { motion } from 'motion/react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { services, ArrowIcon } from '../../data/siteData'
import { useIntersectionObserver, REVEAL_EASE } from '../../hooks/useIntersectionObserver'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Services = () => {
  const { threshold, rootMargin } = useScrollAnimation()
  const { ref, isVisible } = useIntersectionObserver({ threshold, rootMargin, once: true })

  return (
    <section id="services" className="surface-blue section-padding">
      <Container>
        <SectionHeading
          badge="Services"
          title="End-to-End Technology Services"
          description="Comprehensive enterprise solutions tailored for scalability, performance, and future readiness."
          align="center"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
          }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: REVEAL_EASE },
                  },
                }}
                className="service-card card-interactive flex h-full flex-col"
              >
                <div className="icon-box-sky mb-5 inline-flex">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-heading sm:text-xl">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-body">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
                >
                  Learn More <ArrowIcon size={16} />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

export default Services
