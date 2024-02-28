import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:8080,
    // proxy: {
    //   '/api': 'http://localhost:8080', // Ruta del servidor Express
    // },
  },
})


    // "dev": "concurrently \"nodemon ./server.js\" \"vite\"",
