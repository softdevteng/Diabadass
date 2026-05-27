import React from 'react'
import { motion } from 'framer-motion'

const Resilience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative w-full py-32 px-4 md:px-8 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight"
          >
            <span className="gradient-text">Resilience</span>
            <br />
            <span className="text-blue-100">Lives Here</span>
          </motion.h2>

          {/* Supporting headings */}
          <motion.div variants={itemVariants} className="space-y-6 mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-200">
              She Never Stopped Fighting
            </h3>
            <h3 className="text-2xl md:text-4xl font-bold text-cyan-200">
              Strength Beyond Words
            </h3>
          </motion.div>

          {/* Main content paragraphs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8 mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="glass p-8 md:p-12 rounded-2xl glow-blue"
            >
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-light">
                Resilience is not about fighting without pain. It's about waking up every single day, 
                despite the fatigue, despite the invisible battles, and choosing to face the world with grace. 
                Marien understands this truth deeply.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass p-8 md:p-12 rounded-2xl glow-blue-sm"
            >
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-light">
                Every injection is a reminder of her strength. Every glucose check is a small act of courage. 
                Every moment she chooses to smile while carrying an invisible battle—that is resilience. 
                That is extraordinary.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass p-8 md:p-12 rounded-2xl glow-blue-sm"
            >
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-light">
                For 11 years, she has carried this burden with a lightness that confuses those who don't understand 
                the depth of her strength. She's been tired, she's been scared, she's faced moments of despair—
                yet she still shows up. She still loves. She still dreams.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass p-8 md:p-12 rounded-2xl glow-blue-sm"
            >
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-light">
                This is not a story of weakness overcome. This is a story of quiet, unshakeable strength. 
                Of a girl who learned to dance with her disease instead of being defined by it. 
                Of courage that whispers instead of shouts, but echoes through time.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass p-8 md:p-12 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 glow-blue"
            >
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 leading-relaxed">
                Marien Muturi: A testament to the power of the human spirit.
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center gap-4 mt-12"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resilience
