"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, BarChart2, Users, Settings, Menu, Coins } from "lucide-react"

const navItems = [
  { name: "Dashboard", id: "dashboard", icon: Home },
  { name: "Analytics", id: "analytics", icon: BarChart2 },
  { name: "Customers", id: "customers", icon: Users },
  { name: "Create Token", id: "createToken", icon: Coins },
  { name: "Settings", id: "settings", icon: Settings },
]

interface LeftNavSidebarProps {
  onTabChange: (tabId: string) => void
}

export function LeftNavSidebar({ onTabChange }: LeftNavSidebarProps) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange(tabId)
    setOpen(false)
  }

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-40">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "justify-start",
                  activeTab === item.id && "bg-accent"
                )}
                onClick={() => handleTabClick(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden border-r bg-background md:block w-[240px] overflow-y-auto">
        <ScrollArea className="flex-grow">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "justify-start",
                  activeTab === item.id && "bg-accent"
                )}
                onClick={() => handleTabClick(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </>
  )
}