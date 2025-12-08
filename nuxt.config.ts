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
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
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
  site: {
    url: 'https://baharisentosaabadi.co.id',
    name: 'Bahari Sentosa Abadi',
    description: 'Distributor resmi garam berkualitas tinggi dari PT Unichem Candi Indonesia. Melayani garam industri dan konsumsi dengan sertifikasi Halal MUI, ISO 9001, FSSC 22000. Pengiriman ke seluruh Indonesia.',
    defaultLocale: 'id',
  },
  seo: {
    fallbackTitle: false,
  },
  sitemap: {
    sources: [
      '/sitemap.xml'
    ]
  },
});