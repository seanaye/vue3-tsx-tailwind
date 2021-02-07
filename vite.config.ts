import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vueJsx(),
    VitePWA()
  ]
})
