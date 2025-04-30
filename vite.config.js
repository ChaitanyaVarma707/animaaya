import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 base path must match repo name for GitHub Pages
export default defineConfig({
  base: '/animaaya/',
  plugins: [react()],
})

