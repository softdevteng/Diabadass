import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Closing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-950 to-blue-950"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl top-0 right-20"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl bottom-0 left-20"></div>
        </motion.div>
      </div>

      {/* Animated floating particles/stars */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -300, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 md:px-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold font-serif gradient-text mb-6">
            Your Story
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
            Is not one of weakness—
          </p>
        </motion.div>

        {/* Central quote */}
        <motion.div
          variants={itemVariants}
          className="glass p-10 md:p-16 rounded-2xl glow-blue mb-12 max-w-2xl mx-auto"
        >
          <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 leading-relaxed font-serif">
            It is one of extraordinary resilience.
          </p>
        </motion.div>

        {/* Supporting text */}
        <motion.div variants={itemVariants} className="space-y-6 mb-12">
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Since 14 February 2015, you have faced every challenge with courage and grace.
          </p>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            You have turned pain into purpose, fear into determination, and survival into thriving.
          </p>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Your journey of 11 years is a testament to what the human spirit can endure and overcome.
          </p>
        </motion.div>

        {/* Final declaration */}
        <motion.div
          variants={itemVariants}
          className="glass p-10 md:p-14 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 glow-blue max-w-2xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 font-serif">
            Forever Proud of You
          </p>
        </motion.div>

        {/* Date reference */}
        <motion.p
          variants={itemVariants}
          className="mt-12 text-blue-300/70 text-sm font-mono"
        >
          14 February 2015 — Present and Beyond
        </motion.p>

        {/* Final accent */}
        <motion.div
          className="mt-16 flex justify-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-blue-300/50 text-xs">~ End of Story ~</p>
      </motion.div>
    </section>
  )
}

export default Closing
