// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxthub/core",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],
  fonts: {
    families: [
      { name: 'Manrope', provider: 'google' },
      { name: 'Rubik', provider: 'google' }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  },
});