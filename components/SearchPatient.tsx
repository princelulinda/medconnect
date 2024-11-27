import { Edit, Printer, Search, User, Calendar, Activity, AlertCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function SearchPatient({ searchMedicalHistory, loading, userId, setUserId, medicalHistory }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200">
      <div className="p-7 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 p-2 rounded-xl">
            <User className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Recherche de Patient</h2>
        </div>
      </div>

      <div className="p-7">
        <form onSubmit={searchMedicalHistory} className="mb-8">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Rechercher un patient par ID ou nom..."
                className="pl-12 w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 font-semibold flex items-center space-x-3 shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200"
            >
              <Search className="w-5 h-5" />
              <span>Rechercher</span>
            </button>
          </div>
        </form>

        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {medicalHistory && !loading && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-5">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-100">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{medicalHistory.name}</h3>
                  <p className="text-gray-500 font-medium">ID: {userId}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href={'pages/edit'} 
                  className="px-5 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors flex items-center space-x-2 font-medium border border-gray-200"
                >
                  <Edit className="w-4 h-4" />
                  <span>Éditer</span>
                </Link>
                <button className="px-5 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center space-x-2 font-medium shadow-lg shadow-blue-100">
                  <Printer className="w-4 h-4" />
                  <span>Imprimer</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Informations personnelles */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-3 mb-5">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-800">Informations Personnelles</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Âge', value: `${medicalHistory.age} ans` },
                      { label: 'Groupe sanguin', value: medicalHistory.bloodType },
                      { label: 'Dernière visite', value: medicalHistory.lastVisit },
                      { label: 'Prochain RDV', value: medicalHistory.nextAppointment, isHighlight: true }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                        <span className="text-gray-600">{item.label}</span>
                        <span className={`font-medium ${item.isHighlight ? 'text-blue-600' : 'text-gray-800'}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Allergies */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-3 mb-5">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h4 className="font-semibold text-gray-800">Allergies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {medicalHistory.allergies.map((allergy, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100"
                      >
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Antécédents médicaux */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-3 mb-5">
                    <Activity className="w-5 h-5 text-orange-500" />
                    <h4 className="font-semibold text-gray-800">Antécédents Médicaux</h4>
                  </div>
                  <div className="space-y-3">
                    {medicalHistory.pastConditions.map((condition, index) => (
                      <div key={index} className="flex items-center space-x-3 py-3 border-b last:border-0 border-gray-200">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Médicaments */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-3 mb-5">
                    <Activity className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-800">Médicaments Actuels</h4>
                  </div>
                  <div className="space-y-3">
                    {medicalHistory.medications.map((medication, index) => (
                      <div key={index} className="flex items-center space-x-3 py-3 border-b last:border-0 border-gray-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{medication}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor's Info Section */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-8 shadow-md">
              <div className="flex items-center space-x-3 mb-5">
                <User className="w-5 h-5 text-blue-500" />
                <h4 className="font-semibold text-gray-800">Médecin Assigné</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nom du médecin</span>
                  <span className="font-medium text-gray-800">Dr. Jean Dupont</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Spécialité</span>
                  <span className="font-medium text-gray-800">Cardiologie</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Contact</span>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200">
                    <Phone className="w-5 h-5" />
                    <span>Contactez</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
