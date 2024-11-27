'use client'

import { Layout, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({ navigationItems, activePage}) {
  return (
    <div className="w-72 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Layout className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">MedConnect</h2>
        </div>
      </div>
      
      <nav className="mt-6 px-4">
        {navigationItems.map((item) => (
          <Link
            href={item.path}
            key={item.path}
            className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 mb-2 ${
              activePage === item.path
                ? 'bg-blue-50 text-blue-600'
                : 'hover:bg-gray-50 text-gray-600'
            }`}
          >
            <item.icon className={`w-5 h-5 mr-3 ${
              activePage === item.path ? 'text-blue-600' : 'text-gray-500'
            }`} />
            <span className="font-medium">{item.text}</span>
          </Link>
        ))}
        
        <div className="mt-8">
          <button className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
