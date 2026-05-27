import React from 'react'
import { motion } from 'framer-motion'
import images from '../data/galleryImages'

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative w-full py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text mb-4">
            Memory Gallery
          </h2>
          <p className="text-blue-200/70 text-lg">
            Moments of strength and beauty
          </p>
        </motion.div>

        {/* Gallery grid: small frames that expand on hover */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="w-full aspect-square bg-slate-900 rounded-lg shadow-lg transition-transform duration-400 transform-gpu group-hover:scale-110">
                <img
                  src={src}
                  alt={`memory-${index + 1}`}
                  className="w-full h-full object-cover rounded-lg block"
                  loading="lazy"
                />
                {/* subtle glow */}
                <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-t from-transparent to-blue-500/8 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* (instructional note removed) */}
      </div>
    </section>
  )
}

export default Gallery
