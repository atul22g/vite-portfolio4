import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://atugatran.github.io/React-portfolio4/",
  plugins: [react()]
})
