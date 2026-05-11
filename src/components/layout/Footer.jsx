import Container from '../ui/Container'
import { footerServices } from '../../data/siteData'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/20">
                <span className="text-lg font-extrabold text-cyan-300">KS</span>
              </div>
              <div>
                <p className="font-extrabold text-white">Krisha Systems</p>
                <p className="text-sm text-slate-400">Empowering enterprises with top-notch talent and specialized IT services.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerServices.map((item) => (
                <li key={item} className="text-sm text-slate-300">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>krishasystems7@gmail.com</li>
              <li>+91 9971504001</li>
              <li>Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 Krisha Systems. All Rights Reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer