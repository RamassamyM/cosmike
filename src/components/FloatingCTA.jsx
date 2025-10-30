import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const FloatingCTA = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            to="/contact"
            className="flex items-center space-x-2 px-6 py-4 bg-accent-600 text-white font-semibold rounded-full shadow-2xl hover:bg-accent-700 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Contactez-moi</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
