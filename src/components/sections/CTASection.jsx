import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const CTASection = () => {
  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-cyan-300/20 bg-gradient-to-r from-cyan-400/15 via-sky-400/10 to-cyan-400/5 p-8 sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Ready to accelerate?
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Ready to Accelerate Your Digital Transformation?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
                Partner with Krisha Systems for specialized IT staffing and technology delivery that moves the needle for your business.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact">Get a Quote</Button>
                <Button href="mailto:krishasystems7@gmail.com" variant="secondary">
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