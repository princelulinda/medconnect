'use client'

import { ChevronDown, Bell, User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex justify-between py-3 px-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>Aujourd'hui</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Dr. Smith</p>
              <p className="text-sm text-gray-500">Médecin généraliste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
