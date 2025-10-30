import { motion } from 'framer-motion'

const Legal = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Mentions légales
          </h1>

          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl p-8 md:p-12 space-y-8 text-gray-300">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                1. Éditeur du site
              </h2>
              <p className="mb-2">
                Le site <strong className="text-white">cosmike.com</strong> est édité par :
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong className="text-white">Nom :</strong> Michael Ramassamy</li>
                <li><strong className="text-white">Statut :</strong> Auto-entrepreneur / Freelance</li>
                <li><strong className="text-white">SIRET :</strong> [À compléter]</li>
                <li><strong className="text-white">Adresse :</strong> [À compléter]</li>
                <li><strong className="text-white">Email :</strong> Via le formulaire de contact</li>
              </ul>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                2. Directeur de publication
              </h2>
              <p>
                Le directeur de la publication du site est <strong className="text-white">Michael Ramassamy</strong>.
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                3. Hébergement
              </h2>
              <p className="mb-2">
                Le site est hébergé par :
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong className="text-white">Hébergeur :</strong> [Netlify / Vercel / Autre - À compléter]</li>
                <li><strong className="text-white">Adresse :</strong> [À compléter selon l'hébergeur]</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de Michael Ramassamy, sauf mention contraire.
              </p>
              <p className="mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit préalable de Michael Ramassamy.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                5. Protection des données personnelles
              </h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="mb-4">
                Les informations recueillies via le formulaire de contact sont destinées uniquement à Michael Ramassamy pour répondre à vos demandes. Elles ne sont en aucun cas transmises à des tiers.
              </p>
              <p className="mb-4">
                <strong className="text-white">Données collectées :</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Message envoyé via le formulaire de contact</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, vous pouvez nous contacter via le formulaire de contact du site.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                6. Cookies
              </h2>
              <p className="mb-4">
                Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
              </p>
              <p>
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                7. Limitation de responsabilité
              </h2>
              <p className="mb-4">
                Michael Ramassamy s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="mb-4">
                En conséquence, Michael Ramassamy décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
              </p>
              <p>
                L'utilisateur est seul responsable de l'utilisation qu'il fait des informations contenues sur ce site.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                8. Liens hypertextes
              </h2>
              <p className="mb-4">
                Le site peut contenir des liens hypertextes vers d'autres sites. Michael Ramassamy n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              <p>
                La création de liens hypertextes vers le site cosmike.com nécessite une autorisation préalable écrite.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                9. Droit applicable et juridiction compétente
              </h2>
              <p className="mb-4">
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p>
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Legal
