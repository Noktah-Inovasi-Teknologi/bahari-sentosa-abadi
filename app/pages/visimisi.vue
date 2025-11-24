<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <!-- Company Logo -->
          <div class="flex justify-center items-center space-x-4 mb-8">
            <img src="/bsa-logo.avif" alt="Bahari Sentosa Abadi Logo" class="h-20 w-20 rounded-full object-cover" />
            <div class="h-16 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div class="text-left">
              <h1 class="text-3xl font-bold text-primary-600 dark:text-primary-400 font-heading">Bahari Sentosa Abadi</h1>
              <p class="text-lg text-gray-600 dark:text-gray-400 font-body">Distributor Garam Terpercaya</p>
            </div>
          </div>
          
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 font-heading mb-6">
            Visi & Misi Perusahaan
          </h2>
          
          <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-body max-w-4xl mx-auto">
            Komitmen kami untuk menjadi distributor garam terdepan di Indonesia dengan mengutamakan kualitas, 
            pelayanan prima, dan kepercayaan pelanggan sebagai fondasi utama dalam setiap langkah bisnis kami.
          </p>
        </div>
      </div>
    </section>

    <!-- Visi Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left side - Content -->
          <div class="space-y-8">
            <div class="flex items-center space-x-4 mb-8">
              <div class="w-16 h-16 bg-linear-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 font-heading">
                Visi Kami
              </h3>
            </div>
            
            <div class="bg-linear-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-700">
              <blockquote class="text-2xl lg:text-3xl font-bold text-primary-700 dark:text-primary-300 font-heading leading-relaxed italic">
                "Menjadi distributor garam terkemuka di Indonesia yang terpercaya, berkelanjutan, dan memberikan nilai terbaik 
                bagi pelanggan melalui produk berkualitas tinggi dan layanan profesional yang unggul."
              </blockquote>
            </div>
            
            <!-- Visi Breakdown -->
            <div class="space-y-6">
              <h4 class="text-xl font-semibold text-primary-600 dark:text-primary-400 font-heading mb-4">
                Pencapaian Visi Kami:
              </h4>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-primary-500 rounded-full shrink-0"></div>
                  <span class="text-gray-700 dark:text-gray-300 font-body">Distribusi ke seluruh Indonesia</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-primary-500 rounded-full shrink-0"></div>
                  <span class="text-gray-700 dark:text-gray-300 font-body">Kualitas produk terjamin</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-primary-500 rounded-full shrink-0"></div>
                  <span class="text-gray-700 dark:text-gray-300 font-body">Kepercayaan 70+ klien</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-primary-500 rounded-full shrink-0"></div>
                  <span class="text-gray-700 dark:text-gray-300 font-body">Layanan profesional 24/7</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right side - Image -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <img
                src="/bsa-1.avif"
                alt="Bahari Sentosa Abadi Vision - Leading Salt Distribution"
                class="w-full h-96 lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-linear-to-t from-primary-900/40 to-transparent"></div>
              
              <!-- Overlay Stats -->
              <div class="absolute bottom-6 left-6 right-6">
                <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6">
                  <div class="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div class="text-2xl font-bold text-primary-600 dark:text-primary-400 font-heading">5+</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 font-body">Tahun Pengalaman</div>
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-secondary-600 dark:text-secondary-400 font-heading">70+</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 font-body">Klien Terpercaya</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Misi Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left side - Image -->
          <div class="relative lg:order-1">
            <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <img
                src="/product-6.avif"
                alt="Bahari Sentosa Abadi Mission - Quality Salt Products"
                class="w-full h-96 lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-linear-to-t from-secondary-900/40 to-transparent"></div>
              
              <!-- Certifications Overlay -->
              <div class="absolute bottom-6 left-6 right-6">
                <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4">
                  <h4 class="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">Sertifikasi</h4>
                  <div class="flex flex-wrap gap-2">
                    <UBadge color="primary" variant="soft" size="sm">Halal MUI</UBadge>
                    <UBadge color="primary" variant="soft" size="sm">ISO 9001</UBadge>
                    <UBadge color="primary" variant="soft" size="sm">FSSC 22000</UBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right side - Content -->
          <div class="space-y-8 lg:order-2">
            <div class="flex items-center space-x-4 mb-8">
              <div class="w-16 h-16 bg-linear-to-br from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-secondary-600 dark:text-secondary-400 font-heading">
                Misi Kami
              </h3>
            </div>
            
            <!-- Misi List -->
            <div class="space-y-6">
              <!-- Misi 1 -->
              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="shrink-0 w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300 font-heading mb-2">
                      Mengutamakan Kualitas Produk
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                      Menyediakan garam berkualitas tinggi dengan standar internasional, bersertifikat Halal MUI, 
                      ISO 9001, dan FSSC 22000 untuk memenuhi kebutuhan industri dan konsumsi.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Misi 2 -->
              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-primary-700 dark:text-primary-300 font-heading mb-2">
                      Memberikan Pelayanan Prima
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                      Melayani pelanggan dengan profesional, responsif 24/7, dan memberikan konsultasi teknis 
                      untuk menyesuaikan spesifikasi kebutuhan setiap klien.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Misi 3 -->
              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="shrink-0 w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300 font-heading mb-2">
                      Membangun Distribusi Nasional
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                      Memperluas jaringan distribusi ke seluruh Indonesia dengan pengiriman tepat waktu dan 
                      sistem logistik yang handal untuk menjangkau setiap wilayah.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Misi 4 -->
              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-primary-700 dark:text-primary-300 font-heading mb-2">
                      Berkomitmen pada Keberlanjutan
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                      Menjalankan bisnis dengan prinsip berkelanjutan, ramah lingkungan, dan mendukung 
                      pertumbuhan ekonomi nasional melalui kemitraan yang saling menguntungkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nilai-nilai Perusahaan Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 font-heading mb-4">
            Nilai-Nilai Perusahaan
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body">
            Prinsip-prinsip fundamental yang menjadi landasan dalam setiap keputusan bisnis dan 
            interaksi dengan seluruh stakeholder.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Nilai 1 -->
          <div class="text-center group">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-linear-to-br from-primary-500 to-primary-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-primary-700 dark:text-primary-300 font-heading mb-3">
              Integritas
            </h3>
            <p class="text-gray-600 dark:text-gray-400 font-body leading-relaxed">
              Berkomitmen pada kejujuran, transparansi, dan etika bisnis yang tinggi dalam setiap transaksi.
            </p>
          </div>

          <!-- Nilai 2 -->
          <div class="text-center group">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-linear-to-br from-secondary-500 to-secondary-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 font-heading mb-3">
              Inovasi
            </h3>
            <p class="text-gray-600 dark:text-gray-400 font-body leading-relaxed">
              Terus berinovasi dalam teknologi distribusi dan pelayanan untuk meningkatkan kepuasan pelanggan.
            </p>
          </div>

          <!-- Nilai 3 -->
          <div class="text-center group">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-linear-to-br from-primary-500 to-primary-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-primary-700 dark:text-primary-300 font-heading mb-3">
              Kolaborasi
            </h3>
            <p class="text-gray-600 dark:text-gray-400 font-body leading-relaxed">
              Membangun kemitraan jangka panjang yang saling menguntungkan dengan semua stakeholder.
            </p>
          </div>

          <!-- Nilai 4 -->
          <div class="text-center group">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-linear-to-br from-secondary-500 to-secondary-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 font-heading mb-3">
              Keunggulan
            </h3>
            <p class="text-gray-600 dark:text-gray-400 font-body leading-relaxed">
              Selalu mengutamakan kualitas terbaik dalam produk dan pelayanan untuk mencapai standar tertinggi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white font-heading mb-6">
          Bergabunglah dengan Misi Kami
        </h2>
        
        <p class="text-xl text-primary-100 dark:text-primary-200 leading-relaxed font-body mb-8">
          Mari bersama-sama mewujudkan visi menjadi distributor garam terpercaya di Indonesia. 
          Hubungi kami untuk memulai kemitraan yang menguntungkan.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <UButton
            :to="`https://wa.me/6281330310676?text=Halo%20Bahari%20Sentosa%20Abadi,%20saya%20tertarik%20untuk%20bermitra%20dan%20mengetahui%20lebih%20lanjut%20tentang%20visi%20misi%20perusahaan%20Anda`"
            target="_blank"
            color="neutral"
            size="xl"
            class="px-10 py-5 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
            </svg>
            Hubungi Kami via WhatsApp
          </UButton>

          <UButton
            to="/tentangkami"
            variant="outline"
            color="neutral"
            size="xl"
            class="px-10 py-5 transform hover:scale-105 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>