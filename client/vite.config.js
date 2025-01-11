import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: isProduction ? 'https://52.172.154.181:433' : 'http://52.172.154.181:3000'
        }
      }
    }
  }
})
