import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {isScrolled ? (
              <img 
                src="/cosmike_logo_dark_grey.png" 
                alt="Cosmike" 
                className="h-10 w-auto object-contain transition-all duration-300"
              />
            ) : (
              <>
                <img 
                  src="/Lune.avif" 
                  alt="Cosmike Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span 
                  className="text-2xl font-bold text-white transition-colors duration-300"
                  style={{ fontFamily: 'Spinnaker, sans-serif' }}
                >
                  Cosmike
                </span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-accent-400'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-accent-600' 
                      : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm px-6 py-3"
            >
              Discutons de votre projet
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-accent-50 text-accent-600'
                        : isScrolled
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-gray-200 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block btn-primary text-center text-sm mx-4"
                >
                  Discutons de votre projet
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
