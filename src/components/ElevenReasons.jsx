import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ElevenReasons = () => {
  const reasons = [
    'Your Resilience',
    'Your Smile',
    'Your Strength',
    'Your Warmth',
    'Your Courage',
    'Your Heart',
    'Your Kindness',
    'Your Patience',
    'Your Beauty',
    'Your Determination',
    'Your Spirit',
  ]

  const [flipped, setFlipped] = useState({})

  const toggleFlip = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

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
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
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
            11 Reasons I Love You
          </h2>
          <p className="text-blue-200/70 text-lg">
            One for each year of your journey
          </p>
        </motion.div>

        {/* Grid of flip cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => toggleFlip(index)}
              className="h-64 cursor-pointer perspective"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flipped[index] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front side */}
                <motion.div
                  className="absolute w-full h-full glass rounded-xl p-6 flex flex-col items-center justify-center glow-blue-sm hover:glow-blue transition-all duration-300"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-5xl mb-4">💙</div>
                  <p className="text-center text-sm text-blue-200/70">Click to reveal</p>
                  <motion.div
                    className="mt-4 w-1 h-1 bg-blue-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>

                {/* Back side */}
                <motion.div
                  className="absolute w-full h-full glass rounded-xl p-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/30 to-cyan-500/20 glow-blue"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                      #{index + 1}
                    </p>
                    <p className="text-blue-100 font-semibold text-lg mt-4">
                      {reason}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-blue-200/70 italic">
            11 reasons, and honestly, I could write 11,000 more.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ElevenReasons
