'use client'

import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="py-20 text-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDM0MzQiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-10" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600"
        >
          Launch Your Solana Tokens
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
        >
            
          Discover, launch, and collect extraordinary Solana tokens on the world&apos;s first and largest token launchpad
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Explore Tokens
          </Button>
          <Button size="lg" variant="outline" className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white">
            Create a Token
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0"
      >
        <div className="w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </section>
  )
}