import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-350">
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
