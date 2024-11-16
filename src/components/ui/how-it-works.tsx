'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Search, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HowItWorks() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {[
              { icon: Zap, title: "Create & Launch", description: "Easily create and launch your Solana tokens with our user-friendly platform." },
              { icon: Search, title: "Discover & Collect", description: "Explore a wide range of unique Solana tokens and build your collection." },
              { icon: Shield, title: "Secure & Transparent", description: "Enjoy a secure and transparent token launchpad built on Solana's blockchain." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                  <CardHeader>
                    <item.icon className="h-12 w-12 text-indigo-500 mb-4" />
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}