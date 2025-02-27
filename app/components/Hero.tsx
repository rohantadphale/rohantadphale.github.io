'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-[50vh] flex items-center">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rohan
            <br />
            Tadphale
          </h1>

          <p className="text-lg md:text-xl mb-12">
            I'm a designer turned developer who wants to help make the
            internet a more creative, accessible, and better place.
          </p>

          <div className="flex gap-6 text-lg">
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="hover:opacity-60 transition-opacity"
            >
              in
            </Link>
            <Link 
              href="mailto:your.email@example.com"
              className="hover:opacity-60 transition-opacity"
            >
              @
            </Link>
            <Link 
              href="#"
              className="hover:opacity-60 transition-opacity"
            >
              □
            </Link>
            <Link 
              href="https://github.com"
              target="_blank" 
              className="hover:opacity-60 transition-opacity"
            >
              gh
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 