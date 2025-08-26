import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    host: true, // Allows access via IP (0.0.0.0)
    port: 5173, // Optional: change port if needed
    proxy: {
      '/api': {
        target: 'http://10.50.21.152:8080',       
        changeOrigin: false,
        secure: false,
        cookieDomainRewrite: 'localhost',
      },
    }
  }
})

