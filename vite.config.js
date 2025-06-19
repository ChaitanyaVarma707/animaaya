import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/animaaya/',  // ✅ Custom domains need base path set to root
  plugins: [react()],
})

