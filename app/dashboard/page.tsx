'use client'

import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/TopBar';
import SearchPatient from '@/components/SearchPatient';
import StatsCards from '@/components/StatsCards';
import {  
  Calendar,
  Users,
 Heart,
 Activity
} from 'lucide-react';
import HealthDashboard from '@/components/StatsCards';
export default function Dashboard() {
 

  
  const statsCards = [
    { icon: Users, title: 'Patients Total', value: '120', color: 'blue' },
    { icon: Calendar, title: 'Rendez-vous Aujourd\'hui', value: '10', color: 'green' },
    { icon: Heart, title: 'Patients avec Allergies', value: '5', color: 'red' },
    { icon: Activity, title: 'Derniers Examen', value: '7', color: 'orange' },
  ];

  return (
        <div className="px-8 py-6 ">
          <HealthDashboard />
          {/* <SearchPatient searchMedicalHistory={searchMedicalHistory} loading={loading} userId={userId} setUserId={setUserId} medicalHistory={medicalHistory} /> */}
        </div>
      
  );
}
