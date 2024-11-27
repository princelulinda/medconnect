'use client'
// pages/medical-record-form.js
import { useState } from 'react';
import {
  User,
  Plus,
  Trash2,
  Save,
  Calendar,
  FileText,
  Activity,
  Stethoscope,
  Clipboard,
  Flask
} from 'lucide-react';

export default function MedicalRecordForm() {
  const [formData, setFormData] = useState({
    // Informations du patient
    patientInfo: {
      id: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      bloodType: '',
      address: '',
      phone: '',
      email: '',
    },
    
    // Consultations médicales
    consultations: [{
      date: '',
      doctorName: '',
      motif: '',
      diagnostic: '',
      prescription: '',
      notes: ''
    }],

    // Examens médicaux
    examinations: [{
      date: '',
      type: '',
      establishment: '',
      doctorName: '',
      results: '',
      files: [], // Pour les pièces jointes
      notes: ''
    }],

    // Tests de laboratoire
    labTests: [{
      date: '',
      testType: '',
      laboratory: '',
      results: '',
      normalRange: '',
      interpretation: ''
    }],

    // Traitements en cours
    currentTreatments: [{
      medication: '',
      dosage: '',
      frequency: '',
      startDate: '',
      endDate: '',
      prescribedBy: ''
    }]
  });

  const handlePatientInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      patientInfo: {
        ...prev.patientInfo,
        [name]: value
      }
    }));
  };

  const handleArrayChange = (field, index, subField, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => 
        i === index ? { ...item, [subField]: value } : item
      )
    }));
  };

  const addArrayField = (field, defaultValues) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], defaultValues]
    }));
  };

  const removeArrayField = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-semibold text-gray-800">
              Dossier Médical
            </h1>
            <p className="text-gray-500 mt-1">
              Enregistrement des informations médicales du patient
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Informations du patient */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-medium text-gray-700">
                  Informations du Patient
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID Patient
                  </label>
                  <input
                    type="text"
                    name="id"
                    value={formData.patientInfo.id}
                    onChange={handlePatientInfoChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.patientInfo.firstName}
                    onChange={handlePatientInfoChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.patientInfo.lastName}
                    onChange={handlePatientInfoChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de Naissance
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.patientInfo.dateOfBirth}
                    onChange={handlePatientInfoChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genre
                  </label>
                  <select
                    name="gender"
                    value={formData.patientInfo.gender}
                    onChange={handlePatientInfoChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="M">Masculin</option>
                    <option value="F">Féminin</option>
                    <option value="O">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Groupe Sanguin
                  </label>
                  <select
                    name="bloodType"
                    value={formData.patientInfo.bloodType}
                    onChange={handlePatientInfoChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Consultations */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Stethoscope className="w-5 h-5 text-green-500" />
                  <h2 className="text-lg font-medium text-gray-700">
                    Consultations Médicales
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => addArrayField('consultations', {
                    date: '',
                    doctorName: '',
                    motif: '',
                    diagnostic: '',
                    prescription: '',
                    notes: ''
                  })}
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter une consultation</span>
                </button>
              </div>

              {formData.consultations.map((consultation, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={consultation.date}
                        onChange={(e) => handleArrayChange('consultations', index, 'date', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Médecin
                      </label>
                      <input
                        type="text"
                        value={consultation.doctorName}
                        onChange={(e) => handleArrayChange('consultations', index, 'doctorName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nom du médecin"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Motif de consultation
                      </label>
                      <input
                        type="text"
                        value={consultation.motif}
                        onChange={(e) => handleArrayChange('consultations', index, 'motif', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Diagnostic
                      </label>
                      <textarea
                        value={consultation.diagnostic}
                        onChange={(e) => handleArrayChange('consultations', index, 'diagnostic', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="2"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeArrayField('consultations', index)}
                    className="text-red-500 hover:text-red-600 flex items-center space-x-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Supprimer</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Examens médicaux */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-orange-500" />
                  <h2 className="text-lg font-medium text-gray-700">
                    Examens Médicaux
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => addArrayField('examinations', {
                    date: '',
                    type: '',
                    establishment: '',
                    doctorName: '',
                    results: '',
                    files: [],
                    notes: ''
                  })}
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter un examen</span>
                </button>
              </div>

              {formData.examinations.map((examination, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={examination.date}
                        onChange={(e) => handleArrayChange('examinations', index, 'date', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type d'examen
                      </label>
                      <input
                        type="text"
                        value={examination.type}
                        onChange={(e) => handleArrayChange('examinations', index, 'type', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: Radiographie, Scanner, IRM..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Établissement
                      </label>
                      <input
                        type="text"
                        value={examination.establishment}
                        onChange={(e) => handleArrayChange('examinations', index, 'establishment', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Médecin prescripteur
                      </label>
                      <input
                        type="text"
                        value={examination.doctorName}
                        onChange={(e) => handleArrayChange('examinations', index, 'doctorName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Résultats
                      </label>
                      <textarea
                        value={examination.results}
                        onChange={(e) => handleArrayChange('examinations', index, 'results', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeArrayField('examinations', index)}
                    className="text-red-500 hover:text-red-600 flex items-center space-x-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Supprimer</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Tests de laboratoire */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {/* <Flask className="w-5 h-5 text-purple-500" /> */}
                  <h2 className="text-lg font-medium text-gray-700">
                    Tests de Laboratoire
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => addArrayField('labTests', {
                    date: '',
                    testType: '',
                    laboratory: '',
                    results: '',
                    normalRange: '',
                    interpretation: ''
                  })}
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter un test</span>
                </button>
              </div>

              {formData.labTests.map((test, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={test.date}
                        onChange={(e) => handleArrayChange('labTests', index, 'date', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de test
                      </label>
                      <input
                        type="text"
                        value={test.testType}
                        onChange={(e) => handleArrayChange('labTests', index, 'testType', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: Analyse de sang, Test COVID..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Laboratoire
                      </label>
                      <input
                        type="text"
                        value={test.laboratory}
                        onChange={(e) => handleArrayChange('labTests', index, 'laboratory', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Valeurs normales
                      </label>
                      <input
                        type="text"
                        value={test.normalRange}
                        onChange={(e) => handleArrayChange('labTests', index, 'normalRange', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Résultats
                      </label>
                      <textarea
                        value={test.results}
                        onChange={(e) => handleArrayChange('labTests', index, 'results', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="2"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeArrayField('labTests', index)}
                    className="text-red-500 hover:text-red-600 flex items-center space-x-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Supprimer</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Enregistrer</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}