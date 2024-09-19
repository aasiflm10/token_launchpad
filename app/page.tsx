"use client"

import { useState } from "react"
import { LeftNavSidebar } from "./components/LeftSideBar"
import Dashboard from "./components/Dashboard"
import { SolanaTokenGenerator } from "./components/CreateToken"
import { SendSolanaComponent } from "./components/SendSOL"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "analytics":
        return <div>This is analytics</div>
      case "customers":
        return <SendSolanaComponent/> 
      case "createToken":
        return <SolanaTokenGenerator/>
      case "settings":
        return <div>Add settings </div>
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <LeftNavSidebar onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}