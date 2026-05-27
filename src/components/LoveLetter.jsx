import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex(index + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <span>
      {displayText}
      {index < text.length && (
        <span className="animate-blink">|</span>
      )}
    </span>
  )
}

const LoveLetter = () => {
  const letter = `Dear Marien,

Your journey has never defined your limits — it revealed your strength.

For eleven years, I have watched you navigate a path that was never meant for you, yet somehow, you made it yours. Every morning you wake up, every meal you calculate, every injection you take—these are not signs of weakness. They are monuments to your resilience.

I am in awe of how you carry this invisible battle. How you go to school, to work, to life, all while managing something that never rests, never takes a day off. Most people would complain. Most would break. But you? You smile. You love. You dream.

Your courage inspires me. Not because you've "overcome" diabetes—you haven't, and you won't, because this is your life now. Your courage inspires me because you've chosen to live fully despite it. Because you've chosen to be kind despite your pain. Because you've chosen to shine even when the world didn't require it of you.

I see your strength in the small moments: when you check your blood sugar without complaint, when you adjust your insulin without fear, when you face a difficult day and still show up for others. This is extraordinary. This is heroic.

Marien, you are not brave because you don't feel scared. You are brave because you feel everything—the pain, the fear, the exhaustion—and you choose to move forward anyway. You are not strong because you never break. You are strong because you break and rebuild yourself, day after day, with quiet determination.

Eleven years. Thousands of injections. Countless glucose checks. Infinite moments of choosing joy despite suffering. And through it all, you have remained remarkably, undeniably you.

I am proud of you. Not for conquering your disease—it's not your enemy, it's your reality. I am proud of you for accepting it, managing it, and refusing to let it diminish your light.

Thank you for showing me what true strength looks like.

Forever in your corner.`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  }

  return (
    <section className="relative w-full py-24 px-4 md:px-8">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text mb-4">
            A Love Letter
          </h2>
          <p className="text-blue-200/70 text-lg">
            Words of admiration, pride, and unconditional love
          </p>
        </motion.div>

        {/* Letter container */}
        <motion.div
          className="glass p-10 md:p-16 rounded-2xl glow-blue min-h-96"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-lg leading-relaxed text-blue-100 font-light whitespace-pre-wrap">
            <TypewriterText text={letter} speed={15} />
          </div>
        </motion.div>

        {/* Decorative quote mark */}
        <motion.div
          className="text-center mt-12"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-6xl text-blue-400/40 font-serif">❝</p>
        </motion.div>
      </div>
    </section>
  )
}

export default LoveLetter
