import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ExpertiseSection />
      <TechnologiesSection />
      <FeaturedProjectsSection />
      <CTASection />
    </div>
  )
}

const HeroSection = () => {
  const parallaxY = useParallax(0.5)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  // Generate particles for background animation
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 pt-20 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
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
              opacity: [0, 1, 0],
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

      {/* Large animated orbs with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          style={{ y: -parallaxY }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-1 bg-gradient-to-b from-transparent via-accent-400 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              transformOrigin: 'top',
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              CTO, développeur senior et{' '}
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">product manager</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              J'aide startups et entreprises à transformer leurs idées en applications et plateformes scalables.
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Je combine expertise technique et vision produit pour piloter vos projets, encadrer vos équipes et livrer des solutions robustes et efficaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Discutons de votre projet
              </Link>
              <Link to="/realisations" className="btn-secondary text-center">
                Voir mes réalisations
              </Link>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* 3D Code visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  {/* Glowing background */}
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow-filter">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <circle cx="250" cy="250" r="200" fill="url(#glow)" />
                  
                  {/* Rotating code brackets */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotateZ: 360,
                    }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5,
                      rotateZ: { duration: 30, repeat: Infinity, ease: "linear" }
                    }}
                    style={{ transformOrigin: '250px 250px' }}
                  >
                    <rect x="100" y="150" width="300" height="200" rx="20" fill="#6366f1" opacity="0.1" filter="url(#glow-filter)"/>
                    <text x="250" y="270" fontSize="100" fill="#6366f1" textAnchor="middle" fontFamily="monospace" filter="url(#glow-filter)">
                      {'</>'}
                    </text>
                  </motion.g>
                  
                  {/* Orbiting elements */}
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="150"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    opacity="0.2"
                    strokeDasharray="10 5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: '250px 250px' }}
                  />
                  
                  {/* Floating code symbols */}
                  <motion.g
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ transformOrigin: '80px 100px' }}
                  >
                    <circle cx="80" cy="100" r="35" fill="#0ea5e9" opacity="0.2" filter="url(#glow-filter)"/>
                    <text x="80" y="110" fontSize="24" fill="#0ea5e9" textAnchor="middle" fontFamily="monospace">{'{ }'}</text>
                  </motion.g>
                  
                  <motion.g
                    animate={{ 
                      y: [0, 20, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{ transformOrigin: '420px 120px' }}
                  >
                    <circle cx="420" cy="120" r="30" fill="#a855f7" opacity="0.2" filter="url(#glow-filter)"/>
                    <text x="420" y="130" fontSize="20" fill="#a855f7" textAnchor="middle" fontFamily="monospace">{'[ ]'}</text>
                  </motion.g>
                  
                  <motion.g
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    style={{ transformOrigin: '400px 380px' }}
                  >
                    <circle cx="400" cy="380" r="40" fill="#0ea5e9" opacity="0.2" filter="url(#glow-filter)"/>
                    <text x="400" y="390" fontSize="28" fill="#0ea5e9" textAnchor="middle" fontFamily="monospace">{'( )'}</text>
                  </motion.g>
                  
                  <motion.g
                    animate={{ 
                      y: [0, 15, 0],
                      x: [0, 10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ transformOrigin: '100px 350px' }}
                  >
                    <circle cx="100" cy="350" r="28" fill="#6366f1" opacity="0.2" filter="url(#glow-filter)"/>
                    <text x="100" y="360" fontSize="22" fill="#6366f1" textAnchor="middle" fontFamily="monospace">{'=>'}</text>
                  </motion.g>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

const ExpertiseSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const parallaxY = useParallax(0.3)

  const expertiseCards = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      title: 'Développement Web & Applications',
      description: 'Du frontend au backend, applications web et plateformes scalables.',
      tags: ['React', 'Node.js', 'Rails', 'Vue.js']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      ),
      title: 'Produit, Pilotage & Stratégie',
      description: 'Pilotage de projets, roadmap, spécifications et suivi d\'équipes.',
      tags: ['Roadmap', 'Agile', 'Specs', 'Leadership']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      title: 'Conseil & Formation',
      description: 'Audit technique Rails, stratégie produit et formations pour vos équipes.',
      tags: ['Audit', 'Architecture', 'Formation', 'Conseil']
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute top-20 right-10 w-64 h-64 bg-accent-100 rounded-full filter blur-3xl opacity-30"
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-primary-100 rounded-full filter blur-3xl opacity-30"
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-40 left-20 opacity-10"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.polygon
            points="50,10 90,90 10,90"
            fill="#6366f1"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '50px 50px' }}
          />
        </svg>
      </motion.div>
      
      <motion.div
        style={{ y: -parallaxY * 0.5 }}
        className="absolute bottom-40 right-20 opacity-10"
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <motion.rect
            x="10"
            y="10"
            width="60"
            height="60"
            fill="#0ea5e9"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '40px 40px' }}
          />
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Expertise rapide</h2>
          <p className="section-subtitle">
            Des compétences complètes pour transformer vos idées en réalité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
              className="relative group cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-600 to-primary-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              {/* Card content */}
              <div className="relative bg-white rounded-lg shadow-xl p-8 h-full border border-gray-100 group-hover:border-accent-200 transition-all duration-300">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl flex items-center justify-center text-accent-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {card.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-accent-50 to-primary-50 text-accent-700 text-sm rounded-full font-medium hover:from-accent-100 hover:to-primary-100 transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeaturedProjectsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const parallaxY = useParallax(0.4)

  const projects = [
    {
      title: 'Mercidocteur',
      description: 'Suite d\'applications santé, extension Chrome et connecteurs API modulables.',
      image: '/mercidocteur2.png',
      tags: ['SaaS', 'Chrome Extension', 'API']
    },
    {
      title: 'BeLondon',
      description: 'Interface entre Guesty et Xero pour automatiser la comptabilité et la gestion des réservations.',
      image: '/connector.png',
      tags: ['Ruby on Rails', 'API', 'Automation']
    },
    {
      title: 'CuRakit',
      description: 'Plateforme e-commerce avec configurateur de boîtes personnalisables pour entreprises.',
      image: '/curakit1.png',
      tags: ['React', 'GraphQL', 'E-commerce']
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute top-10 left-5 w-72 h-72 bg-accent-200 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-10 right-5 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"
      />
      
      {/* Floating code elements */}
      <motion.div
        style={{ y: parallaxY * 0.7 }}
        className="absolute top-1/4 right-10 opacity-5"
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <motion.text
            x="60"
            y="70"
            fontSize="60"
            fill="#6366f1"
            textAnchor="middle"
            fontFamily="monospace"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '60px 60px' }}
          >
            {'</>'}
          </motion.text>
        </svg>
      </motion.div>
      
      <motion.div
        style={{ y: -parallaxY * 0.6 }}
        className="absolute bottom-1/4 left-10 opacity-5"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="3"
            strokeDasharray="10 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '50px 50px' }}
          />
        </svg>
      </motion.div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projets phares</h2>
          <p className="section-subtitle">
            Quelques réalisations qui illustrent mon expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -20,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Link
                to="/realisations"
                className="block relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Image with parallax effect */}
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent-400/50 transition-all duration-500 rounded-lg"></div>
                </div>
                
                {/* Content with slide-up effect */}
                <motion.div 
                  className="relative bg-white p-6 z-20"
                  initial={false}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm rounded-full font-medium group-hover:from-accent-50 group-hover:to-primary-50 group-hover:text-accent-700 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Arrow indicator */}
                  <motion.div 
                    className="absolute bottom-6 right-6 w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/realisations" className="btn-primary inline-block">
            Voir tous les projets
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const TechnologiesSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const parallaxY = useParallax(0.35)

  const technologies = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
    { name: 'Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Stimulus.js', icon: 'https://stimulus.hotwired.dev/assets/logo.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Material Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Dokku', icon: 'https://dokku.com/assets/dokku-logo.svg' },
    { name: 'Heroku', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
    { name: 'Metabase', icon: 'https://www.metabase.com/images/logo.svg' },
    { name: 'Mistral AI', icon: 'https://mistral.ai/images/logo_hubc88c4ece131b91c7cb753f40e9e1cc5_2589_256x0_resize_q97_h2_lanczos_3.webp' },
    { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg' },
  ]

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-100 to-primary-100 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary-100 to-accent-100 rounded-full filter blur-3xl opacity-20"
      />
      
      {/* Floating tech symbols */}
      <motion.div
        style={{ y: parallaxY * 0.5, rotate: parallaxY }}
        className="absolute top-1/3 left-5 opacity-5"
      >
        <svg width="150" height="150" viewBox="0 0 150 150">
          <motion.path
            d="M 75 25 L 125 75 L 75 125 L 25 75 Z"
            fill="#6366f1"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '75px 75px' }}
          />
        </svg>
      </motion.div>
      
      <motion.div
        style={{ y: -parallaxY * 0.8 }}
        className="absolute top-2/3 right-5 opacity-5"
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <motion.polygon
            points="65,15 115,50 115,100 65,135 15,100 15,50"
            fill="#0ea5e9"
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 35, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformOrigin: '65px 75px' }}
          />
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certaines technologies que nous utilisons</h2>
          <p className="section-subtitle">
            Un large éventail de technologies modernes pour répondre à tous vos besoins
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.02,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -12,
                rotateZ: 5,
                transition: { duration: 0.2 }
              }}
              className="relative group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-white rounded-xl p-6 flex flex-col items-center justify-center space-y-4 shadow-md group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-accent-200">
                {/* Icon container with animated background */}
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-accent-100 to-primary-100 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="relative w-16 h-16 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div 
                      className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent-500 to-primary-500 hidden items-center justify-center text-white font-bold text-2xl shadow-lg"
                    >
                      {tech.name.charAt(0)}
                    </div>
                  </motion.div>
                </div>
                
                <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-accent-600 transition-colors leading-tight">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const CTASection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const parallaxY = useParallax(0.25)

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-accent-600 to-primary-600 text-white relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-10"
      />
      
      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-40"
          style={{ 
            y: parallaxY * (i % 2 === 0 ? 1 : -1),
            x: parallaxY * (i % 3 === 0 ? 0.5 : -0.5),
            top: `${20 + (i * 10)}%`,
            left: `${10 + (i * 12)}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Discutons de vos besoins et voyons comment je peux vous aider à concrétiser vos ambitions.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-white text-accent-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Contactez-moi
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
