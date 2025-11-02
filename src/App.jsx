import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import FloatingCTA from './components/FloatingCTA'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Realisations from './pages/Realisations'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Footer from './components/Footer'

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router basename="/cosmike">
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Legal />} />
        </Routes>
        <Footer />
        <FloatingCTA show={showFloatingCTA} />
      </div>
    </Router>
  )
}

export default App
