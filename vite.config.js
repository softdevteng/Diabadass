import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use project subpath for GitHub Pages
  base: '/Diabadass/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
