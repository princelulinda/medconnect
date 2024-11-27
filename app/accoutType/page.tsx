"use client"
import NavBar from '@/components/navbar'
import { UserCircle, Stethoscope } from 'lucide-react'
import {useRouter} from 'next/navigation'

export default function AccountTypeSelection() {
    const navigation = useRouter()
    const navigate = (url:string) => {
        navigation.push(url)
    }
  return (
    <div className="min-h-screen flex flex-col">
        <NavBar/>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Choisissez votre type de compte</h1>
          <div className="space-y-4">
            <button 
            onClick={()=>navigate('userInfor/')}
              className="w-full py-6 px-4 text-left flex items-center space-x-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <UserCircle className="w-8 h-8 text-indigo-500" />
              <div>
                <div className="font-semibold text-gray-900">Patient</div>
                <div className="text-sm text-gray-500">Gérez vos dossier medicaux et votre santé</div>
              </div>
            </button>
            <button 
            onClick={()=>navigate('doctorInfor/')}
              className="w-full py-6 px-4 text-left flex items-center space-x-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Stethoscope className="w-8 h-8 text-indigo-500" />
              <div>
                <div className="font-semibold text-gray-900">Expert de Santé</div>
                <div className="text-sm text-gray-500">Gérez vos patients et trouver facilement les dossiers des vos patients facilement et rapidement</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

