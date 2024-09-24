'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { MINT_SIZE, TOKEN_PROGRAM_ID, createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"


export function SolanaTokenGenerator() {

  const {connection} = useConnection();
  const wallet = useWallet();

  async function createToken(){
    const name = (document.getElementById("tokenName") as HTMLInputElement) ?.value ;
    const symbol = (document.getElementById("tokenSymbol") as HTMLInputElement) ?.value ;
    const decimals = (document.getElementById("decimals") as HTMLInputElement) ?.value ;
    const initailSupply = (document.getElementById("initialSupply") as HTMLInputElement) ?.value ;
    const mintAuthority = (document.getElementById("mintAuthority") as HTMLInputElement) ?.value ;


    console.log( `name : ${name}`)
    console.log( `symbol : ${symbol}`)
    console.log( `decimals : ${decimals}`)
    console.log( `initailSupply : ${initailSupply}`)
    console.log( `mintAuthority : ${mintAuthority}`)


    const mintKeypair = Keypair.generate();
        const lamports = await getMinimumBalanceForRentExemptMint(connection);

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: mintKeypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_PROGRAM_ID,
            }),
            createInitializeMint2Instruction(mintKeypair.publicKey, 9, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID)
        );
            
        transaction.feePayer = wallet.publicKey;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.partialSign(mintKeypair);

        await wallet.sendTransaction(transaction, connection);
        console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);

  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Solana Token Generator</h1>
      <div className="space-y-4">
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
        <Button onClick={createToken} className="w-full" type="submit">Generate Token</Button>
      </div>
    </div>  
  )
}