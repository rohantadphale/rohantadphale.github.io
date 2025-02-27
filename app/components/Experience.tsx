'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiAward } from 'react-icons/fi'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Walmart',
      role: 'Software Developer',
      period: 'Present',
      description: 'Working with technologies including Java, Spring Boot, Spring Batch, Kafka, microservices architecture, MySQL, MongoDB, and Azure storage.',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'MySQL', 'MongoDB', 'Azure'],
      icon: <FiBriefcase className="w-6 h-6 text-blue-500" />,
    },
    {
      company: 'Paychex Inc',
      role: 'Java Developer',
      period: 'Previous',
      description: 'Specialized in onboarding legacy Pro C code onto modern Java pipeline, improving system efficiency and maintainability.',
      technologies: ['Java', 'Pro C', 'Legacy Migration'],
      icon: <FiCalendar className="w-6 h-6 text-purple-500" />,
    },
    {
      company: 'YUJ Designs',
      role: 'Designer & Developer',
      period: 'Previous',
      description: [
        'Designed and developed a digital platform for portfolio management, resulting in 37% increase in clientele and 48% revenue growth.',
        'Created an Android application with 100,000+ Play Store installs.',
        'Automated complex financial transactions for financial advisors.',
      ],
      technologies: ['React', 'Android', 'HTML', 'CSS', 'Axure'],
      icon: <FiAward className="w-6 h-6 text-green-500" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{exp.company}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl text-gray-600 dark:text-gray-300">{exp.role}</span>
                      <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc list-inside mb-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
} 