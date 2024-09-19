'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SolanaTokenGenerator() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Solana Token Generator</h1>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tokenName">Token Name</Label>
          <Input id="tokenName" placeholder="Enter token name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tokenSymbol">Token Symbol</Label>
          <Input id="tokenSymbol" placeholder="Enter token symbol" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="decimals">Decimals</Label>
          <Input id="decimals" type="number" placeholder="Enter number of decimals" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="initialSupply">Initial Supply</Label>
          <Input id="initialSupply" type="number" placeholder="Enter initial supply" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mintAuthority">Mint Authority</Label>
          <Input id="mintAuthority" placeholder="Enter mint authority address" />
        </div>
        <Button className="w-full" type="submit">Generate Token</Button>
      </form>
    </div>
  )
}