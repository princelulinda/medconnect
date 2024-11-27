"use client"
import { useState } from 'react'
import { User, Calendar, Heart, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react'
import NavBar from '@/components/navbar'

export default function PatientInfoForm() {
  const [showAllergies, setShowAllergies] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <NavBar />
      
      <div className="max-w-4xl mx-auto  sm:px-6 lg:px-8">
        

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl">
          <div className="p-6 sm:p-8">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Nom complet */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  Nom complet
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out shadow-sm"
                    placeholder="Jean Dupont"
                  />
                </div>
              </div>

              {/* Date de naissance */}
              <div className="space-y-2">
                <label htmlFor="birthdate" className="text-sm font-semibold text-gray-700">
                  Date de naissance
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  </div>
                  <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out shadow-sm"
                  />
                </div>
              </div>

              {/* Raison de la visite */}
              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-semibold text-gray-700">
                  Raison de la visite
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <AlertCircle className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  </div>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out shadow-sm resize-none"
                    placeholder="Décrivez brièvement la raison de votre visite"
                  />
                </div>
              </div>

              {/* Antécédents médicaux */}
              <div className="space-y-2">
                <label htmlFor="medical-history" className="text-sm font-semibold text-gray-700">
                  Antécédents médicaux
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <Heart className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  </div>
                  <textarea
                    id="medical-history"
                    name="medical-history"
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out shadow-sm resize-none"
                    placeholder="Listez vos antécédents médicaux importants"
                  />
                </div>
              </div>

              {/* Section Allergies */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setShowAllergies(!showAllergies)}
                  className="inline-flex items-center px-4 py-2.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700 text-sm font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
                >
                  {showAllergies ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                  {showAllergies ? 'Masquer' : 'Afficher'} les allergies
                </button>
                
                {showAllergies && (
                  <div className="space-y-2">
                    <label htmlFor="allergies" className="text-sm font-semibold text-gray-700">
                      Allergies et intolérances
                    </label>
                    <textarea
                      id="allergies"
                      name="allergies"
                      rows={3}
                      className="block w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out shadow-sm resize-none"
                      placeholder="Listez vos allergies et intolérances"
                    />
                  </div>
                )}
              </div>

              {/* Bouton Submit */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Envoyer le formulaire
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}