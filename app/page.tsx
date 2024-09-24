"use client";

import { useState } from "react";
import { LeftNavSidebar } from "./components/LeftSideBar";
import Dashboard from "./components/Dashboard";
import { SolanaTokenGenerator } from "./components/CreateToken";
import { SendSolanaComponent } from "./components/SendSOL";
// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "analytics":
        return <div>This is analytics</div>;
      case "customers":
        return <SendSolanaComponent />;
      case "createToken":
        return <SolanaTokenGenerator />;
      case "settings":
        return <div>Add settings </div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <div className="flex h-screen overflow-hidden">
              <LeftNavSidebar onTabChange={setActiveTab} />
              <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto px-4 py-8">
                  {renderContent()}
                </div>
              </main>
            </div> 
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}
