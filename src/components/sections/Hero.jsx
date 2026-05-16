import { motion } from 'motion/react'
import { Sparkles, TrendingUp, Layers } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/siteData'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden surface-soft pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10 sm:-left-20 sm:h-72 sm:w-72" />
        <div className="absolute -right-10 top-16 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-500/10 sm:-right-16 sm:h-80 sm:w-80" />
        <div className="absolute bottom-0 left-1/2 h-48 w-[min(100%,36rem)] -translate-x-1/2 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-500/10" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2">
                <Sparkles size={14} className="text-teal-600" />
                Enterprise IT Services
              </span>
            </Reveal>

            <Reveal delay={0.08} direction="up">
              <h1 className="mt-5 break-words text-[1.75rem] font-extrabold leading-[1.15] text-heading min-[480px]:text-4xl sm:mt-6 sm:text-5xl lg:text-6xl">
                Enterprise IT Services and Staffing That{' '}
                <span className="gradient-text">Deliver Real Results</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15} direction="up">
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-body sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                Krisha Systems helps businesses scale with high-quality staffing solutions and expert IT services across Data & AI, Cloud, Integration, Full Stack, SAP, Oracle, and Salesforce.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
                <Button href="#contact" className="w-full sm:w-auto">Book a Call</Button>
                <Button href="#services" variant="secondary" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:mt-10 sm:gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="card-light p-4 text-center sm:p-5 lg:text-left">
                    <p className="text-2xl font-extrabold text-heading sm:text-3xl">{item.value}</p>
                    <p className="mt-1.5 text-xs text-muted sm:mt-2 sm:text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} direction="left">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto w-full max-w-md lg:max-w-xl"
            >
              <div className="card-light overflow-hidden p-3 sm:p-5">
                <div className="rounded-[20px] bg-[linear-gradient(135deg,#0f172a_0%,#133155_55%,#155e75_100%)] p-5 text-white sm:rounded-[24px] sm:p-8">
                  <div className="mb-4 flex items-center gap-2 text-cyan-300">
                    <TrendingUp size={18} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Delivery Metrics</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                      <p className="text-xs text-slate-200 sm:text-sm">Cloud Readiness</p>
                      <p className="mt-2 text-2xl font-bold sm:mt-3 sm:text-3xl">94%</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                      <p className="text-xs text-slate-200 sm:text-sm">Delivery Speed</p>
                      <p className="mt-2 text-2xl font-bold sm:mt-3 sm:text-3xl">2x</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:col-span-2 sm:p-5">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Layers size={16} />
                        <p className="text-xs sm:text-sm">Technology Coverage</p>
                      </div>
                      <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4 lg:justify-start">
                        {['Data & AI', 'Cloud', 'Integration', 'SAP', 'Oracle', 'Salesforce'].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white sm:px-3 sm:text-xs"
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
