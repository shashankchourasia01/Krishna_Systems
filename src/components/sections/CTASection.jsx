import { Rocket } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const CTASection = () => {
  return (
    <section className="section-padding surface-dark">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#0f172a_0%,#13243e_50%,#155e75_100%)] p-6 sm:rounded-[32px] sm:p-10 lg:p-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  <Rocket size={16} />
                  Ready to accelerate?
                </p>
                <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                  Ready to Accelerate Your Digital Transformation?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                  Partner with Krisha Systems for specialized IT staffing and technology delivery that moves the needle for your business.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                <Button href="#contact" className="w-full sm:w-auto">Get a Quote</Button>
                <Button href="mailto:krishasystems7@gmail.com" variant="dark" className="w-full sm:w-auto">
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default CTASection
