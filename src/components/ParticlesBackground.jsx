import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ParticlesBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="particles-bg fixed inset-0 -z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(14, 165, 233, 0) 70%)`,
          }}
          animate={{
            y: [0, -300, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default ParticlesBackground
