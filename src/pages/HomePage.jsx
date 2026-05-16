import Hero from '../components/sections/Hero'
import Clients from '../components/sections/Clients'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import CaseStudies from '../components/sections/CaseStudies'
import CTASection from '../components/sections/CTASection'
import Contact from '../components/sections/Contact'
import Seo from '../components/seo/Seo'
import { pageSeo } from '../config/seo'

const HomePage = () => (
  <>
    <Seo {...pageSeo.home} />
    <Hero />
    <Clients />
    <About />
    <Services />
    <WhyChooseUs />
    <CaseStudies />
    <CTASection />
    <Contact />
  </>
)

export default HomePage
