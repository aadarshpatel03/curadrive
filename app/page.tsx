"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Navbar } from "@/components/navbar"
import { MainContent } from "@/components/main-content"

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      <SidebarProvider>
        <div className="flex min-h-screen">
          <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <MainContent activeSection={activeSection} />
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
