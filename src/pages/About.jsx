import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const parallaxY = useParallax(0.3)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0])
  
  // Generate particles for background animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 5,
  }))

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
      ),
      title: 'Clarté',
      description: 'Communication transparente à chaque étape du projet. Vous savez toujours où nous en sommes et ce qui se passe.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Pragmatisme',
      description: 'Solutions concrètes et efficaces qui répondent à vos besoins réels, sans sur-ingénierie inutile.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      title: 'Orientation business',
      description: 'Décisions techniques guidées par l\'impact produit et les objectifs business, pas par la technologie pour la technologie.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: 'Collaboration',
      description: 'Travail main dans la main avec vos équipes. Je m\'intègre à votre culture et vos processus existants.'
    }
  ]

  const stats = [
    { number: '12M+', label: 'Patients impactés' },
    { number: '10+', label: 'Projets livrés' },
    { number: '12+', label: 'Années d\'expérience' }
  ]

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Animated background grid */}
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
        className="absolute top-20 right-10 w-96 h-96 bg-accent-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            À propos
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours, mes valeurs et ma vision du développement et du product management.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src="/profile.jpg" alt="Michael Ramassamy" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Michael Ramassamy
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                Je suis <span className="font-semibold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">CTO, développeur senior et product manager</span> avec plus de 10 ans d'expérience dans la création de solutions digitales.
              </p>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                Mon parcours m'a permis de travailler sur des projets variés, de la startup en phase d'amorçage aux entreprises établies, en passant par des scale-ups en pleine croissance.
              </p>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                Je combine <span className="font-semibold text-accent-400">expertise technique</span> et <span className="font-semibold text-primary-400">vision produit</span> pour piloter vos projets de bout en bout, encadrer vos équipes et livrer des solutions robustes qui répondent à vos objectifs business.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Mon approche ? Pragmatique, orientée résultats, et toujours centrée sur l'impact réel pour vos utilisateurs et votre business.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-accent-600 to-primary-600 rounded-xl p-8 text-center text-white"
            >
              <div className="text-5xl md:text-6xl font-display font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values Section */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Mes valeurs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les principes qui guident mon travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl p-8 hover:border-accent-500/50 transition-all duration-300 group"
              >
                <div className="text-accent-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center bg-gradient-to-br from-accent-600 to-primary-600 rounded-lg p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons de comment je peux vous aider à le concrétiser.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-accent-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Prendre contact
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default About
