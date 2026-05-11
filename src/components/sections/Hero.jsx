import { motion } from 'motion/react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/siteData'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Enterprise IT Services
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Enterprise IT Services and Staffing That Deliver Real Results
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Krisha Systems helps businesses scale with high-quality staffing solutions and expert IT services across Data & AI, Cloud, Integration, Full Stack, SAP, Oracle, and Salesforce.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact">Book a Call</Button>
                <Button href="#services" variant="secondary">Explore Services</Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="card-base rounded-2xl p-5">
                    <p className="text-2xl font-extrabold text-white sm:text-3xl">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-xl"
            >
              <div className="card-base rounded-[28px] p-6 sm:p-8">
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-transparent p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-900/70 p-5">
                      <p className="text-sm text-slate-400">Cloud Readiness</p>
                      <p className="mt-3 text-3xl font-bold text-white">94%</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/70 p-5">
                      <p className="text-sm text-slate-400">Delivery Speed</p>
                      <p className="mt-3 text-3xl font-bold text-white">2x</p>
                    </div>
                    <div className="sm:col-span-2 rounded-2xl bg-slate-900/70 p-5">
                      <p className="text-sm text-slate-400">Technology Coverage</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Data & AI', 'Cloud', 'Integration', 'SAP', 'Oracle', 'Salesforce'].map((tag) => (
                          <span key={tag} className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
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