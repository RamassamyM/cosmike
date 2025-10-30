import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'
import ProjectModal from '../components/ProjectModal'

const Realisations = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)
  const parallaxY = useParallax(0.35)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0])
  
  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 28 + 22,
    delay: Math.random() * 5,
  }))

  const projects = [
    {
      id: 1,
      title: 'Mercidocteur',
      shortDescription: 'Suite d\'applications santé, extension Chrome et connecteurs API modulables.',
      image: '/cosmike/mercidocteur2.png',
      images: ['/cosmike/mercidocteur2.png', '/cosmike/mercidocteur1.png', '/cosmike/extension.png'],
      tags: ['SaaS', 'Chrome Extension', 'API', 'Healthcare'],
      context: 'Suite d\'applications pour améliorer la réputation en ligne des établissements de santé.',
      role: 'CTO & Développeur Senior',
      actions: [
        'Développement de 3 applications interconnectées',
        'Création d\'une extension Chrome stable et performante',
        'Mise en place de connecteurs API modulables',
        'Encadrement technique de l\'équipe',
        'Mise en place de méthodologie agile'
      ],
      results: [
        'Produit scalable et robuste utilisé par des centaines d\'établissements',
        'Extension Chrome avec 99.9% de stabilité',
        'Connecteurs modulaires permettant l\'intégration rapide de nouveaux services',
        'Équipe autonome et performante'
      ],
      technologies: ['React', 'Node.js', 'Chrome API', 'PostgreSQL', 'AWS']
    },
    {
      id: 2,
      title: 'Ateliers Céline',
      shortDescription: 'Plateforme no-code e-commerce et e-learning pour kits artistiques.',
      image: '/cosmike/atelierceline1.png',
      tags: ['No-code', 'E-learning', 'UX/UI'],
      context: 'Vente de kits artistiques avec plateforme e-learning intégrée.',
      role: 'CTO / Conseiller technique',
      actions: [
        'Définition de l\'architecture technique',
        'Intégration d\'APIs',
        'Conception UX cohérente et fluide',
        'Conseil sur les choix technologiques',
        'Accompagnement de l\'équipe technique'
      ],
      results: [
        'Lancement réussi en 3 mois',
        'Expérience connectée et intuitive',
        'Taux de satisfaction des artistes',
        'Plateforme évolutive et maintenable'
      ],
      technologies: ['Wix', 'Zapier', 'LearnWorlds', 'Stripe']
    },
    {
      id: 3,
      title: 'CuRakit',
      shortDescription: 'Plateforme e-commerce avec configurateur de boîtes personnalisables pour cadeaux d\'entreprise.',
      image: '/cosmike/curakit1.png',
      images: ['/cosmike/curakit1.png', '/cosmike/curakit2.png', '/cosmike/curakit3.png'],
      tags: ['React', 'GraphQL', 'E-commerce', 'B2B'],
      context: 'Plateforme e-commerce de boîtes personnalisables pour entreprises et comités d\'entreprise.',
      role: 'Prestataire & Développeur Fullstack',
      actions: [
        'Développement du configurateur interactif de boîtes',
        'Calcul en temps réel du devis selon les options',
        'Frontend React avec architecture modulaire',
        'Backend GraphQL et Firebase',
        'Intégration de paiement et gestion des commandes'
      ],
      results: [
        'Expérience utilisateur fluide et personnalisée',
        'Optimisation du processus de commande (conversion +35%)',
        'Gestion automatisée des devis complexes',
        'Plateforme scalable pour croissance B2B'
      ],
      technologies: ['React', 'GraphQL', 'Firebase', 'Node.js']
    },
    {
      id: 4,
      title: 'BeLondon',
      shortDescription: 'Connecteur d\'apis: entre Guesty et Xero pour automatiser la comptabilité et la gestion des réservations.',
      image: '/cosmike/connector.png',
      tags: ['Ruby on Rails', 'API', 'Automation', 'Stimulus', 'Tailwind CSS', 'PostgreSQL'],
      context: 'Gestion d\'un parc de logements touristiques premium à Londres, multi-plateformes de réservation et comptabilité Xero.',
      role: 'Prestataire & Développeur Fullstack / Architecte',
      actions: [
        'Architecture et développement en Ruby on Rails',
        'Intégration des APIs Guesty et Xero',
        'Mise en place de webhooks pour synchronisation en temps réel',
        'Interface utilisateur avec Stimulus',
        'Automatisation et synchronisation des flux comptables'
      ],
      results: [
        'Automatisation complète des flux de réservation et comptabilité',
        'Réduction de 90% des erreurs de saisie manuelle',
        'Gain de temps de 20h/semaine pour l\'équipe',
        'Visibilité en temps réel sur la performance du parc'
      ],
      technologies: ['Ruby on Rails', 'Stimulus', 'PostgreSQL', 'Guesty API', 'Xero API']
    },
    {
      id: 5,
      title: 'Prototypes & MVP',
      shortDescription: 'Création de prototypes et MVP pour startups.',
      image: '/cosmike/onmuze.jpg',
      images: ['/cosmike/onmuze.jpg', '/cosmike/meditest.jpg', '/cosmike/jamquiz.jpg', '/cosmike/lange.jpg'],
      tags: ['WordPress', 'Automation', 'Analytics'],
      context: 'Création de prototypes et MVP pour startups.',
      role: 'Développeur Web / Consultant',
      actions: [
        'Création de prototypes et MVP',
        'Plateforme de mise en relation entre artistes et lieux de spectables/concerts',
        'Application de vérification et traçabilité d\'un médicament',
        'Application de quizz musical', 
        'Plateforme de communication et gestion d\'une association de parent d\'élèves'
      ],
      results: [
        'Prototypage et tests utilisateurs accélérés',
        'Mise en place de méthodologie agile',
        'Prix de la région pour le Hackaton Santé Bordeaux'
      ],
      technologies: ['Rails', 'Stimulus', 'Vue.js', 'Google Maps Api', 'Facebook Api']
    },
    {
      id: 6,
      title: 'EducLever',
      shortDescription: 'Sites web Pro & Corporate pour suite éducative.',
      image: '/cosmike/edu_site.jpg',
      tags: ['Corporate', 'UX/UI', 'Integration'],
      context: 'Création des sites web pour les suites Pro et Corporate d\'EducLever.',
      role: 'Développeur Frontend / UX Designer',
      actions: [
        'Conception de l\'ergonomie et du design',
        'Wording et design',
        'Lien avec les sites existants',
        'Optimisation des performances',
        'Tests utilisateurs et itérations'
      ],
      results: [
        'Navigation fluide et design cohérent',
        'Site conservé pendant 3 ans',
        'Visibilité du nouveau groupe',
        'Expérience utilisateur unifiée'
      ],
      technologies: ['Wix']
    }
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
        className="absolute top-20 right-10 w-[500px] h-[500px] bg-accent-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: -parallaxY }}
        className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
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
            Réalisations
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de projets qui illustrent mon expertise en développement, product management et conseil stratégique.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl group cursor-pointer overflow-hidden p-0 hover:border-accent-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold flex items-center space-x-2">
                    <span>Voir le projet</span>
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent-500/20 text-accent-300 text-sm rounded-full border border-accent-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default Realisations
