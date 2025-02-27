'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16">
      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <p className="text-gray-600">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:opacity-60 transition-opacity"
              >
                your.email@example.com
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:opacity-60 transition-opacity flex items-center gap-2"
                >
                  <FiLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:opacity-60 transition-opacity flex items-center gap-2"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 