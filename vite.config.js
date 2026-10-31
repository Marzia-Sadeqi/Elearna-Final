import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from /Elearna-website/ ; Vercel and local dev use "/".
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Elearna-website/' : '/',
  plugins: [react(), tailwindcss()],
})
