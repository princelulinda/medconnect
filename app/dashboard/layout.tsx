'use client'
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/TopBar";
import type { Metadata } from "next";
import {  
  Search,
  Calendar,
  Users,
  PieChart,
  Settings,
  LayoutDashboard
} from 'lucide-react';
import { usePathname } from 'next/navigation'
import { useState } from "react";
const navigationItems = [
    { icon: LayoutDashboard, text: 'Dashboard', path: '/dashboard' },
    { icon: Search, text: 'Recherche Patient', path: '/dashboard/search' },
    { icon: Users, text: 'Patients', path: '/dashboard/patients' },
    { icon: PieChart, text: 'Statistiques', path: '/dashboard/stats' },
    { icon: Settings, text: 'Paramètres', path: '/dashboard/settings' },
  ];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const activePage = usePathname();
  return (
    <div className="flex ">
    <Sidebar navigationItems={navigationItems} activePage={activePage}  />
    <div className="flex-1 flex flex-col">
      <div className=" py-6">
      <TopBar />
      <div className='overflow-y-scroll h-screen pb-36'>
      {children}

      </div>
      </div>
    </div>
  </div>
  );
}
