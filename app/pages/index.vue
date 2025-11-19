<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Company Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-navy-50 to-teal-50 dark:from-navy-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left side - Text content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-600 dark:text-navy-400 font-heading leading-tight">
              Pengiriman Garam Berkualitas ke Seluruh Indonesia
            </h1>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-body">
              Bahari Sentosa Abadi adalah distributor resmi dari PT. Unichem Candi Indonesia, kami telah bergerak pada bidang penjualan garam industri dan konsumsi sejak tahun 2019. Bahari Sentosa Abadi telah terdaftar sebagai Pengusaha Kena Pajak (PKP).
            </p>
            
            <div class="space-y-4">
              <p class="text-lg text-navy-600 dark:text-navy-400 font-body font-medium">
                Produk-produk yang kami tawarkan telah bersertifikat:
              </p>
              <div class="flex flex-wrap gap-3">
                <UBadge color="primary" variant="soft" size="lg">
                  Halal MUI
                </UBadge>
                <UBadge color="primary" variant="soft" size="lg">
                  ISO 9001
                </UBadge>
                <UBadge color="primary" variant="soft" size="lg">
                  ISO 14000
                </UBadge>
                <UBadge color="primary" variant="soft" size="lg">
                  FSSC ISO 22000
                </UBadge>
              </div>
            </div>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-body">
              Kami memberikan pelayanan terbaik dengan memberikan pelayanan konsultasi untuk menyesuaikan spesifikasi kebutuhan garam yang anda perlukan dan dapat mengirimkan produk kami ke seluruh Indonesia.
            </p>
            
            <div class="pt-6">
              <UButton 
                color="primary"
                size="lg" 
                class="px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                Hubungi Kami
              </UButton>
            </div>
          </div>

          <!-- Right side - Image carousel -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <UCarousel
                v-slot="{ item }"
                :items="[{ src: '/bsa-1.avif', alt: 'Bahari Sentosa Abadi Company - Professional Salt Distribution' }]"
                :ui="{ 
                  item: 'w-full',
                }"
                class="rounded-xl overflow-hidden"
              >
                <img
                  :src="item.src"
                  :alt="item.alt"
                  class="w-full h-96 lg:h-[500px] object-cover"
                  loading="lazy"
                >
              </UCarousel>
            </div>
          </div>
        </div>

        <!-- Statistics Section -->
        <div class="pt-20">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 class="text-2xl lg:text-3xl font-bold text-center text-navy-600 dark:text-navy-400 font-heading mb-12">
              Track Record Kepercayaan Klien
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <!-- Left container - Clients -->
              <div class="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300">
                <div class="relative">
                  <div class="absolute inset-0 bg-navy-100 dark:bg-navy-900/20 rounded-full blur-2xl"></div>
                  <div class="relative space-y-2">
                    <div class="flex items-center justify-center gap-2">
                      <span class="text-5xl lg:text-6xl font-bold text-navy-600 dark:text-navy-400 font-heading">70</span>
                      <span class="text-5xl lg:text-6xl font-bold text-teal-500 dark:text-teal-400 font-heading">+</span>
                    </div>
                    <p class="text-xl text-navy-700 dark:text-navy-300 font-body font-medium">
                      Klien Terpercaya
                    </p>
                  </div>
                </div>
                <p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                  Kepercayaan ini mencerminkan komitmen kami untuk memberikan produk berkualitas dan layanan yang optimal.
                </p>
              </div>

              <!-- Right container - Shipments -->
              <div class="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300">
                <div class="relative">
                  <div class="absolute inset-0 bg-navy-100 dark:bg-navy-900/20 rounded-full blur-2xl"></div>
                  <div class="relative space-y-2">
                    <div class="flex items-center justify-center gap-2">
                      <span class="text-4xl lg:text-5xl font-bold text-navy-600 dark:text-navy-400 font-heading">50.000</span>
                      <span class="text-4xl lg:text-5xl font-bold text-teal-500 dark:text-teal-400 font-heading">+</span>
                    </div>
                    <p class="text-xl text-navy-700 dark:text-navy-300 font-body font-medium">
                      Ton Garam Terdistribusi
                    </p>
                  </div>
                </div>
                <p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                  Kami memastikan setiap pengiriman berjalan tepat waktu dengan kualitas produk yang terjaga hingga tujuan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Keunggulan Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-navy-600 dark:text-navy-400 font-heading mb-4">
            Keunggulan Kami
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body">
            Pengalaman bertahun-tahun memberikan kami keunggulan kompetitif dalam industri distribusi garam
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Keunggulan 1 -->
          <div class="group relative bg-linear-to-br from-navy-50 to-navy-100 dark:from-navy-900/20 dark:to-navy-800/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-navy-200 dark:border-navy-700">
            <div class="absolute top-4 right-4 w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-4">
              Kualitas Terjamin
            </h3>
            <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              Produk garam kami telah tersertifikasi internasional dengan standar ISO dan Halal MUI, memastikan kualitas terbaik untuk setiap kebutuhan industri dan konsumsi.
            </p>
          </div>

          <!-- Keunggulan 2 -->
          <div class="group relative bg-linear-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-teal-200 dark:border-teal-700">
            <div class="absolute top-4 right-4 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 font-heading mb-4">
              Pengiriman Tepat Waktu
            </h3>
            <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              Jaringan distribusi yang luas memungkinkan kami mengirimkan produk ke seluruh Indonesia dengan jadwal yang dapat diandalkan dan sistem tracking real-time.
            </p>
          </div>

          <!-- Keunggulan 3 -->
          <div class="group relative bg-linear-to-br from-navy-50 to-navy-100 dark:from-navy-900/20 dark:to-navy-800/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-navy-200 dark:border-navy-700">
            <div class="absolute top-4 right-4 w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-4">
              Tim Profesional
            </h3>
            <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              Tim berpengalaman kami siap memberikan konsultasi teknis dan solusi terbaik untuk kebutuhan spesifik garam industri maupun konsumsi Anda.
            </p>
          </div>

          <!-- Keunggulan 4 -->
          <div class="group relative bg-linear-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-teal-200 dark:border-teal-700">
            <div class="absolute top-4 right-4 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 font-heading mb-4">
              Harga Kompetitif
            </h3>
            <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              Sebagai distributor resmi, kami menawarkan harga terbaik di pasaran dengan berbagai pilihan paket sesuai volume kebutuhan bisnis Anda.
            </p>
          </div>

          <!-- Keunggulan 5 -->
          <div class="group relative bg-linear-to-br from-navy-50 to-navy-100 dark:from-navy-900/20 dark:to-navy-800/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-navy-200 dark:border-navy-700">
            <div class="absolute top-4 right-4 w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-4">
              Dokumentasi Lengkap
            </h3>
            <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              Semua produk dilengkapi dengan sertifikat dan dokumentasi resmi sebagai PKP, memudahkan proses administrasi dan audit perusahaan Anda.
            </p>
          </div>

          <!-- Keunggulan 6 -->
          <div class="group relative bg-linear-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-teal-200 dark:border-teal-700">
            <div class="absolute top-4 right-4 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 font-heading mb-4">
              Support 24/7
            </h3>
            <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              Layanan konsultasi dan dukungan teknis tersedia 24 jam untuk memastikan kelancaran operasional bisnis dan kepuasan pelanggan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Manfaat Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-navy-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-4">
            Manfaat Bermitra dengan Kami
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body">
            Rasakan keuntungan nyata yang akan Anda dapatkan dengan menjadi mitra distribusi garam terpercaya
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left side - Benefits list -->
          <div class="space-y-6">
            <!-- Benefit 1 -->
            <div class="flex items-start space-x-4 group">
              <div class="shrink-0 w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-lg">1</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-2">
                  Efisiensi Operasional
                </h3>
                <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                  Satu supplier untuk semua kebutuhan garam industri dan konsumsi, menghemat waktu procurement dan mengurangi kompleksitas vendor management.
                </p>
              </div>
            </div>

            <!-- Benefit 2 -->
            <div class="flex items-start space-x-4 group">
              <div class="shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 font-heading mb-2">
                  Penghematan Biaya
                </h3>
                <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                  Harga distributor langsung tanpa markup berlebih, diskon volume untuk pembelian dalam jumlah besar, dan transparansi biaya pengiriman.
                </p>
              </div>
            </div>

            <!-- Benefit 3 -->
            <div class="flex items-start space-x-4 group">
              <div class="shrink-0 w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-lg">3</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-2">
                  Keamanan Stok
                </h3>
                <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                  Jaminan kontinuitas pasokan dengan stok yang selalu ready, sistem pre-order untuk kebutuhan besar, dan backup inventory management.
                </p>
              </div>
            </div>

            <!-- Benefit 4 -->
            <div class="flex items-start space-x-4 group">
              <div class="shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-lg">4</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 font-heading mb-2">
                  Compliance & Legal
                </h3>
                <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                  Semua dokumen PKP tersedia untuk keperluan audit, sertifikat produk lengkap untuk compliance perusahaan, dan dukungan legal documentation.
                </p>
              </div>
            </div>
          </div>

          <!-- Right side - Visual element -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
              <!-- Partnership Benefits Showcase -->
              <div class="text-center space-y-8">
                <div class="w-24 h-24 bg-linear-to-br from-navy-600 to-teal-600 rounded-full mx-auto flex items-center justify-center">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                
                <h3 class="text-2xl font-bold text-navy-700 dark:text-navy-300 font-heading">
                  Tingkatkan Efisiensi Bisnis
                </h3>
                
                <!-- Statistics -->
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-navy-700 dark:text-navy-300 font-heading">95%</div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-body">Kepuasan Klien</p>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 font-heading">24h</div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-body">Response Time</p>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-navy-700 dark:text-navy-300 font-heading">99%</div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-body">On-Time Delivery</p>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 font-heading">5+</div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-body">Tahun Pengalaman</p>
                  </div>
                </div>

                <!-- CTA -->
                <div class="pt-6">
                  <UButton 
                    color="primary" 
                    size="lg" 
                    class="px-8 py-4 transform hover:scale-105 transition-all duration-300"
                  >
                    Mulai Bermitra Sekarang
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-32 h-32 bg-linear-to-br from-navy-200 to-teal-200 dark:from-navy-800 dark:to-teal-800 rounded-full opacity-20 blur-2xl"></div>
            <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-linear-to-br from-teal-200 to-navy-200 dark:from-teal-800 dark:to-navy-800 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Produk Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-4">
            Produk Unggulan Kami
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body">
            Produk garam berkualitas tinggi dengan teknologi modern untuk memenuhi berbagai kebutuhan industri dan konsumsi
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Product 1 - Refine Salt -->
          <div class="group bg-linear-to-br from-navy-50 to-navy-100 dark:from-navy-900/20 dark:to-navy-800/20 rounded-2xl overflow-hidden border border-navy-200 dark:border-navy-700 hover:shadow-2xl transition-all duration-500">
            <!-- Product Image -->
            <div class="relative overflow-hidden">
              <img
                src="/product-6.avif"
                alt="Refine Salt - Premium Quality Salt"
                class="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-linear-to-t from-navy-900/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                  <span class="text-navy-700 dark:text-navy-300 font-semibold text-sm">Premium Quality</span>
                </div>
              </div>
            </div>
            
            <!-- Product Content -->
            <div class="p-8">
              <h3 class="text-2xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-4">
                Refined Salt (Garam Murni)
              </h3>
              
              <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed mb-6">
                Diproduksi menggunakan teknologi vacuum evaporation dan hydroextraction yang canggih untuk menghasilkan garam berkualitas farmasi dengan kemurnian NaCl ≥99.5%. Proses otomatisasi penuh memastikan konsistensi kualitas dan eliminasi kontaminan seperti kalsium, magnesium, dan logam berat.
              </p>

              <!-- Keunggulan List -->
              <div class="space-y-3 mb-6">
                <h4 class="text-lg font-semibold text-navy-600 dark:text-navy-400 font-heading mb-3">
                  Keunggulan:
                </h4>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-navy-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Kemurnian NaCl ≥99.5%</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-navy-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Kristal murni putih bersih</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-navy-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Bebas kontaminan logam berat</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-navy-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Kualitas farmasi & food grade</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-navy-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Larut cepat dalam air</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-navy-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">KIO3 yodium > 30 ppm</span>
                  </div>
                </div>
              </div>

              <!-- Technology Badge -->
              <div class="flex flex-wrap gap-2">
                <UBadge color="primary" variant="soft" size="sm">
                  Pharmaceutical Grade
                </UBadge>
                <UBadge color="primary" variant="soft" size="sm">
                  ≥99.5% NaCl
                </UBadge>
                <UBadge color="primary" variant="soft" size="sm">
                  Vacuum Evaporation
                </UBadge>
                <UBadge color="primary" variant="soft" size="sm">
                  ASTM Certified
                </UBadge>
              </div>
            </div>
          </div>

          <!-- Product 2 - Washing Salt -->
          <div class="group bg-linear-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-2xl overflow-hidden border border-teal-200 dark:border-teal-700 hover:shadow-2xl transition-all duration-500">
            <!-- Product Image -->
            <div class="relative overflow-hidden">
              <img
                src="/product-5.avif"
                alt="Washing Salt - Industrial Grade Salt"
                class="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-linear-to-t from-teal-900/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                  <span class="text-teal-700 dark:text-teal-300 font-semibold text-sm">Industrial Grade</span>
                </div>
              </div>
            </div>
            
            <!-- Product Content -->
            <div class="p-8">
              <h3 class="text-2xl font-bold text-teal-700 dark:text-teal-300 font-heading mb-4">
                Washing Salt (Garam Cuci)
              </h3>
              
              <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed mb-6">
                Diformulasi khusus untuk industri deterjen dan pembersih dengan teknologi automatic & robotic system. Memiliki ukuran partikel seragam dan dissolusi cepat untuk kontrol viskositas optimal serta stabilisasi surfaktan dalam produk deterjen industrial.
              </p>

              <!-- Keunggulan List -->
              <div class="space-y-3 mb-6">
                <h4 class="text-lg font-semibold text-teal-600 dark:text-teal-400 font-heading mb-3">
                  Keunggulan:
                </h4>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Kontrol viskositas deterjen</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Stabilisasi surfaktan</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Dissolusi cepat & seragam</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Mengurangi korosi logam</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Ramah lingkungan</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full shrink-0"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-body">Cost-effective solution</span>
                  </div>
                </div>
              </div>

              <!-- Technology Badge -->
              <div class="flex flex-wrap gap-2">
                <UBadge color="secondary" variant="soft" size="sm">
                  Detergent Grade
                </UBadge>
                <UBadge color="secondary" variant="soft" size="sm">
                  Viscosity Control
                </UBadge>
                <UBadge color="secondary" variant="soft" size="sm">
                  Uniform Particle
                </UBadge>
                <UBadge color="secondary" variant="soft" size="sm">
                  Industrial Use
                </UBadge>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-16">
          <div class="bg-linear-to-r from-navy-50 to-teal-50 dark:from-navy-900/20 dark:to-teal-900/20 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
            <h3 class="text-2xl lg:text-3xl font-bold text-navy-800 dark:text-navy-200 font-heading mb-4">
              Jelajahi Katalog Produk Lengkap
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-body">
              Temukan berbagai jenis garam berkualitas dengan spesifikasi yang sesuai untuk kebutuhan spesifik bisnis Anda
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <UButton 
                to="/produk"
                color="primary"
                size="xl" 
                class="px-10 py-5 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Lihat Katalog Produk
              </UButton>
              
              <div class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm font-body">Konsultasi gratis untuk spesifikasi khusus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hubungi Kami Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-teal-50 to-navy-50 dark:from-gray-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-4">
            Hubungi Kami
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body">
            Siap melayani kebutuhan garam industri dan konsumsi Anda. Konsultasi gratis untuk spesifikasi khusus dan penawaran terbaik
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left side - Contact Options -->
          <div class="space-y-8">
            <!-- WhatsApp Contact -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div class="flex items-start space-x-6">
                <div class="shrink-0">
                  <div class="w-16 h-16 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                    </svg>
                  </div>
                </div>
                
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 font-heading mb-2">
                    WhatsApp Chat
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 font-body mb-4">
                    Hubungi langsung via WhatsApp untuk respon cepat dan diskusi real-time mengenai kebutuhan produk Anda
                  </p>
                  
                  <div class="flex items-center space-x-3 mb-4">
                    <span class="text-2xl font-bold text-teal-600 dark:text-teal-400 font-heading">
                      +62 813-3031-0676
                    </span>
                  </div>
                  
                  <a
                    href="https://wa.me/6281330310676?text=Halo%20Bahari%20Sentosa%20Abadi,%20saya%20ingin%20bertanya%20tentang%20produk%20garam%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                    </svg>
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <!-- Email Contact -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div class="flex items-start space-x-6">
                <div class="shrink-0">
                  <div class="w-16 h-16 bg-linear-to-br from-navy-500 to-navy-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>
                
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-2">
                    Email Bisnis
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 font-body mb-4">
                    Kirim inquiry detail melalui email untuk penawaran formal, spesifikasi teknis, dan dokumentasi lengkap
                  </p>
                  
                  <div class="flex items-center space-x-3 mb-4">
                    <span class="text-lg font-semibold text-navy-600 dark:text-navy-400 font-heading">
                      baharisentosaa@gmail.com
                    </span>
                  </div>
                  
                  <a
                    href="mailto:baharisentosaa@gmail.com?subject=Inquiry%20Produk%20Garam%20Bahari%20Sentosa%20Abadi&body=Yth.%20Tim%20Bahari%20Sentosa%20Abadi,%0A%0ASaya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20produk%20garam%20Anda.%20Mohon%20informasi%20mengenai:%0A%0A1.%20Spesifikasi%20produk%0A2.%20Harga%20dan%20MOQ%0A3.%20Area%20pengiriman%0A%0ATerima%20kasih."
                    class="inline-flex items-center px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick Info -->
            <div class="bg-linear-to-r from-navy-100 to-teal-100 dark:from-navy-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-linear-to-br from-navy-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 dark:text-gray-200 font-heading">Jam Operasional</h4>
                  <p class="text-gray-600 dark:text-gray-400 font-body">Senin - Sabtu: 08:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right side - Image -->
          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/bsa-4.avif"
                alt="Bahari Sentosa Abadi - Professional Salt Distribution Team"
                class="w-full h-[600px] object-cover"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-linear-to-t from-navy-900/40 via-transparent to-transparent"></div>
              
              <!-- Overlay Content -->
              <div class="absolute bottom-8 left-8 right-8">
                <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6">
                  <h3 class="text-xl font-bold text-navy-700 dark:text-navy-300 font-heading mb-2">
                    Tim Profesional Siap Membantu
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 font-body">
                    Berpengalaman lebih dari 5 tahun dalam distribusi garam industri dengan komitmen memberikan pelayanan terbaik
                  </p>
                </div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-teal-200 to-navy-200 dark:from-teal-800 dark:to-navy-800 rounded-full opacity-20 blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-br from-navy-200 to-teal-200 dark:from-navy-800 dark:to-teal-800 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-linear-to-br from-navy-500 to-teal-500 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 font-heading mb-2">Respon Cepat</h4>
            <p class="text-gray-600 dark:text-gray-400 font-body">Balasan dalam 1-2 jam di hari kerja</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-linear-to-br from-teal-500 to-navy-500 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 font-heading mb-2">Terpercaya</h4>
            <p class="text-gray-600 dark:text-gray-400 font-body">PKP terdaftar dengan track record solid</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-linear-to-br from-navy-500 to-teal-500 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 font-heading mb-2">Konsultasi Gratis</h4>
            <p class="text-gray-600 dark:text-gray-400 font-body">Diskusi spesifikasi sesuai kebutuhan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-navy-900 dark:bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-1">
            <h3 class="text-xl font-bold text-white font-heading mb-4">
              Bahari Sentosa Abadi
            </h3>
            <p class="text-gray-300 font-body leading-relaxed mb-6">
              Distributor resmi garam berkualitas tinggi dari PT. Unichem Candi Indonesia. Melayani kebutuhan industri dan konsumsi sejak 2019 dengan komitmen kualitas terbaik.
            </p>
            
            <!-- Contact Info -->
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-gray-300 font-body">+62 813-3031-0676</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-gray-300 font-body">baharisentosaa@gmail.com</span>
              </div>
            </div>
          </div>

          <!-- Menu -->
          <div class="lg:col-span-1">
            <h3 class="text-lg font-semibold text-white font-heading mb-6">Menu</h3>
            <nav class="space-y-3">
              <NuxtLink 
                to="/" 
                class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
              >
                Beranda
              </NuxtLink>
              <NuxtLink 
                to="/tentang" 
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
                to="/layanan" 
                class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
              >
                Layanan
              </NuxtLink>
              <NuxtLink 
                to="/kontak" 
                class="block text-gray-300 hover:text-teal-400 font-body transition-colors duration-300"
              >
                Kontak
              </NuxtLink>
            </nav>
          </div>

          <!-- Locations -->
          <div class="lg:col-span-2">
            <h3 class="text-lg font-semibold text-white font-heading mb-6">Lokasi Kami</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Office Location -->
              <div class="bg-navy-800/50 dark:bg-gray-800/50 rounded-lg p-6 border border-navy-700 dark:border-gray-700">
                <div class="flex items-start space-x-3 mb-3">
                  <svg class="w-5 h-5 text-teal-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-teal-400 font-heading">Kantor</h4>
                    <p class="text-gray-300 font-body mt-1">
                      Gelam Candi, Sidoarjo.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Factory Location -->
              <div class="bg-navy-800/50 dark:bg-gray-800/50 rounded-lg p-6 border border-navy-700 dark:border-gray-700">
                <div class="flex items-start space-x-3 mb-3">
                  <svg class="w-5 h-5 text-teal-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-teal-400 font-heading">Pabrik</h4>
                    <p class="text-gray-300 font-body mt-1">
                      Pabrik PT. Unichemcandi - Manyarsidorukun, Gresik.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div class="mt-8">
              <h4 class="font-semibold text-white font-heading mb-4">Sertifikasi</h4>
              <div class="flex flex-wrap gap-3">
                <div class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full">
                  <span class="text-teal-300 text-sm font-body">Halal MUI</span>
                </div>
                <div class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full">
                  <span class="text-teal-300 text-sm font-body">ISO 9001</span>
                </div>
                <div class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full">
                  <span class="text-teal-300 text-sm font-body">ISO 14000</span>
                </div>
                <div class="px-3 py-1 bg-teal-600/20 border border-teal-500/30 rounded-full">
                  <span class="text-teal-300 text-sm font-body">FSSC ISO 22000</span>
                </div>
                <div class="px-3 py-1 bg-navy-600/20 border border-navy-500/30 rounded-full">
                  <span class="text-navy-300 text-sm font-body">PKP Terdaftar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-navy-700 dark:border-gray-700 mt-12 pt-8">
          <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
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
            <div class="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-gray-300 text-sm font-body">Pengusaha Kena Pajak (PKP)</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <a 
                  href="https://wa.me/6281330310676" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                  </svg>
                </a>
                <a 
                  href="mailto:baharisentosaa@gmail.com"
                  class="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
