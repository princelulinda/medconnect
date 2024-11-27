'use client'
import SearchPatient from '@/components/SearchPatient'
import React, { useState } from 'react'

export default function Page() {
  const [userId, setUserId] = useState('');
  const [medicalHistory, setMedicalHistory] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMedicalHistory = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simuler une recherche avec un délai
    setTimeout(() => {
      setMedicalHistory({
        name: 'Jean Dupont',
        age: 45,
        bloodType: 'A+',
        allergies: ['Pénicilline', 'Pollen'],
        pastConditions: ['Hypertension', 'Diabète Type 2'],
        medications: ['Metformine', 'Lisinopril'],
        lastVisit: '15/11/2024',
        nextAppointment: '25/11/2024'
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      {/* Passer les props nécessaires au composant SearchPatient */}
      <SearchPatient 
        searchMedicalHistory={searchMedicalHistory} 
        loading={loading} 
        userId={userId} 
        setUserId={setUserId} 
        medicalHistory={medicalHistory} 
      />
    </div>
  );
}
