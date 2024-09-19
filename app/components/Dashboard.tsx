"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, ArrowDownRight, DollarSign, Coins, Activity, Users } from "lucide-react"

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 280 },
  { name: 'May', value: 590 },
  { name: 'Jun', value: 320 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Solana Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solana Price</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$22.41</div>
            <p className="text-xs text-muted-foreground">
              -3.2% from last 24h
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,324</div>
            <p className="text-xs text-muted-foreground">
              +19% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Volume</CardTitle>
            <CardDescription>Daily transaction volume over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest Solana transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <ArrowUpRight className="mr-2 h-4 w-4 text-green-500" />
                <div className="flex-1">Sent 2.5 SOL to Alice</div>
                <div className="text-muted-foreground">2 hours ago</div>
              </div>
              <div className="flex items-center">
                <ArrowDownRight className="mr-2 h-4 w-4 text-red-500" />
                <div className="flex-1">Received 10 SOL from Bob</div>
                <div className="text-muted-foreground">5 hours ago</div>
              </div>
              <div className="flex items-center">
                <ArrowUpRight className="mr-2 h-4 w-4 text-green-500" />
                <div className="flex-1">Sent 0.5 SOL to Charlie</div>
                <div className="text-muted-foreground">1 day ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Transfer</CardTitle>
          <CardDescription>Send SOL to another wallet</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="address">Recipient Address</label>
              <Input id="address" placeholder="Enter Solana wallet address" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="amount">Amount (SOL)</label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>
            <Button className="w-full">Send SOL</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}