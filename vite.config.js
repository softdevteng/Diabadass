import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This explicitly tells Vite your site lives at github.io/Diabadass/
  base: '/Diabadass/', 
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})