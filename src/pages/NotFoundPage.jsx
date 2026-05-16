import { Home } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'
import { pageSeo } from '../config/seo'

const NotFoundPage = () => (
  <>
    <Seo {...pageSeo.notFound} />
    <section className="section-padding surface-soft flex min-h-[60vh] items-center">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="text-6xl font-extrabold text-teal-700 dark:text-teal-400 sm:text-8xl">404</p>
          <h1 className="section-title mt-4">Page not found</h1>
          <p className="section-copy mx-auto mt-4">
            The page you requested does not exist or may have been moved. Head back to our homepage to explore our IT services.
          </p>
          <Button href="/" className="mt-8 inline-flex gap-2">
            <Home size={16} />
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  </>
)

export default NotFoundPage
