import { Button } from "@/components/ui/button"
import { Rocket, Menu } from 'lucide-react'
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-8 w-8 text-indigo-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">SolLaunch</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Explore</Link>
          <Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Create</Link>
          <Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Community</Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white">
          Connect Wallet
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
    </header>
  )
}