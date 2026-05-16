import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import Hero from './components/sections/Hero'
import Clients from './components/sections/Clients'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WhyChooseUs from './components/sections/WhyChooseUs'
import CaseStudies from './components/sections/CaseStudies'
import CTASection from './components/sections/CTASection'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-350">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
