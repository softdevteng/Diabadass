import React from 'react'
import { credit } from '../data/galleryImages'

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-sm text-blue-200/60">
      <div className="max-w-6xl mx-auto">
        <p>{credit}</p>
      </div>
    </footer>
  )
}

export default Footer
