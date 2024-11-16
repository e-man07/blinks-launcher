import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Rocket } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Rocket className="h-6 w-6 text-indigo-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">SolLaunch</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Terms</Link>
            <Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Privacy</Link>
            <Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">FAQ</Link>
          </nav>
          <div className="flex space-x-4">
            <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 focus:border-indigo-500" />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Subscribe</Button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SolLaunch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}