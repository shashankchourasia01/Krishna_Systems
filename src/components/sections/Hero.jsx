import { motion } from 'motion/react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/siteData'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden surface-soft pt-10 sm:pt-14 lg:pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Enterprise IT Services</span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Enterprise IT Services and Staffing That Deliver Real Results
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Krisha Systems helps businesses scale with high-quality staffing solutions and expert IT services across Data & AI, Cloud, Integration, Full Stack, SAP, Oracle, and Salesforce.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact">Book a Call</Button>
                <Button href="#services" variant="secondary">Explore Services</Button>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="card-light p-5">
                    <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-xl"
            >
              <div className="card-light overflow-hidden p-4 sm:p-5">
                <div className="rounded-[24px] bg-[linear-gradient(135deg,#0f172a_0%,#133155_55%,#155e75_100%)] p-6 text-white sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                      <p className="text-sm text-slate-200">Cloud Readiness</p>
                      <p className="mt-3 text-3xl font-bold">94%</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                      <p className="text-sm text-slate-200">Delivery Speed</p>
                      <p className="mt-3 text-3xl font-bold">2x</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm sm:col-span-2">
                      <p className="text-sm text-slate-200">Technology Coverage</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Data & AI', 'Cloud', 'Integration', 'SAP', 'Oracle', 'Salesforce'].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Hero