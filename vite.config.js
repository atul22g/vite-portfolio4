import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://react-portfolio4.netlify.app/",
  plugins: [react()]
})
