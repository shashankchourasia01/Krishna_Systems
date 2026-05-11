import { motion } from 'motion/react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { services, ArrowIcon } from '../../data/siteData'

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <Container>
        <SectionHeading
          badge="Services"
          title="End-to-End Technology Services"
          description="Comprehensive enterprise solutions tailored for scalability, performance, and future readiness."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="service-card"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
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