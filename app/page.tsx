import Image from 'next/image'
import { FileText, Shield, Users, Clock, Star, Globe, HeartPulse, Stethoscope } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a className="flex items-center justify-center" href="#">
            <HeartPulse className="h-10 w-10 text-[#474bff]/70" />
            <span className="ml-2 text-2xl font-bold text-gray-900">HoptalConnect</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a className="text-sm font-medium text-gray-600 hover:text-[#474bff]/70 transition-colors" href="#features">
              Fonctionnalités
            </a>
            <a className="text-sm font-medium text-gray-600 hover:text-[#474bff]/70 transition-colors" href="#for-professionals">
              Pour les professionnels
</a>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-[#474bff]/60 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#474bff]/60 transition-colors">
              inscription
            </button>
            <button className="border  text-white-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-emerald-50 transition-colors">
              Connexion
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="h-[400px] w-[400px] custom-bg"
          ></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl text-gray-900 mb-4">
                  Sauvez des vies avec <span className="text-[#474bff]/70">Hopital Connect</span>
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Révolutionnez la santé en Afrique et dans le monde. Accédez instantanément aux antécédents médicaux, améliorez les soins et sauvez des millions de vies.
                </p>
                <div className="flex space-x-4">
                  <button className="px-8 py-3 text-lg font-semibold text-white bg-[#474bff]/60 rounded-full hover:bg-[#474bff]/60 focus:outline-none focus:ring-2 focus:ring-[#474bff]/60 focus:ring-offset-2 transition-colors">
                    Commencer maintenant
                  </button>
                  {/* <button className="px-8 py-3 text-lg font-semibold text-[#474bff]/70 bg-white border-2 bg-[#474bff]/60 rounded-full hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#474bff]/60 focus:ring-offset-2 transition-colors">
                    Voir la démo
                  </button> */}
                </div>
              </div>
              <div className="md:w-1/2 z-10">
                <Image
                  src="/new-hero-compress.webp"
                  alt="Médecin utilisant MediRecord"
                  width={800}
                  height={600}
                  className=" object-cover bg-image "
                />
                <div className="spinner">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>
              </div>
            </div>
          </div>
          <div className='spinner2'></div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Fonctionnalités révolutionnaires</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg">
                <FileText className="h-12 w-12 text-[#474bff]/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Centralisation des données</h3>
                <p className="text-gray-600">Accédez à l'historique médical complet en un clic, améliorant la prise de décision médicale et sauvant potentiellement des vies.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg">
                <Shield className="h-12 w-12 text-[#474bff]/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sécurité de pointe</h3>
                <p className="text-gray-600">Protégez les données sensibles avec un chiffrement de niveau militaire, garantissant la confidentialité des patients.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-[#474bff]/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Collaboration médicale</h3>
                <p className="text-gray-600">Facilitez la communication entre les professionnels de santé pour des soins plus coordonnés et efficaces.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg">
                <Clock className="h-12 w-12 text-[#474bff]/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Accès instantané</h3>
                <p className="text-gray-600">Gagnez un temps précieux en situation d'urgence avec un accès immédiat aux informations vitales du patient.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg">
                <Star className="h-12 w-12 text-[#474bff]/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Suivi personnalisé</h3>
                <p className="text-gray-600">Offrez des soins sur mesure grâce à des rappels intelligents et un suivi détaillé de l'évolution de la santé.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg">
                <Globe className="h-12 w-12 text-[#474bff]/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Accessibilité mondiale</h3>
                <p className="text-gray-600">Assurez la continuité des soins partout dans le monde, particulièrement crucial pour les régions isolées d'Afrique.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Comment MediRecord transforme les soins de santé</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Utilisation de MediRecord"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <ol className="space-y-6">
                  <li className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#474bff]/60 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <p className="text-lg text-gray-700">Inscrivez-vous en quelques clics et créez votre profil médical sécurisé.</p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#474bff]/60 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <p className="text-lg text-gray-700">Importez facilement vos antécédents médicaux ou ajoutez-les progressivement.</p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#474bff]/60 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <p className="text-lg text-gray-700">Partagez l'accès avec vos médecins et établissements de santé en toute sécurité.</p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#474bff]/60 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <p className="text-lg text-gray-700">Bénéficiez de soins plus rapides, précis et personnalisés grâce à l'accès instantané à votre dossier.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="for-professionals" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Pour les professionnels de santé</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Révolutionnez votre pratique médicale</h3>
                <p className="text-lg text-gray-600 mb-6">
                  MediRecord offre aux médecins et aux hôpitaux un accès rapide et sécurisé aux antécédents médicaux complets, améliorant considérablement la qualité des soins et sauvant potentiellement des vies.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Stethoscope className="h-5 w-5 text-[#474bff]/60 mr-2" />
                    Diagnostics plus précis grâce à un historique médical complet
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-[#474bff]/60 mr-2" />
                    Gain de temps considérable lors des consultations
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-[#474bff]/60 mr-2" />
                    Collaboration facilitée entre professionnels de santé
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 text-[#474bff]/60 mr-2" />
                    Accès aux données médicales même dans les zones reculées
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="Professionnel de santé utilisant MediRecord"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="w-full py-12 md:py-24 bg-gradient-to-br from-emerald-100 to-blue-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Notre impact en Afrique et dans le monde</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-2 text-[#474bff]/70">1M+</h3>
                <p className="text-gray-600">Vies potentiellement sauvées grâce à un accès rapide aux antécédents médicaux</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-2 text-[#474bff]/70">500+</h3>
                <p className="text-gray-600">Hôpitaux et cliniques connectés à travers l'Afrique</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-2 text-[#474bff]/70">30%</h3>
                <p className="text-gray-600">Réduction du temps de diagnostic dans les situations d'urgence</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#474bff]/60 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Rejoignez la révolution des soins de santé</h2>
            <p className="text-xl mb-8">Ensemble, sauvons des vies et améliorons la santé en Afrique et dans le monde entier avec MediRecord.</p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 text-lg font-semibold text-[#474bff]/70 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#474bff]/70 transition-colors">
                S'inscrire maintenant
              </button>
              <button className="px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-[#474bff]/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#474bff]/70 transition-colors">
                Demander une démo
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">MediRecord</h3>
              <p className="text-gray-400">Révolutionner les soins de santé, une vie à la fois.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Comment ça marche</a></li>
                <li><a href="#for-professionals" className="text-gray-400 hover:text-white transition-colors">Pour les professionnels</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conformité RGPD</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
              <p className="text-gray-400">info@centraliso.com</p>
              <p className="text-gray-400">+257 67881752</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 centraliso. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}