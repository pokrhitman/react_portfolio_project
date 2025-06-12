import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
