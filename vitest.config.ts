import { defineVitestConfig } from '@nuxt/test-utils/config'
import Vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'

export default defineVitestConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "happy-dom"
  }
})
