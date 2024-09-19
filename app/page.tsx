"use client"

import { useState } from "react"
import { LeftNavSidebar } from "./components/LeftSideBar"
import Dashboard from "./components/Dashboard"
import { SolanaTokenGenerator } from "./components/CreateToken"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "analytics":
        return <div>This is analytics</div>
      case "customers":
        return <div>Hii there, customers</div>
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