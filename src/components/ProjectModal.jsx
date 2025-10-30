import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      setCurrentImageIndex(0) // Reset to first image when opening modal
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  if (!project) return null

  // Support both single image (string) and multiple images (array)
  const images = Array.isArray(project.images) ? project.images : [project.image]
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
        >
          {/* Header Image Carousel */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </>
            )}
            
            {/* Image Indicators */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title & Tags */}
            <div className="mb-8">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-accent-50 text-accent-700 font-semibold text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Context */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Contexte
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.context}
              </p>
            </div>

            {/* Role */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Rôle
              </h3>
              <p className="text-gray-600 font-semibold">
                {project.role}
              </p>
            </div>

            {/* Actions */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Actions réalisées
              </h3>
              <ul className="space-y-2">
                {project.actions.map((action, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                Résultats
              </h3>
              <ul className="space-y-2">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">
                Intéressé par un projet similaire ?
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="btn-primary"
                >
                  Discutons de votre projet
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
