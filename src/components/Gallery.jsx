import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: 'A Moment of Peace',
      description: 'Finding calm in the storm',
    },
    {
      id: 2,
      title: 'Strength Within',
      description: 'The quiet power of resilience',
    },
    {
      id: 3,
      title: 'Light Keeper',
      description: 'Shining through every challenge',
    },
    {
      id: 4,
      title: 'Grace Unbroken',
      description: 'Beauty in every step',
    },
    {
      id: 5,
      title: 'Forever Rising',
      description: 'Soaring beyond boundaries',
    },
    {
      id: 6,
      title: 'Heart of Gold',
      description: 'Love radiating from within',
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
    hidden: { opacity: 0, scale: 0.9 },
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
            Memory Gallery
          </h2>
          <p className="text-blue-200/70 text-lg">
            Moments of strength and beauty
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ rotateZ: 2, y: -10 }}
              className="group cursor-pointer"
            >
              {/* Polaroid card */}
              <div className="bg-white p-3 rounded-lg shadow-2xl transform transition-transform duration-300 group-hover:shadow-2xl"
                style={{
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                  perspective: '1000px',
                }}
              >
                {/* Image placeholder with blue gradient */}
                <motion.div
                  className="w-full aspect-square bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-blue-500/30 rounded-sm relative overflow-hidden group-hover:from-blue-400/50 group-hover:via-cyan-400/40 group-hover:to-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 border-2 border-blue-400/30 rounded-sm group-hover:border-blue-400/60 transition-all duration-300"></div>

                  {/* Floating icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-4xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                </motion.div>

                {/* Polaroid text area removed - images only */}
              </div>

              {/* Glow effect behind card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-blue-500/0 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-200/70 italic">
            Note: Add your favorite photos and memories here. Each moment is precious.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
