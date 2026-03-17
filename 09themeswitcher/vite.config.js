import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ye line check karein

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ye plugin yahan hona chahiye
  ],
})