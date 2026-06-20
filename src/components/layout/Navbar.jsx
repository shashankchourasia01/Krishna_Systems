import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'
import { navLinks } from '../../data/siteData'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const headerClass = scrolled
    ? 'glass-nav border-slate-200/90 shadow-sm dark:border-slate-700/80'
    : 'glass-nav border-transparent'

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${headerClass}`}>
        <Container className="flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] lg:h-20">
          <a href="/" className="shrink-0 min-w-0" aria-label="Krisha Systems home">
            <Logo
              size="sm"
              markClassName="h-10 w-10 min-[480px]:h-11 min-[480px]:w-11 sm:h-12 sm:w-12"
            />
          </a>

          <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden xl:block">
              <Button href="#contact">Get a Consultation</Button>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 xl:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 xl:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-700 sm:px-5">
                <Logo size="sm" showText />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-5 sm:py-6">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/80 p-5 ring-1 ring-slate-200/80 dark:from-slate-800 dark:to-slate-800/50 dark:ring-slate-700">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Need a quick consultation?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
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
