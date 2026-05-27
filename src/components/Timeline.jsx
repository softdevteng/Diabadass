import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const milestones = [
    {
      date: '14 Feb 2015',
      title: 'The Diagnosis',
      description: 'The day everything changed. Type 1 Diabetes entered her life, but couldn\'t touch her spirit.',
      icon: '🎯',
    },
    {
      date: '2015-2016',
      title: 'Learning to Adapt',
      description: 'The first year of adjustment, learning injections, counting carbs, and discovering inner strength.',
      icon: '📚',
    },
    {
      date: '2016-2018',
      title: 'Finding the New Normal',
      description: 'Navigating teenage years with diabetes. School, friends, dreams—all pursued with quiet determination.',
      icon: '🌟',
    },
    {
      date: '2018-2020',
      title: 'Silent Battles',
      description: 'Facing difficult moments—exhaustion, uncertainty, pain—yet rising every single day with grace.',
      icon: '💪',
    },
    {
      date: '2020-2022',
      title: 'Personal Victories',
      description: 'Milestones achieved despite the invisible battle. Proving that limitations don\'t define potential.',
      icon: '🏆',
    },
    {
      date: '2022-2024',
      title: 'Growth and Resilience',
      description: 'Transforming pain into purpose, fear into courage, and survival into thriving.',
      icon: '🌱',
    },
    {
      date: '2024-2026',
      title: 'She Keeps Smiling',
      description: 'Eleven years later, still strong, still smiling, still inspiring everyone around her.',
      icon: '✨',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative w-full py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text mb-4">
            Her Journey Through Time
          </h2>
          <p className="text-blue-200/70 text-lg">
            From diagnosis to strength: 11 years of resilience
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="glass p-6 rounded-xl glow-blue-sm hover:glow-blue transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{milestone.icon}</span>
                      <p className="text-sm text-blue-300 font-mono">{milestone.date}</p>
                    </div>
                    <h3 className="text-xl font-bold text-blue-100 mb-2">{milestone.title}</h3>
                    <p className="text-blue-200/80 leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="hidden md:flex w-0 justify-center"
                  whileInView={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-5 h-5 bg-blue-400 rounded-full border-4 border-slate-950 glow-blue"></div>
                </motion.div>

                {/* Spacer for mobile */}
                <div className="md:hidden w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
