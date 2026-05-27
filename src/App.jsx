import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Resilience from './components/Resilience'
import SpecialQualities from './components/SpecialQualities'
import LoveLetter from './components/LoveLetter'
import Gallery from './components/Gallery'
import ElevenReasons from './components/ElevenReasons'
import Closing from './components/Closing'
import ParticlesBackground from './components/ParticlesBackground'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <ParticlesBackground />
      
      {/* Fixed gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-blue-950/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <Timeline />
        <Resilience />
        <SpecialQualities />
        <LoveLetter />
        <Gallery />
        <ElevenReasons />
        <Closing />
        <Footer />
      </div>
    </div>
  )
}

export default App
