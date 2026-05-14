import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
    return {
      server: {
        proxy: {
          '/api': {
            target: 'https://studio-api.prod.suno.com',
            changeOrigin: true,
            secure: false
          }
        }
      },
      plugins: [
          react(),
          tailwindcss(),
      ],
    };
});
