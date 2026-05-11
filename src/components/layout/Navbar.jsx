import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { navLinks } from '../../data/siteData'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/20">
            <span className="text-lg font-extrabold text-cyan-300">KS</span>
          </div>
          <div>
            <p className="text-base font-extrabold tracking-wide text-white">Krisha Systems</p>
            <p className="text-xs text-slate-400">IT & Services</p>
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-2 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
                Get a Consultation
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar