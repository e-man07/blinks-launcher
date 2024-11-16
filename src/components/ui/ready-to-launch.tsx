'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReadyToLaunch() {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">
            Ready to Launch Your Token?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join the Solana revolution and launch your token on the fastest-growing blockchain network.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20" />
      </div>
    </section>
  )
}