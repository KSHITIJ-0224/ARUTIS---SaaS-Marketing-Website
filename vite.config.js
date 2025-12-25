import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ correct plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Vite plugin, no PostCSS needed
  ],
})
