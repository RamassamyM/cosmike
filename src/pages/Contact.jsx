import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const captchaRef = useRef(null)
  const parallaxY = useParallax(0.3)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0])
  
  // Initialize hCaptcha when component mounts
  useEffect(() => {
    // Wait for hCaptcha script to load
    const checkHCaptcha = setInterval(() => {
      if (window.hcaptcha && captchaRef.current) {
        clearInterval(checkHCaptcha)
        // Render hCaptcha if not already rendered
        if (!captchaRef.current.hasChildNodes()) {
          window.hcaptcha.render(captchaRef.current, {
            sitekey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2',
            theme: 'dark'
          })
        }
      }
    }, 100)
    
    return () => clearInterval(checkHCaptcha)
  }, [])
  
  // Generate particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 5,
  }))

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Get hCaptcha token
      const hcaptchaToken = e.target.querySelector('[name="h-captcha-response"]')?.value
      
      if (!hcaptchaToken) {
        throw new Error('Veuillez compléter le captcha')
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.project,
          subject: `Nouveau message de ${formData.name} - Cosmike Portfolio`,
          'h-captcha-response': hcaptchaToken,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', project: '' })
        
        // Reset hCaptcha
        if (window.hcaptcha) {
          window.hcaptcha.reset()
        }
        
        // Reset confirmation after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error(data.message || 'Une erreur est survenue')
      }
    } catch (err) {
      setError(err.message || 'Erreur lors de l\'envoi du message. Veuillez réessayer.')
      // Reset hCaptcha on error
      if (window.hcaptcha) {
        window.hcaptcha.reset()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Michael Ramassamy',
      link: 'https://linkedin.com/in/michaelramassamy'
    },
    // {
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    //     </svg>
    //   ),
    //   label: 'GitHub',
    //   value: 'cosmike',
    //   link: 'https://github.com'
    // }
  ]

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-accent-400 to-primary-400"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Large animated orbs */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute top-40 right-20 w-[500px] h-[500px] bg-accent-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-40 left-20 w-[450px] h-[450px] bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
            Je vous répondrai dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Envoyez-moi un message
            </h2>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start space-x-3"
              >
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="font-semibold text-green-300">Message envoyé !</p>
                  <p className="text-green-400 text-sm">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start space-x-3"
              >
                <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="font-semibold text-red-300">Erreur</p>
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all outline-none placeholder-gray-500"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all outline-none placeholder-gray-500"
                  placeholder="jean.dupont@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-semibold text-gray-300 mb-2">
                  Parlez-moi de votre projet
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 text-white rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all outline-none resize-none placeholder-gray-500"
                  placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                />
              </div>

              {/* hCaptcha */}
              <div ref={captchaRef}></div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Informations de contact
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-colors group"
                  >
                    <div className="text-accent-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                      <p className="text-white font-semibold group-hover:text-accent-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Calendar Option */}
            <div className="bg-gradient-to-br from-accent-600 to-primary-600 rounded-lg shadow-xl p-8 md:p-12 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <h3 className="text-2xl font-display font-bold">
                  Prendre rendez-vous
                </h3>
              </div>
              <p className="mb-6 opacity-90">
                Préférez discuter directement ? Planifiez un appel de 30 minutes pour échanger sur votre projet.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-accent-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                Réserver un créneau
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-lg p-6 border-l-4 border-accent-500">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p className="font-semibold text-white mb-1">Temps de réponse</p>
                  <p className="text-gray-300 text-sm">
                    Je réponds généralement sous 24h les jours ouvrés.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
