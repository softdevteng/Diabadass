import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SpecialQualities = () => {
  const qualities = [
    {
      title: 'Courage',
      description: 'Facing fears head-on, every single day',
      icon: '🦁',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Her Smile',
      description: 'A light that shines even through darkness',
      icon: '😊',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Kindness',
      description: 'Lifting others while carrying her own weight',
      icon: '❤️',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Patience',
      description: 'Understanding that healing takes time',
      icon: '🕯️',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Beauty',
      description: 'Radiant from within, strength made visible',
      icon: '✨',
      color: 'from-cyan-500 to-indigo-500',
    },
    {
      title: 'Determination',
      description: 'Pursuing dreams without limitations',
      icon: '🚀',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Heart',
      description: 'Loving deeply, feeling fiercely, living fully',
      icon: '💙',
      color: 'from-blue-500 to-cyan-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
            What Makes Marien Special
          </h2>
          <p className="text-blue-200/70 text-lg">
            Seven qualities that make her extraordinary
          </p>
        </motion.div>

        {/* Qualities grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`group relative overflow-hidden rounded-xl p-8 glass glow-blue-sm hover:glow-blue transition-all duration-300 cursor-pointer`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${quality.color} transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{quality.icon}</div>
                <h3 className="text-2xl font-bold text-blue-100 mb-3">{quality.title}</h3>
                <p className="text-blue-200/80 leading-relaxed">{quality.description}</p>

                {/* Accent line */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-blue-200/70 italic">
            These qualities are not despite her diabetes—they are enhanced by her journey through it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialQualities
