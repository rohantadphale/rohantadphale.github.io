'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Experiments() {
  const experiments = [
    {
      title: 'GT Sport, 2021',
      description: 'An in-browser recreation of a scene from the game Gran Turismo Sport. Great for learning Blender, namely lighting and camera movement, together with the React Three Fiber ecosystem.',
      href: '#',
      icon: '🎮',
    },
    {
      title: 'Portfolio Experiments',
      description: 'Various interactive experiments and animations built with Three.js and WebGL.',
      href: '#',
      icon: '🔬',
    },
  ]

  return (
    <section className="py-16">
      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-12"
        >
          Experiments
        </motion.h2>
        <div className="space-y-12">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={experiment.href} className="group block">
                <div className="flex items-start gap-4">
                  <div className="text-xl">{experiment.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium group-hover:opacity-60 transition-opacity">
                      {experiment.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {experiment.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 