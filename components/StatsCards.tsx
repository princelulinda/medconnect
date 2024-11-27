import { useState } from 'react';
import { 
  Calendar, Heart, Activity, 
   Plus,
  TrendingUp,  Calendar as CalendarIcon,
  Clock, ChevronRight, AlertCircle
} from 'lucide-react';

const HealthDashboard = () => {
  const healthData = {
    exams: [
      { id: 1, name: 'Examen de cholestérol', result: 'Normal', date: '2024-10-01', trend: 'stable' },
      { id: 2, name: 'Examen de glycémie', result: 'Élevé', date: '2024-09-15', trend: 'up' },
      { id: 3, name: 'Radiographie thoracique', result: 'Normal', date: '2024-08-10', trend: 'stable' },
    ],
    medications: [
      { id: 1, name: 'Aspirine', dosage: '100mg', startDate: '2024-10-01', endDate: '2024-10-30', remainingDays: 15, adherence: 95 },
      { id: 2, name: 'Paracétamol', dosage: '500mg', startDate: '2024-09-01', endDate: '2024-09-30', remainingDays: 5, adherence: 88 },
    ],
    appointments: [
      { id: 1, date: '2024-11-25', time: '14:30', doctor: 'Dr. Marie Lemoine', specialty: 'Dermatologue', location: 'Centre Médical Saint-Michel' },
      { id: 2, date: '2024-12-05', time: '10:15', doctor: 'Dr. Jean Dupont', specialty: 'Cardiologue', location: 'Clinique du Coeur' },
    ],
    vitals: {
      bloodPressure: { value: '120/80', status: 'normal' },
      heartRate: { value: '72', status: 'normal' },
      temperature: { value: '37.2', status: 'normal' },
      weight: { value: '73', trend: 'stable' }
    }
  };

  const [userHealthData, setUserHealthData] = useState(healthData);

  const getStatusColor = (status) => {
    switch(status) {
      case 'normal': return 'text-green-500';
      case 'elevated': return 'text-yellow-500';
      case 'high': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-400 bg-opacity-50 p-3 rounded-lg">
                <Activity className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-blue-100 text-sm">Tension Artérielle</p>
            <h3 className="text-2xl font-bold">{userHealthData.vitals.bloodPressure.value}</h3>
            <p className="text-blue-100 text-sm mt-2">Normal - Dernière mesure</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-400 bg-opacity-50 p-3 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-green-100 text-sm">Fréquence Cardiaque</p>
            <h3 className="text-2xl font-bold">{userHealthData.vitals.heartRate.value} bpm</h3>
            <p className="text-green-100 text-sm mt-2">Stable - Dernière mesure</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-400 bg-opacity-50 p-3 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
            </div>
            <p className="text-purple-100 text-sm">Prochain RDV</p>
            <h3 className="text-xl font-bold">Dr. Marie Lemoine</h3>
            <p className="text-purple-100 text-sm mt-2">Dans 5 jours - Dermatologue</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-400 bg-opacity-50 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6" />
              </div>
            </div>
            <p className="text-red-100 text-sm">Médicaments</p>
            <h3 className="text-2xl font-bold">2 actifs</h3>
            <p className="text-red-100 text-sm mt-2">Prochain renouvellement dans 5j</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Examens Récents</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Plus className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="space-y-4">
              {userHealthData.exams.map((exam) => (
                <div key={exam.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${exam.result === 'Normal' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{exam.name}</p>
                      <p className="text-sm text-gray-500">{exam.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exam.result === 'Normal' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {exam.result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Traitements en cours</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Plus className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="space-y-4">
              {userHealthData.medications.map((med) => (
                <div key={med.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{med.name}</h3>
                      <p className="text-sm text-gray-500">{med.dosage}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {med.adherence}% suivi
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${med.adherence}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Reste {med.remainingDays} jours
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Rendez-vous à venir</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Plus className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="space-y-4">
              {userHealthData.appointments.map((apt) => (
                <div key={apt.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-3">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <CalendarIcon className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{apt.doctor}</h3>
                        <p className="text-sm text-gray-500">{apt.specialty}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{apt.time}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <p>{apt.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthDashboard;