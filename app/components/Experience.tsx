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
    },
    {
      company: 'Paychex Inc',
      role: 'Java Developer',
      period: 'Previous',
      description: 'Specialized in onboarding legacy Pro C code onto modern Java pipeline, improving system efficiency and maintainability.',
      technologies: ['Java', 'Pro C', 'Legacy Migration'],
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
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium group-hover:opacity-60 transition-opacity">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">{exp.role}</span>
                    <span className="text-sm text-gray-500">
                      {exp.period}
                    </span>
                  </div>
                  {Array.isArray(exp.description) ? (
                    <ul className="mt-4 space-y-2 text-gray-600">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-gray-600">{exp.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-gray-500"
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
    </section>
  )
} 