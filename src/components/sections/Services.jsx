import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { services, ArrowIcon } from '../../data/siteData'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Services = () => {
  const ref = useRef(null)
  const scrollDir = useScrollDirection()
  const { isMobile, inViewAmount, inViewMargin, replayOnScroll } = useScrollAnimation()

  const isInView = useInView(ref, {
    amount: inViewAmount,
    margin: inViewMargin,
    once: !replayOnScroll,
  })

  const yOffset = isMobile ? (scrollDir === 'down' ? 36 : -36) : 30

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
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
          }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: yOffset, scale: isMobile ? 0.94 : 1 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="service-card flex h-full flex-col"
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
