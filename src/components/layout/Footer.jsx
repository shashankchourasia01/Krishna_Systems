import { Mail, Phone, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { footerServices, navLinks } from '../../data/siteData'

const Footer = () => {
  return (
    <footer className="surface-dark border-t border-white/10 py-10 text-white sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <Logo variant="dark" size="md" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Empowering enterprises with top-notch talent and specialized IT services across cloud, data, ERP, and engineering.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item} className="text-sm text-slate-300">{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:krishasystems7@gmail.com"
                  className="flex items-start gap-2.5 text-sm text-slate-300 transition hover:text-white"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                  krishasystems7@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919971504001"
                  className="flex items-start gap-2.5 text-sm text-slate-300 transition hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                  +91 9971504001
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Krisha Systems. All Rights Reserved.</p>
          <p className="text-xs sm:text-sm">Enterprise IT Services & Staffing</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
