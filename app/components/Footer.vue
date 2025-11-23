<template>
  <!-- Footer -->
  <footer class="bg-navy-900 dark:bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <img src="/bsa-logo.avif" alt="Bahari Sentosa Abadi Logo" class="h-10 w-10 rounded-full object-cover" />
            <h3 class="text-xl font-bold text-white font-heading">
              Bahari Sentosa Abadi
            </h3>
          </div>
          <p class="text-gray-300 font-body leading-relaxed mb-6">
            Distributor resmi garam berkualitas tinggi dari PT. Unichem Candi
            Indonesia. Melayani kebutuhan industri dan konsumsi sejak 2019
            dengan komitmen kualitas terbaik.
          </p>

          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <svg
                class="w-5 h-5 text-teal-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-gray-300 font-body">+62 813-3031-0676</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg
                class="w-5 h-5 text-teal-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-gray-300 font-body"
                >baharisentosaa@gmail.com</span
              >
            </div>
          </div>
        </div>

        <!-- Menu -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-semibold text-white font-heading mb-6">
            Menu
          </h3>
          <nav class="space-y-3">
            <NuxtLink
              to="/"
              class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
            >
              Beranda
            </NuxtLink>
            <NuxtLink
              to="/visimisi"
              class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
            >
              Visi & Misi
            </NuxtLink>
            <NuxtLink
              to="/tentangkami"
              class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
            >
              Tentang Kami
            </NuxtLink>
            <NuxtLink
              to="/produk"
              class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
            >
              Produk
            </NuxtLink>
            <NuxtLink
              to="/artikel"
              class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
            >
              Artikel
            </NuxtLink>
          </nav>
        </div>

        <!-- Locations -->
        <div class="lg:col-span-2">
          <h3 class="text-lg font-semibold text-white font-heading mb-6">
            Lokasi Kami
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Office Location -->
            <div
              class="bg-navy-800/50 dark:bg-gray-800/50 rounded-lg p-6 border border-navy-700 dark:border-gray-700"
            >
              <div class="flex items-start space-x-3 mb-3">
                <svg
                  class="w-5 h-5 text-teal-400 shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <div>
                  <h4 class="font-semibold text-teal-400 font-heading">
                    Kantor
                  </h4>
                  <p class="text-gray-300 font-body mt-1">
                    Gelam Candi, Sidoarjo.
                  </p>
                </div>
              </div>
            </div>

            <!-- Factory Location -->
            <div
              class="bg-navy-800/50 dark:bg-gray-800/50 rounded-lg p-6 border border-navy-700 dark:border-gray-700"
            >
              <div class="flex items-start space-x-3 mb-3">
                <svg
                  class="w-5 h-5 text-teal-400 shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <div>
                  <h4 class="font-semibold text-teal-400 font-heading">
                    Pabrik
                  </h4>
                  <p class="text-gray-300 font-body mt-1">
                    Pabrik PT. Unichemcandi - Manyarsidorukun, Gresik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="mt-8">
            <h4 class="font-semibold text-white font-heading mb-4">
              Sertifikasi
            </h4>
            <div class="flex flex-wrap gap-3">
              <div
                class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full"
              >
                <span class="text-teal-300 text-sm font-body">Halal MUI</span>
              </div>
              <div
                class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full"
              >
                <span class="text-teal-300 text-sm font-body">ISO 9001</span>
              </div>
              <div
                class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full"
              >
                <span class="text-teal-300 text-sm font-body">ISO 14000</span>
              </div>
              <div
                class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full"
              >
                <span class="text-teal-300 text-sm font-body"
                  >FSSC ISO 22000</span
                >
              </div>
              <div
                class="px-3 py-1 bg-navy-600/20 border border-navy-500/30 rounded-full"
              >
                <span class="text-navy-300 text-sm font-body"
                  >PKP Terdaftar</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-navy-700 dark:border-gray-700 mt-12 pt-8">
        <div
          class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
        >
          <!-- Copyright -->
          <div class="text-center lg:text-left">
            <p class="text-gray-300 font-body">
              © 2024 Bahari Sentosa Abadi. All rights reserved.
            </p>
            <p class="text-gray-400 text-sm font-body mt-1">
              Distributor resmi PT. Unichem Candi Indonesia
            </p>
          </div>

          <!-- Social Links & Business Info -->
          <div
            class="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8"
          >
            <div class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-gray-300 text-sm font-body"
                >Pengusaha Kena Pajak (PKP)</span
              >
            </div>

            <div class="flex items-center space-x-4">
              <a
                href="https://wa.me/6281330310676"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"
                  />
                </svg>
              </a>
              <a
                href="mailto:baharisentosaa@gmail.com"
                class="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>