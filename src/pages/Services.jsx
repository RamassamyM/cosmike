import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const parallaxY = useParallax(0.4)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0])
  
  // Generate particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
  }))

  const services = [
    {
      category: 'Développement & Tech',
      icon: (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      items: [
        {
          title: 'Fullstack',
          description: 'NodeJS, Rails, React, Vue',
          details: 'Développement complet d\'applications web modernes avec les technologies les plus performantes'
        },
        {
          title: 'DevOps / CI-CD / Cloud',
          description: 'Docker, AWS, GCP, Terraform',
          details: 'Infrastructure scalable, déploiement automatisé et gestion cloud optimisée'
        },
        {
          title: 'API & connecteurs',
          description: 'Intégration, automatisation et abstraction',
          details: 'Création d\'APIs robustes et intégration de services tiers pour automatiser vos processus'
        },
        {
          title: 'Intelligence Artificielle',
          description: 'OpenAI, Mistral AI, Vertex AI (Gemini)',
          details: 'Intégration et développement de fonctionnalités d\'IA avec les APIs OpenAI, Mistral AI et Vertex AI (Gemini) sur Google Cloud Platform'
        }
      ]
    },
    {
      category: 'Product & Management',
      icon: (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      ),
      items: [
        {
          title: 'Pilotage de projets',
          description: 'Roadmap, spécifications, suivi d\'équipes',
          details: 'Gestion de bout en bout de vos projets avec méthodologie agile et suivi rigoureux'
        },
        {
          title: 'Encadrement technique et recrutement',
          description: 'Leadership et montée en compétences',
          details: 'Accompagnement de vos équipes techniques et aide au recrutement de talents'
        },
        {
          title: 'Stratégie produit orientée business',
          description: 'Vision produit et croissance',
          details: 'Définition de la stratégie produit alignée sur vos objectifs business et utilisateurs'
        }
      ]
    },
    {
      category: 'Conseil & Formation',
      icon: (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      items: [
        {
          title: 'Audit technique & architecture produit',
          description: 'Analyse et recommandations',
          details: 'Évaluation de votre stack technique et architecture pour identifier les axes d\'amélioration'
        },
        {
          title: 'Formations tech et startup',
          description: 'Rails, HTML/CSS, JS, Vue, Lean, UX/UI',
          details: 'Sessions de formation personnalisées pour vos équipes sur les technologies et méthodologies modernes'
        },
        {
          title: 'Conseil stratégique',
          description: 'Pour startups et entreprises',
          details: 'Accompagnement stratégique sur vos choix technologiques et votre roadmap produit'
        }
      ]
    }
  ]

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
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
              y: [0, -120, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1.2, 0],
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
        className="absolute top-40 right-20 w-[600px] h-[600px] bg-accent-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, -60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        style={{ y: parallaxY * 0.6 }}
        className="absolute top-1/4 left-10 opacity-5"
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeDasharray="8 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '60px 60px' }}
          />
        </svg>
      </motion.div>
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
            Services & Expertise
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Cosmike vous accompagne de l'idée à la livraison de votre projet digital. 
            J'allie expertise technique et vision produit pour créer des solutions robustes et orientées business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="space-y-16">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl p-8 md:p-12 hover:border-accent-500/50 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <motion.div 
                  className="text-accent-400"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  {service.category}
                </h2>
              </div>

              {/* Service Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-500/20 transition-all duration-300 cursor-pointer group"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-accent-400 font-semibold mb-3 text-sm">
                      {item.description}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center bg-gradient-to-br from-accent-600 to-primary-600 rounded-lg p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discutons ensemble de vos besoins et voyons comment je peux vous accompagner dans la réussite de votre projet.
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

export default Services
