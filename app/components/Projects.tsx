'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Management Platform',
      image: '/project1.jpg',
      logo: '/logo1.png',
      href: '#',
    },
    {
      title: 'Financial Advisory App',
      image: '/project2.jpg',
      logo: '/logo2.png',
      href: '#',
    },
    {
      title: 'Investment Dashboard',
      image: '/project3.jpg',
      logo: '/logo3.png',
      href: '#',
    },
    {
      title: 'Trading Platform',
      image: '/project4.jpg',
      logo: '/logo4.png',
      href: '#',
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
          Work
        </motion.h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={project.href} className="block group">
                <div className="relative aspect-[16/9] bg-gray-100 mb-4">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                </div>
                <div className="h-12 flex items-center">
                  <div className="text-lg font-medium group-hover:opacity-60 transition-opacity">
                    {project.title}
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