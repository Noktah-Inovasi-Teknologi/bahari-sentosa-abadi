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
  // site: {
  //   url: 'https://baharisentosaabadi.com',
  //   name: 'PT Bahari Sentosa Abadi',
  //   description: 'Leading salt manufacturer in Indonesia, providing high-quality salt products for industrial, food processing, and commercial applications.',
  //   defaultLocale: 'id',
  // },
  // seo: {
  //   fallbackTitle: false,
  //   templateParams: {
  //     siteName: 'PT Bahari Sentosa Abadi',
  //   },
  // },
  // sitemap: {
  //   hostname: 'https://baharisentosaabadi.com',
  //   gzip: true,
  //   routes: [
  //     '/',
  //     '/tentangkami',
  //     '/visimisi', 
  //     '/produk',
  //     '/artikel',
  //   ],
  // },
});