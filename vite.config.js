import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'splash.html'),
        royal: resolve(__dirname, 'assets/logo-v2.png'),
        backgoround: resolve(__dirname, 'assets/bg.png'),
        heart: resolve(__dirname, 'assets/svg.png'),
      }
    }
  }
})
