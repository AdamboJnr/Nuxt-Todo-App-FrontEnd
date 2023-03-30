// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
    modules: ['nuxt-icon', '@pinia/nuxt', '@nuxtjs/supabase'],
    alias: {
        '@': resolve(__dirname, "/")
    },
    css: [
        "~/assets/main.css"
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
})
