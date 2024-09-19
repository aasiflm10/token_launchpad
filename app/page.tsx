"use client";
import { useState } from "react";
import { LeftNavSidebar } from "./components/LeftSideBar";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const handleTabChange = (tabId: string) => {
    console.log("Selected Tab:", tabId);
    setSelectedTab(tabId);
  };

  return (
    <div className="flex h-screen">
      <LeftNavSidebar onTabChange={handleTabChange} />
      <div>
        {/* Render content based on the selected tab */}
        {selectedTab === "dashboard" && <p>this is dashboard</p>}
        {selectedTab === "analytics" && <p>this is analytics</p>}
        {selectedTab === "customers" && <p>this is customers</p>}
        {selectedTab === "createToken" && <p>this is createToken</p>}
        {selectedTab === "settings" && <p>this is settings</p>}
      </div>
    </div>
  );
}
