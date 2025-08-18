import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base helps previews on GitHub Pages work without knowing repo name
export default defineConfig({
  plugins: [react()],
  base: './'
})
