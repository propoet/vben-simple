import { cwd } from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, cwd(), '')

  return {
    plugins: [vue(), tailwindcss(), compression()],
    server: {
      port: Number.parseInt(env.VITE_PORT ?? '3000'),
    },
  }
})
