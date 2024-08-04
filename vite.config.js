import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: "/portfolio",
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    define: {
      'process.env.PUBLIC_URL': JSON.stringify(env.PUBLIC_URL)
    },
    build: {
      rollupOptions: {
        output: {
          // Ensure that no evals are used in the bundled output
          inlineDynamicImports: false,
          manualChunks: undefined
        }
      }
    }
  }
})
