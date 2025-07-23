import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fietsvierdaagse/', // Pas dit aan naar jouw repo-naam
})
