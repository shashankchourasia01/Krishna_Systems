import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { navLinks } from '../../data/siteData'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 ring-1 ring-teal-100">
              <span className="text-lg font-extrabold text-teal-700">KS</span>
            </div>
            <div>
              <p className="text-base font-extrabold tracking-wide text-slate-950">Krisha Systems</p>
              <p className="text-xs text-slate-500">IT & Services</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact">Get a Consultation</Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-slate-950/35 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-screen w-[85%] max-w-sm flex-col border-l border-slate-200 bg-white shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
                <div>
                  <p className="text-base font-extrabold text-slate-950">Krisha Systems</p>
                  <p className="text-xs text-slate-500">Enterprise IT & Staffing</p>
                </div>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-900"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">Need a quick consultation?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Talk to Krisha Systems for IT staffing, cloud, data, and enterprise delivery support.
                  </p>
                  <Button href="#contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
                    Get a Consultation
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar