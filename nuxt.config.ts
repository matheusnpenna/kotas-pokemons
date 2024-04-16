// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  css: ['/assets/css/app.css', '/assets/scss/app.scss'],
  vue: {
    propsDestructure: true
  },
  nitro: {
    preset: 'vercel-edge',
  },
  image: {
    dir: './src/assets/img',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt', 
    '@nuxt/image', 
    "@hebilicious/vue-query-nuxt",
    ['@nuxtjs/google-fonts', {
        families: {
          Quicksand: [700],
          Mulish: [400, 600, 700]
        }
      }
    ],
  ],
  pinia: {
    storesDirs: ['./src/stores/**']
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://pokeapi.co/api/v2',
    },
  },
  app: {
    head: {
      title: 'Kotas Pokemon Challenge - Matheus Penna',
      meta: [
        { name: 'description', content: 'Kotas Pokemon Challenge by Coodesh - Matheus Penna' }
      ]
    }
  },
  routeRules: {
    "/": { ssr: false }
  }
})
