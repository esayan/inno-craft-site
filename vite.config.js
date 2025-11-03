import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/inno-craft-site/',   // repo adın birebir böyle olmalı!
  plugins: [react()],
})
